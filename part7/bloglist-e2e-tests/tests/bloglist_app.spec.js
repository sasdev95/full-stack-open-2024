const { test, describe, expect, beforeEach } = require('@playwright/test')
const { loginWith, createBlog } = require('./helper')

describe('Blog app', () => {
    beforeEach(async ({ page, request }) => {
        await request.post('/api/testing/reset')
        await request.post('/api/users', {
            data: { name: 'Superuser', username: 'root2', password: 'sde123' }
        })
        await request.post('/api/users', {
            data: { name: 'Regular user', username: 'sasdevn', password: 'sde123' }
        })

        await page.goto('/')
    })

    test('Login form is shown', async ({ page }) => {
        const loginHeader = await page.getByText('Log in to application')
        await expect(loginHeader).toBeVisible()

        await expect(page.locator('input[name="Username"]')).toBeVisible()
        await expect(page.locator('input[name="Password"]')).toBeVisible()
        await expect(page.locator('button', { hasText: 'login' })).toBeVisible()
    })

    describe('Login', () => {
        test('succeeds with correct credentials', async ({ page }) => {
            await loginWith(page, 'root2', 'sde123')
            await expect(page.getByText('Superuser logged in')).toBeVisible()
        })
    
        test('fails with wrong credentials', async ({ page }) => {
            await loginWith(page, 'root2', 'wrong')
    
            const errorDiv = await page.locator('.notification')
            await expect(errorDiv).toContainText('Wrong username or password')
            await expect(errorDiv).toHaveCSS('border-style', 'solid')
            await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)')
            await expect(page.getByText('Superuser logged in')).not.toBeVisible()
        })
    })

    describe('When logged in', () => {
        beforeEach(async ({ page }) => {
            await loginWith(page, 'root2', 'sde123')
        })

        const blog = { title: 'Test Title', author: 'Test Author', url: 'http://testUrl.com' }

        test('a new blog can be created', async ({ page }) => {
            await createBlog(page, blog.title, blog.author, blog.url)
            await expect(page.getByTestId('blogEntry')).toContainText('Test Title by Test Author')
        })

        test('an existing blog can be liked', async ({ page }) => {
            await createBlog(page, blog.title, blog.author, blog.url)
            await page.click('text="view"')
            await page.click('text="like"')
            await page.waitForSelector('text="1 likes"', { state: 'visible' })

            const likesText = await page.locator('text="1 likes"').textContent()
            expect(likesText).toContain('1 likes')
        })

        test('blogs are sorted by likes in descending order', async ({ page }) => {
            await createBlog(page, 'Blog One', 'Author One', 'http://demo.com/one', 4)
            await createBlog(page, 'Blog Two', 'Author Two', 'http://demo.com/two', 5)
            await createBlog(page, 'Blog Three', 'Author Three', 'http://demo.com/three', 3)
            await page.reload()

            const likesElements = await page.locator('[data-testid^="blogLikes-"]')
            const likesCounts = await likesElements.evaluateAll(
                nodes => nodes.map(node => Number(node.textContent.match(/(\d+)/)[1]))
            )

            for (let i = 1; i < likesCounts.length; i++) {
                expect(likesCounts[i-1]).toBeGreaterThanOrEqual(likesCounts[i])
            }
        })

        test('a blog can be deleted by its creator', async ({ page }) => {
            await createBlog(page, blog.title, blog.author, blog.url)
            await page.click('text="view"')
            await page.on('dialog', async dialog => {
                await dialog.accept()
            })
            await page.click('text="remove"')

            await expect(page.locator(`text="${blog.title} by ${blog.author}"`)).not.toBeVisible()
            await expect(page.locator(`text="${blog.url}"`)).not.toBeVisible()
        })
    })

    test('Blog remove button visibility is restricted to the creator', async ({ page }) => {
        // Create new blog with admin user
        await loginWith(page, 'root2', 'sde123')
        const blog = { title: 'Admin Blog', author: 'Admin', url: 'http://adminBlog.com' }
        await createBlog(page, blog.title, blog.author, blog.url)
        await page.click('text="logout"')
        await expect(page.locator('button', { hasText: 'login' })).toBeVisible();
        
        // Regular user intends to delete admin's blog, but cannot
        await loginWith(page, 'sasdevn', 'sde123')
        await expect(page.locator(`text="${blog.title} by ${blog.author}"`)).toBeVisible();
        await page.click('text="view"')
        await expect(page.locator('text="remove"')).toBeHidden()
    })
})
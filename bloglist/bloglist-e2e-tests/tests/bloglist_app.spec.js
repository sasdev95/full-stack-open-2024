const { test, describe, expect, beforeEach, afterEach } = require('@playwright/test');
const { loginWith, createBlog } = require('./helper');

describe('Blog app', () => {
    beforeEach(async ({ page, request }) => {
        await request.post('/api/testing/reset');
        await request.post('/api/users', {
            data: { name: 'Superuser', username: 'root', password: 'sde123' }
        });
        await request.post('/api/users', {
            data: { name: 'Regular user', username: 'sasdevn', password: 'sde123' }
        });

        await page.goto('/');
    })

    afterEach(async ({ request }) => {
        await request.post('/api/testing/reset');
    })

    test('Login form is shown', async ({ page }) => {
        const loginHeader = await page.getByText('Log in to application');
        await expect(loginHeader).toBeVisible();

        await expect(page.locator('input[name="username"]')).toBeVisible();
        await expect(page.locator('input[name="password"]')).toBeVisible();
        await expect(page.locator('button', { hasText: 'Login' })).toBeVisible();
    })

    describe('Login', () => {
        test('succeeds with correct credentials', async ({ page }) => {
            await loginWith(page, 'root', 'sde123');
            await expect(page.getByText('Superuser logged in')).toBeVisible();
        })
    
        test('fails with wrong credentials', async ({ page }) => {
            await loginWith(page, 'root', 'wrong');
    
            const errorDiv = await page.locator('.notification');
            await expect(errorDiv).toContainText('Wrong username or password');
            await expect(errorDiv).toHaveCSS('border-style', 'solid');
            await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)');
            await expect(page.getByText('Superuser logged in')).not.toBeVisible();
        })
    })

    describe('When logged in', () => {
        beforeEach(async ({ page }) => {
            await loginWith(page, 'root', 'sde123')
        });

        const blog = { title: 'Test Title', author: 'Test Author', url: 'http://testUrl.com' };

        test('a blog can be created and liked', async ({ page }) => {
            await createBlog(page, blog.title, blog.author, blog.url);
            await expect(page.getByText('Test Title by Test Author')).toBeVisible();

            await page.waitForSelector('a:has-text("View Details")', { timeout: 5000 });
            const viewDetailsAnchors = page.locator('a:has-text("View Details")');
            await viewDetailsAnchors.last().click();

            await page.click('text="Like"');
            await page.waitForSelector('text="1 likes"', { state: 'visible' });

            const likesText = await page.locator('text="1 likes"').textContent();
            expect(likesText).toContain('1 likes');
        })

        test('a blog can be deleted by its creator', async ({ page }) => {
            await page.waitForSelector('a:has-text("View Details")', { timeout: 5000 });
            const viewDetailsAnchors = page.locator('a:has-text("View Details")');
            await viewDetailsAnchors.last().click();

            await page.on('dialog', async dialog => {
                await dialog.accept();
            });
            await page.click('text="Remove"')

            await expect(page.locator(`text="${blog.title} by ${blog.author}"`)).not.toBeVisible();
            await expect(page.locator(`text="${blog.url}"`)).not.toBeVisible();
        })
    })

    test('Blog remove button visibility is restricted to the creator', async ({ page }) => {
        await loginWith(page, 'sasdevn', 'sde123');
        await page.waitForSelector('a:has-text("View Details")', { timeout: 5000 });
        const viewDetailsAnchors = page.locator('a:has-text("View Details")');
        await viewDetailsAnchors.last().click();
        await expect(page.locator('text="Remove"')).toBeHidden();
    })
})
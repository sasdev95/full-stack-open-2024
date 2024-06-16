const { test, describe, expect, beforeEach } = require('@playwright/test')
const { loginWith, createNote } = require('./helper')

describe('Note app', () => {
    beforeEach(async ({ page, request }) => {
        await request.post('/api/testing/reset')
        await request.post('/api/users', {
            data: {
                name: 'Superuser',
                username: 'root',
                password: 'sde123'
            }
        })

        await page.goto('/')
    })

    test('front page can be opened', async ({ page }) => {
        const locator = await page.getByText('Notes')
        await expect(locator).toBeVisible()
        await expect(page.getByText('Note app, Department of Computer Science, University of Helsinki 2024')).toBeVisible()
    })

    test('user can log in with correct credentials', async ({ page }) => {
        await loginWith(page, 'root', 'sde123')
        await expect(page.getByText('Superuser logged in')).toBeVisible()
    })

    test('login fails with wrong password', async ({ page }) => {
        await loginWith(page, 'root', 'wrong')

        const errorDiv = await page.locator('.error')
        await expect(errorDiv).toContainText('Wrong Credentials')
        await expect(errorDiv).toHaveCSS('border-style', 'solid')
        await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)')
        await expect(page.getByText('Superuser logged in')).not.toBeVisible()
    })

    describe('when logged in', () => {
        beforeEach(async ({ page }) => {
            await loginWith(page, 'root', 'sde123')
        })

        test('a new note can be created', async ({ page }) => {
            await createNote(page, 'a note created by playwright')
            await expect(page.getByText('a note created by playwright')).toBeVisible()
        })

        describe('and multiple notes exist', () => {
            beforeEach(async ({ page }) => {
                await createNote(page, 'first note')
                await createNote(page, 'second note')
                await createNote(page, 'third note')
            })

            test('importance can be changed', async ({ page }) => {
                await page.pause()
                const otherNoteElement = await page.getByText('second note').locator('..')
                
                await otherNoteElement.getByRole('button', { name: 'make not important' }).click()
                await expect(otherNoteElement.getByText('make important')).toBeVisible()
            })
        })
    })
})
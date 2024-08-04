const loginWith = async (page, username, password) => {
    await page.locator('input[name="username"]').fill(username)
    await page.locator('input[name="password"]').fill(password)
    await page.locator('button[type="submit"]').click()
}

const createBlog = async (page, title, author, url) => {
    await page.click('text="create blog"')
    await page.fill('#title', title)
    await page.fill('#author', author)
    await page.fill('#url', url)
    await page.click('button[type="submit"]')
    await page.locator(`text=${title} by ${author}`).waitFor();
}

export { loginWith, createBlog }
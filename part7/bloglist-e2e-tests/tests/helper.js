const loginWith = async (page, username, password) => {
    await page.getByTestId('username').fill(username)
    await page.getByTestId('password').fill(password)
    await page.getByRole('button', { name: 'login' }).click()
}

const createBlog = async (page, title, author, url) => {
    await page.getByRole('button', { name: 'create blog' }).click()
    await page.fill('#title', title)
    await page.fill('#author', author)
    await page.fill('#url', url)
    await page.getByRole('button', { name: 'create' }).click()
    await page.locator(`.blogTitleAuthor:has-text("${title}")`).waitFor()
}

export { loginWith, createBlog }
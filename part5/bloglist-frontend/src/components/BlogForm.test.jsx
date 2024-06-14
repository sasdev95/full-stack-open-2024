import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

describe('<BlogForm />', () => {
    test('calls onSubmit with correct details when a new blog is created', async () => {
        const mockHandler = vi.fn()

        render(<BlogForm createBlog={mockHandler} />)

        const title = screen.getByLabelText('Title:')
        const author = screen.getByLabelText('Author:')
        const url = screen.getByLabelText('URL:')
        const saveButton = screen.getByText('create')

        await userEvent.type(title, 'Testing is fun')
        await userEvent.type(author, 'Tester')
        await userEvent.type(url, 'https://testblog.com')
        await userEvent.click(saveButton)

        expect(mockHandler).toHaveBeenCalledTimes(1)
        expect(mockHandler).toHaveBeenCalledWith({
            title: 'Testing is fun',
            author: 'Tester',
            url: 'https://testblog.com'
        })
    })
})
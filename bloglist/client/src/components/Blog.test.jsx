import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

describe('<Blog />', () => {
    const blog = {
        title: 'Component testing in React',
        author: 'React Tester',
        url: 'http://react-testing.com',
        likes: 10,
    };

    test('renders title and author, but does not render URL or likes by default', () => {
        const { container } = render(<Blog blog={blog} />);

        const titleAuthorText = screen.getByText(
            'Component testing in React by React Tester',
            { exact: false }
        );
        expect(titleAuthorText).toBeDefined();

        const divForUrlAndLikes = container.querySelector('.blogDetails');
        expect(divForUrlAndLikes.style.display).toBe('none');
    });

    test('shows URL and likes when the view button is clicked', async () => {
        render(<Blog blog={blog} />);

        const viewButton = screen.getByText('view');
        await userEvent.click(viewButton);

        const urlElement = screen.getByText('http://react-testing.com', {
            exact: false,
        });
        const likesElement = screen.getByText('10 likes', { exact: false });

        expect(urlElement).toBeVisible();
        expect(likesElement).toBeVisible();
    });

    test('clicking the like button twice calls the event handler onLike twice', async () => {
        const mockHandler = vi.fn();

        render(<Blog blog={blog} onLike={mockHandler} />);

        const user = userEvent.setup();

        const viewButton = screen.getByText('view');
        await userEvent.click(viewButton);

        const likeButton = screen.getByText('like');
        await user.click(likeButton);
        await user.click(likeButton);

        expect(mockHandler).toHaveBeenCalledTimes(2);
    });
});

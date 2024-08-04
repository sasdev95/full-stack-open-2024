import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlog, removeBlog, appendComment } from '../slices/blogsSlice';
import { setNotification, clearNotification } from '../slices/notificationsSlice';
import { Typography, Button, Card, CardContent, TextField, List, ListItem, Link as MuiLink } from '@mui/material';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = useSelector(state => state.blogs.find(blog => blog.id === id));
    const user = useSelector(state => state.loggedUser.user);
    const dispatch = useDispatch();

    const handleLike = () => {
        const updatedBlog = { ...blog, likes: blog.likes + 1 };
        dispatch(updateBlog(updatedBlog));
    };

    const handleRemove = () => {
        if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}?`)) {
            dispatch(removeBlog(blog.id));
            dispatch(setNotification({ message: `${blog.title} by ${blog.author} has been deleted`, isError: false }));
            setTimeout(() => {
                dispatch(clearNotification());
            }, 3000);
            navigate('/');
        }
    };

    const addComment = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        if (comment) {
            dispatch(appendComment({ id: blog.id, comment }));
            event.target.comment.value = '';
        }
    };

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <Typography variant="h4">{blog.title} by {blog.author}</Typography>
                <MuiLink href={blog.url} target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">{blog.url}</Typography>
                </MuiLink>
                <Typography variant="body2">
                    {blog.likes} likes
                    <Button onClick={handleLike} variant="contained" sx={{ ml: 1 }}>Like</Button>
                </Typography>
                <Typography variant="body2">Added by {blog.author}</Typography>
                {user.username === blog.user.username && (
                    <Button onClick={handleRemove} variant="outlined" color="error">Remove</Button>
                )}
                <Typography variant="h6" sx={{ mt: 2 }}>Comments</Typography>
                <form onSubmit={addComment}>
                    <TextField
                        name="comment"
                        label="Add a comment..."
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 1 }}
                    />
                    <Button type="submit" variant="contained">Add Comment</Button>
                </form>
                <List>
                    {blog.comments.map((comment, index) => (
                        <ListItem key={index}>{comment}</ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default BlogDetails;
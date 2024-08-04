import { useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';

const BlogForm = ({ createBlog }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    const handleCreateBlog = (event) => {
        event.preventDefault();
        createBlog({ title, author, url });
        setTitle('');
        setAuthor('');
        setUrl('');
    };

    return (
        <Container component="form" onSubmit={handleCreateBlog} sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Create New Blog
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    fullWidth
                />
                <TextField
                    id="author"
                    label="Author"
                    variant="outlined"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    fullWidth
                />
                <TextField
                    id="url"
                    label="URL"
                    variant="outlined"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Create
                </Button>
            </Box>
        </Container>
    );
};

export default BlogForm;

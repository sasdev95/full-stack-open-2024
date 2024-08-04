import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../services/users';
import { Typography, List, ListItem, CircularProgress, Paper, Container } from '@mui/material';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getUser(id)
            .then(response => setUser(response))
            .catch(error => console.log('Error fetching user:', error));
    }, [id])

    if (!user) {
        return (
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                {user.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Added Blogs
            </Typography>
            <List>
                {user.blogs.map(blog => (
                    <ListItem key={blog.id}>
                        <Typography variant="body1">{blog.title}</Typography>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default User;
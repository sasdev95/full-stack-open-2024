import { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Notification from './Notification';

const LoginForm = ({ onSubmit, notification }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        onSubmit(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <Container 
            component={Paper} 
            elevation={6} 
            sx={{ p: 4, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 400 }}
        >
            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                Log in to application
            </Typography>
            <Notification message={notification.message} isError={notification.isError} />
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="username"
                    value={username}
                    onChange={({ target}) => setUsername(target.value)}
                    autoFocus
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    value={password}
                    onChange={({ target}) => setPassword(target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default LoginForm;
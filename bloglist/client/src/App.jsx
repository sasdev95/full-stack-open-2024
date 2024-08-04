import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';

import { setUser, clearUser } from './slices/loggedUserSlice';
import { fetchBlogs, addBlog } from './slices/blogsSlice'
import { setNotification, clearNotification } from './slices/notificationsSlice';

import BlogDetails from './components/BlogDetails';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import User from './components/User';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

import blogService from './services/blogs';
import loginService from './services/login';

import { AppBar,
        Toolbar,
        Card,
        CardContent,
        Grid,
        Typography,
        Button,
        CssBaseline,
        Link as MuiLink,
        Container,
        Box,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

const App = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    const notification = useSelector(state => state.notifications);
    const user = useSelector(state => state.loggedUser.user);
    const blogFormRef = useRef();

    useEffect(() => {
        dispatch(fetchBlogs());
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            dispatch(setUser(user));
            blogService.setToken(user.token);
        }
    }, [dispatch]);

    const showNotification = (message, isError = false) => {
        dispatch(setNotification({ message, isError }));
        setTimeout(() => {
            dispatch(clearNotification());
        }, 3000);
    };

    const createBlog = async (blogData) => {
        blogFormRef.current.toggleVisibility();
        try {
            const newBlog = await blogService.create(blogData);
            dispatch(addBlog(newBlog));
            showNotification(`A new blog ${newBlog.title} by ${newBlog.author} added`);
        } catch (exception) {
            showNotification('Failed to add blog', true);
        }
    };

    const handleLogin = async (username, password) => {
        try {
            const user = await loginService.login({ username, password });
            window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
            blogService.setToken(user.token);
            dispatch(setUser(user));
            showNotification('Logged in successfully');
        } catch (exception) {
            showNotification('Wrong username or password', true);
            setTimeout(() => {
                setNotification({ message: null, isError: false });
            }, 3000);
        }
    };

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogAppUser');
        dispatch(clearUser());
        blogService.setToken(null);
    };

    if (user === null) {  // User not logged in
        return <LoginForm onSubmit={handleLogin} notification={notification} />;
    }

    return (  // User is logged in
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: 2}}>
                        <MuiLink component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
                            <Typography variant="h6" component="span">Blogs</Typography>
                        </MuiLink>
                        <MuiLink component={Link} to="/users" color="inherit">
                            <Typography variant="h6" component="span">Users</Typography>
                        </MuiLink>
                        <Typography>{user.name} logged in</Typography>
                    </Box>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
                    Blogs
                </Typography>
                <Notification message={notification.message} isError={notification.isError} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Togglable buttonLabel="create blog" ref={blogFormRef}>
                                <BlogForm createBlog={createBlog} />
                            </Togglable>
                            <br />
                            <Grid container spacing={2}>
                                {blogs.map((blog) => (
                                    <Grid item xs={12} md={6} key={blog.id}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    {blog.title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    by {blog.author}
                                                </Typography>
                                                <Button size="small" component={Link} to={`/blogs/${blog.id}`}>
                                                    View Details
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    } />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:id" element={<User />} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
};

export default App;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../slices/usersSlice';
import { Link as RouterLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from '@mui/material';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" component="div" style={{ padding: '20px' }}>
                Users
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right"><strong>Blogs Created</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                                <Link component={RouterLink} to={`/users/${user.id}`} color="primary">
                                    {user.name}
                                </Link>
                            </TableCell>
                            <TableCell align="right">{user.blogs.length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserList;
import { createSlice } from '@reduxjs/toolkit';
import userService from '../services/users';

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers(state, { payload }) {
            return payload;
        }
    },
});

export const fetchUsers = () => async dispatch => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
};

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
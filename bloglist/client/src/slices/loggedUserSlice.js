import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

export const loggedUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
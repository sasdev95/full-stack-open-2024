import { createSlice } from '@reduxjs/toolkit';

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        message: null,
        isError: false,
    },
    reducers: {
        setNotification: (state, action) => {
            state.message = action.payload.message;
            state.isError = action.payload.isError;
        },
        clearNotification: (state) => {
            state.message = null;
            state.isError = false;
        },
    },
});

export const { setNotification, clearNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
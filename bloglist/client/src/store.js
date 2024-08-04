import { configureStore } from '@reduxjs/toolkit';
import loggedUserReducer from './slices/loggedUserSlice';
import blogsReducer from './slices/blogsSlice';
import usersReducer from './slices/usersSlice';
import notificationsReducer from './slices/notificationsSlice';

export const store = configureStore({
    reducer: {
        loggedUser: loggedUserReducer,
        blogs: blogsReducer,
        users: usersReducer,
        notifications: notificationsReducer,
    },
});
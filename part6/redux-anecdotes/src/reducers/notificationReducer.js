import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        clearNotification() {
            return ''
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions

let timeoutId;
export const setNotificationWithTimeout = (message, seconds) => dispatch => {
    clearTimeout(timeoutId)
    dispatch(setNotification(message))
    timeoutId = setTimeout(() => {
        dispatch(clearNotification())
    }, seconds * 1000)
}

export default notificationSlice.reducer
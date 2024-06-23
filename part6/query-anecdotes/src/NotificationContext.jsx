import { createContext, useReducer, useContext } from 'react'

const initialState = { message: '', type: 'info' }

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return { message: action.message, type: action.notificationType }
        case 'CLEAR_NOTIFICATION':
            return { ...state, message: '' }
        default:
            return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState)

    return (
        <NotificationContext.Provider value={{ state, dispatch }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)

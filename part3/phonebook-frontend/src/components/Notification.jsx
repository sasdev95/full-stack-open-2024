const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    
    const messageText = message.text || ""
    const messageClass = message.type === 'error' ? 'error' : 'success'
    
    return (
        <div className={messageClass}>
            {messageText}
        </div>
    )
}

export default Notification
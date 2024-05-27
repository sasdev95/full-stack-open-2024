const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    if (message.includes('Added') || message.includes('Updated')) {
        return (
            <div className='success'>
                {message}
            </div>
        )
    }
    
    return (
        <div className='error'>
            {message}
        </div>
    )
}

export default Notification
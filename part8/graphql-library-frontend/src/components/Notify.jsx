import { useState, useEffect } from 'react'

const Notify = ({ message }) => {
    
    const [visible, setVisible] = useState('false')

    useEffect(() => {
        if (message) {
            setVisible(true)
            setTimeout(() => setVisible(false), 5000)
        }
    }, [message])
    
    if (!visible) {
        return null
    }

    return (
        <div style={{ color: 'red' }}>
            {message}
        </div>
    )
  }
  
  export default Notify
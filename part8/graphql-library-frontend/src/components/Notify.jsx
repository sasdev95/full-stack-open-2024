import { useState, useEffect } from 'react'

const Notify = ({ errorMessage }) => {
    const [visible, setVisible] = useState('false')

    useEffect(() => {
        if (errorMessage) {
            setVisible(true)
            const timer = setTimeout(() => {
                setVisible(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errorMessage])
    
    if (!visible) {
        return null
    }

    return (
        <div style={{color: 'red'}}>
            {errorMessage}
        </div>
    )
  }
  
  export default Notify
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    message:{
        fontFamily:"Poppins !important",
        fontSize:'20px !important',
        
    }
}))
const AlertScreen = () => {
    const [isValid, setIsValid] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            setIsValid(false)
            navigate("/", { replace: true })
        }, 5000)
    }, [isValid])
    return (
        isValid ? <div>Thank you for Signup You want to access our Dashboard login from laptop</div> : ""
    )
}

export default AlertScreen
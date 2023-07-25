import React from 'react'
import { Commet } from 'react-loading-indicators'

const Spinner = ({ color, size, text }) => {
    return (
        <div style={{ display: 'flex', widht: '100%' ,justifyContent:'center',alignItems:'center'}}>
            <Commet color={color} size={size} text={text} />
        </div>
    )
}

export default Spinner
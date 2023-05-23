import React from 'react'
import { Button } from '@mui/material'

const ButtonElement = (props) => {
    const { title, onClick } = props

    return (
        <Button
            onClick={onClick}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            variant="contained"
        >{title}</Button>
    )
}

export default ButtonElement
import * as React from 'react';
import { IconButton } from '@mui/material';

const IconButtonElement = (props) => {
    const { icon, onClick, disabled, name } = props;

    return (
        <IconButton
            name={name}
            disabled={disabled}
            onClick={onClick}
        >
            {icon}
        </IconButton>

    );
}

export default IconButtonElement
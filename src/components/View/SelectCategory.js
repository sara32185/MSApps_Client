import * as React from 'react';
import TextField from '@mui/material/TextField';
import { BL } from '../Hooks'
import { WrapTextAndInput } from './Style'

const SelectCategory = (props) => {
    const { handleClose } = props
    const {
        _setCategory,
    } = BL()

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            handleClose()
            _setCategory(event.target.value)
        }
    };

    return (
        <WrapTextAndInput>
            <h3>Type here a category name </h3>
            <TextField
                id="outlined-basic"
                label="Type category name"
                variant="outlined"
                name={"select-category"}
                onKeyDown={handleKeyDown}
            />
            <span>Press "enter" to get images from the category</span>

        </WrapTextAndInput>
    );
}

export default SelectCategory
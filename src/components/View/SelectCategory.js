import * as React from 'react';
import TextField from '@mui/material/TextField';
import { BL } from 'components/Hooks'
import { WrapTextAndInput } from './Style'
import { texts } from 'utils/Texts'

const SelectCategory = (props) => {
    const { handleClose } = props
    const text = texts.selectCategory
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
            <h3>{text.modalTitle}</h3>
            <TextField
                id="outlined-basic"
                label={text.inputLabel}
                variant="outlined"
                name={"select-category"}
                onKeyDown={handleKeyDown}
            />
            <span>{text.note}</span>

        </WrapTextAndInput>
    );
}

export default SelectCategory
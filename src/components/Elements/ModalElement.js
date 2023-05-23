import * as React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledDialog } from './Style'

const ModalElement = (props) => {
    const { openModal, handleClose } = props,
        { open, data } = openModal

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div>
            <StyledDialog
                // fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    {data?.ContentComponent && <data.ContentComponent
                        handleClose={handleClose}
                    />}
                </DialogContent>
                <DialogActions>
                    {data?.FooterComponent && <data.FooterComponent
                        handleClose={handleClose}
                    />
                    }
                </DialogActions>
            </StyledDialog>
        </div>
    );
}


export default ModalElement
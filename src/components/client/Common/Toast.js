import { Snackbar } from '@mui/material'
import React from 'react'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Toast = ({ msg, type, handleClose, open }) => {
    return (
        <Snackbar
            anchorOrigin={{
                horizontal: "right",
                vertical: "bottom",
            }}
            autoHideDuration={3000}
            open={open}
            onClose={handleClose}
        >
            <Alert severity={type}>{msg}</Alert>
        </Snackbar>
    )
}

export default Toast
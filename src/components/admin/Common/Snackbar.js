import { Snackbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toogleSnackbar } from '../../../redux/client/common/snackbarSlice';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CustomizedSnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open, type, msg } = useSelector(state => state.snackbar);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toogleSnackbar(false, type, msg));
  };

  return (

    <Snackbar
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}

    >
      <Alert severity={type}>{msg}</Alert>
    </Snackbar>

  );
}

export default CustomizedSnackbar
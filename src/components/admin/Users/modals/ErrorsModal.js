import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Container } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import ErrorModalData from "./ErrorModalData";

const styles = {
  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
  },
};
const useStyle = makeStyles((theme) => ({
  closeicn: {
    color: "#3330E4 !important",
  },
  modalheading: {
    fontSize: "20px !important",
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    marginLeft: "15px !important",
  },
  headingbody: {
    display: "flex",
    height: "70px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EBEBEB",
  },
  approvebtn: {
    fontSize: "16px !important",
    fontWeight: "500 !important",
    fontFamily: "Poppins !important",
    color: "white !important",
    textTransform: "capitalize !important",
    backgroundColor: "#3330E4 !important",
    marginRight: "5px !important",
    padding: "4px 30px !important",
  },
  btnbody: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "20px",
  },
  searchBar: {
    width: "100%",
    boxShadow: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  search: {
    background: "white",
    border: "1px solid #BDBDBD !important",
    paddingLeft: "15px",
    paddingRight: "5px",
    borderRadius: "25px !important",
    width: "650px",
    height: "50px",
    fontSize: "16px !important",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
  },
}));

const ErrorsModal = ({ closeModal, title }) => {
  const errorModalData = [
    {
      title: "Team message",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "05-10-2022(03:12:18)",
    },
    {
      title: "New message",
      message:"Lorem ipsum dolor sit adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "09-10-2022(04:12:18)",
    },
    {
      title: "Name",
      message:"Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "10-12-2022(08:12:18)",
    },
  ];
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          title="Select Resoans"
          open={true}
        >
          <Box sx={styles.boxStyle}>
            <div className={classes.headingbody}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className={classes.modalheading}
              >
                File Information Detail
              </Typography>
              <div>
                <IconButton>
                  <CancelRoundedIcon
                    className={classes.closeicn}
                    onClick={() => closeModal(false)}
                  />
                </IconButton>
              </div>
            </div>
            <Container>
              <div className={classes.btnbody}>
                <Button
                  className={classes.approvebtn}
                  variant="contained"
                  onClick={() => closeModal(false)}
                >
                  Approve
                </Button>
              </div>
              <div>
                {errorModalData.map((item, index) => (
                  <ErrorModalData
                    title={item.title}
                    message={item.message}
                    date={item.date}
                  />
                ))}
              </div>
              <div className={classes.searchBar}>
                <TextField
                  variant="standard"
                  InputProps={{
                    className: classes.search,
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment>
                        <IconButton style={{ backgroundColor: "#3330E4" }}>
                          <SendIcon sx={{ color: "white" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Comment"
                  disableUnderline={true}
                />
              </div>
            </Container>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ErrorsModal;

import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { IconButton } from "@mui/material";

const styles = {
  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 430,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  },
};
const useStyle = makeStyles((theme) => ({
  openmodalbtn: {
    backgroundColor: "#3330E4 !important",
    color: "white !important",
    textTransform: "capitalize !important",
    fontSize: "12px !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    width: "120px !important",
  },
  closeicn: {
    top: "0 !important",
    right: "0 !important",
    position: "absolute !important",
  },
  modalheading: {
    fontSize: "20px !important",
    fontWeight: "600 !important",
    fontFamily: "Poppins !important",
  },
  headingbody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modaldescbody: {
    border: "1px solid #E8E8E8",
    display: "flex !important",
    height: "36px",
    borderRadius: "5px  ",
    alignItems: "center !important",
    textAlign: "center !important",
    flexDirection: "row !important",
    marginTop: "20px",
  },
  modaldesc: {
    fontSize: "14px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
  },
  submitbtn: {
    fontSize: "12px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    color: "white !important",
    textTransform: "capitalize !important",
    backgroundColor: "#3330E4 !important",
    marginRight: "5px !important",
  },
  cancelbtn: {
    fontSize: "12px !important",
    fontWeight: "400 !important",
    textTransform: "capitalize !important",
    fontFamily: "Poppins !important",
    marginLeft: "5px !important",
    borderColor: "#CECECE !important",
    color: "#06283D !important",
  },
  btnbody: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
}));

const Modals = ({ closeModal, projectName }) => {
  const classes = useStyle();
  const sendCancleToParent = useCallback((isCancle) => {
    
  }, [])
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
            <IconButton className={classes.closeicn} onClick={() => closeModal(false)}>
              <CancelRoundedIcon />
            </IconButton>
            <div className={classes.headingbody}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className={classes.modalheading}
              >
                Select Reasons
              </Typography>
            </div>
            <div className={classes.modaldescbody}>
              <Typography
                id="modal-modal-description"
                sx={{ ml: 1 }}
                className={classes.modaldesc}
              >
                Project Name :- {projectName}
              </Typography>
            </div>
            {/* <div className={classes.headingbody}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className={classes.modalheading}
              >
                Select Reasons
              </Typography>
            </div>
            <div className={classes.modaldescbody}>
              <Typography
                id="modal-modal-description"
                sx={{ ml: 1 }}
                className={classes.modaldesc}
              >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </Typography>
            </div>
            <div className={classes.modaldescbody}>
              <Typography
                id="modal-modal-description"
                sx={{ ml: 1 }}
                className={classes.modaldesc}
              >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </Typography>
            </div>
            <div className={classes.modaldescbody}>
              <Typography
                id="modal-modal-description"
                sx={{ ml: 1 }}
                className={classes.modaldesc}
              >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </Typography>
            </div>
            <div className={classes.modaldescbody}>
              <Typography
                id="modal-modal-description"
                sx={{ ml: 1 }}
                className={classes.modaldesc}
              >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </Typography>
            </div>
            <div className={classes.modaldescbody}>
              <Typography
                id="modal-modal-description"
                sx={{ ml: 1 }}
                className={classes.modaldesc}
              >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </Typography>
            </div> */}
            <div className={classes.btnbody}>
              <Button className={classes.submitbtn} variant="contained" onClick={() => closeModal(false)}>
                Submit
              </Button>
              <Button
                className={classes.cancelbtn}
                variant="outlined"
                onClick={() => closeModal(false)}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Modals;

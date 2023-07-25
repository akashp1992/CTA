import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { IconButton, TextField } from "@mui/material";
import { Container } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
    // paddingTop: "20px",
    // paddingBottom: "20px"
  },
  headingbody: {
    display: "flex",
    height: "70px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EBEBEB",
  },
  formbody: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  assign: {
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
    height: "40px !important",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%) !important",
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    width: "100% !important",
  },
  textfieldtitle: {
    color: "#06283D !important",
    paddingTop: "5px",
    fontFamily: "Poppins !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
  },
  disable: {
    paddingTop: "10px",
    color: "#8C8C8C !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
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
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "20px",
    paddingTop: "20px"
  },
}));

const UserModal = ({ closeModal, title, items }) => {
  const classes = useStyle();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
                {title}
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
              <div className={classes.form}>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    Company Name
                  </Typography>
                  <Typography className={classes.disable}>
                    {items.company_name}
                  </Typography>
                </div>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    Company Address
                  </Typography>
                  <Typography className={classes.disable}>
                    {items.company_address}
                  </Typography>
                </div>
              </div>
              <div className={classes.form}>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    State Of Formation
                  </Typography>
                  <Typography className={classes.disable}>
                    {items.state_of_formation}
                  </Typography>
                </div>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    TIN EIN Number
                  </Typography>
                  <Typography className={classes.disable}>
                    {items.tin_ein_number}
                  </Typography>
                </div>
              </div>
              <div className={classes.form}>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    Owner Name
                  </Typography>
                  <Typography className={classes.disable}>
                    {items.project_owner.owner_name}
                  </Typography>
                </div>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    Address
                  </Typography>
                  <Typography className={classes.disable}>
                    {items.project_owner.address}
                  </Typography>
                </div>
              </div>
              <div className={classes.form}>
                <div style={{ width: "50%" }}>
                  <Typography className={classes.textfieldtitle}>
                    Attachments
                  </Typography>
                  {
                    items.document.map((data) => (
                      <>
                        <Typography className={classes.disable}>
                          Document :- {data.document !== null ? data.document : "No Document Uploaded"}
                        </Typography>
                        <Typography className={classes.disable}>
                          License and Passport :- {data.license_and_passport !== null ? data.license_and_passport : "No Document Uploaded"}
                        </Typography>
                        <Typography className={classes.disable}>
                          Passport :- {data.passport !== null ? data.passport : "No Document Uploaded"}
                        </Typography>
                      </>
                    ))
                  }
                </div>
              </div>
              <div className={classes.btnbody}>
                <Button
                  className={classes.approvebtn}
                  variant="contained"
                  onClick={() => closeModal(false)}
                >
                  Ok
                </Button>
              </div>
            </Container>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default UserModal;

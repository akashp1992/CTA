import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { IconButton} from "@mui/material";
import { Container } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ReplyIcon from "@mui/icons-material/Reply";
import deleteIcon from "../../../../images/admin/delete.svg";

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
  divider: {
    marginTop:"10px !important",
    marginBottom: "10px !important"
  },
  messageheadingbody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageheading: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    fontFamily: "Poppins !important",
  },
  messagedesc: {
    width: "500px",
  },
  messagedate: {
    display: "flex",
    justifyContent: "flex-end",
  },
  desc: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
  },
  date: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
  },
  menuitem: {
    fontSize: "12px !important",
    fontWeight: "400 !important",
    fontFamily: "Poppins !important",
  },
  menuicn: {
    marginRight: "5px !important",
    width: "17px !important",
  }
}));

const ErrorsModalData = ({ closeModal, title, message, date }) => {
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
            <Container>
              <div>
                <Divider className={classes.divider}/>
              </div>
              <div>
                <div className={classes.messageheadingbody}>
                  <div>
                    <Typography className={classes.messageheading}>
                      {title}
                    </Typography>
                  </div>
                  <div>
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <MoreHorizIcon sx={{ color: "#1C1B1F" }} />
                    </IconButton>
                  </div>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1,
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem className={classes.menuitem}>
                      <ReplyIcon className={classes.menuicn} /> Reply
                    </MenuItem>
                    <MenuItem className={classes.menuitem}>
                      <img src={deleteIcon} className={classes.menuicn} />{" "}
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
                <div className={classes.messagedesc}>
                  <Typography className={classes.desc}>{message}</Typography>
                </div>
                <div className={classes.messagedate}>
                  <Typography className={classes.date}>{date}</Typography>
                </div>
              </div>
            </Container>
      </div>
    </>
  );
};

export default ErrorsModalData;

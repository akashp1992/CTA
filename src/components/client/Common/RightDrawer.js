import { AppBar, Button, Container, Drawer, FormControl, IconButton, Select, MenuItem, Typography, InputLabel } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from 'react-redux';
import { getTeamMemberList } from '../../../redux/admin/team/teamMemberSlice';
import { doAssignProject } from '../../../redux/admin/projects/assignProjectSlice';
import { toogleSnackbar } from '../../../redux/client/common/snackbarSlice';
import { setTypeNotification } from '../../../redux/admin/notification/notificationSlice';
import { sendNotificationType } from '../../common/notificationUtils';
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
        width: '150px !important',
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
const RightDrawer = ({ setDrawerOpen, open, title, items, isAdmin }) => {
    const classes = useStyle();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [team, setTeam] = React.useState([]);
    const [member, setMember] = React.useState("")


    const handleClickApprove = () => {
        setDrawerOpen(false)
        dispatch(setTypeNotification(sendNotificationType("error_status_approve")))
    }
    const handleChange = (event) => {
        setMember(event.target.value);
        const request = {
            data: {
                project_id: items.id,
                team_member_id: event.target.value,
                status: 1
            },

            onSuccess: (res) => {
                if (res.success) {
                    dispatch(setTypeNotification(sendNotificationType("project_assign_member")))
                    dispatch(toogleSnackbar({
                        open: true,
                        msg: res.message,
                        type: "success"
                    }))
                    setDrawerOpen(false)
                }
            },
            onFail: (err) => {

            }
        }
        dispatch(doAssignProject(request))
    };
    useEffect(() => {
        const request = {
            onSuccess: (res) => {
                setTeam(res.data)
            },
            onFail: (err) => {

            }
        }

        if (isAdmin) {
            dispatch(getTeamMemberList(request))
        }
    }, [])
    const handleRedirect = () => {
        return navigate(`/dashboard/Create/Process/${items.id}/${items.status}`, { replace: true })
    }
    return (
        <Drawer style={{ zIndex: 999 }} ModalProps={{ disableScrollLock: false }} hideBackdrop sx={{ width: 800 }}  onClose={() => setDrawerOpen(false)} variant='temporary' anchor={'right'} open={open} >
            <AppBar title={title} />
            {
                isAdmin ?
                    <Container>
                        <div className={classes.formbody}>
                            <div>
                                {console.log("teams", items.id)}
                                <FormControl>
                                    <Select
                                        value={member}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ "aria-label": "Without label" }}
                                        className={classes.assign}
                                        placeholder="Assign"
                                    >
                                        <MenuItem disabled value="">
                                            <p>Assign To</p>
                                        </MenuItem>
                                        {
                                            team?.map((items) => (
                                                <MenuItem key={items.id} value={items.id}>{items.first_name}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <IconButton>
                                    <MoreHorizIcon sx={{ color: "#1C1B1F !important" }} />
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Company Name
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.company_name}
                                </Typography>
                            </div>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Company Address
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.company_address}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    State Of Formation
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.state_of_formation}
                                </Typography>
                            </div>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    TIN EIN Number
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.tin_ein_number}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Owner Name
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.project_owner.owner_name}
                                </Typography>
                            </div>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Address
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.project_owner.address}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Attachments
                                </Typography>
                                {
                                    items?.document.map((data) => (
                                        <>
                                            <Typography className={classes.disable}>
                                                Document :- {data?.document !== null ? data?.document : "No Document Uploaded"}
                                            </Typography>
                                            <Typography className={classes.disable}>
                                                License and Passport :- {data?.license_and_passport !== null ? data?.license_and_passport : "No Document Uploaded"}
                                            </Typography>
                                            <Typography className={classes.disable}>
                                                Passport :- {data?.passport !== null ? data?.passport : "No Document Uploaded"}
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
                                onClick={handleClickApprove}
                            >
                                Approve
                            </Button>
                            <Button
                                className={classes.approvebtn}
                                variant="contained"
                                onClick={() => setDrawerOpen(false)}
                            >
                                Disapprove
                            </Button>
                        </div>
                    </Container>
                    :
                    <Container>
                        {console.log("mydata",items)}
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Company Name
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.company_name}
                                </Typography>
                            </div>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Company Address
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.company_address}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    State Of Formation
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.state_of_formation}
                                </Typography>
                            </div>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    TIN EIN Number
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.tin_ein_number}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Owner Name
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.project_owner?.owner_name}
                                </Typography>
                            </div>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Address
                                </Typography>
                                <Typography className={classes.disable}>
                                    {items?.project_owner?.address}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.form}>
                            <div style={{ width: "50%" }}>
                                <Typography className={classes.textfieldtitle}>
                                    Attachments
                                </Typography>
                                {
                                    items?.document?.map((data) => (
                                        <>
                                            <Typography className={classes.disable}>
                                                Document :- {data?.document !== null ? data?.document : "No Document Uploaded"}
                                            </Typography>
                                            <Typography className={classes.disable}>
                                                License and Passport :- {data?.license_and_passport !== null ? data?.license_and_passport : "No Document Uploaded"}
                                            </Typography>
                                            <Typography className={classes.disable}>
                                                Passport :- {data?.passport !== null ? data?.passport : "No Document Uploaded"}
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
                                onClick={handleRedirect}
                            >
                                View Process
                            </Button>
                            <Button
                                className={classes.approvebtn}
                                variant="contained"
                                onClick={() => setDrawerOpen(false)}
                            >
                                Cancle
                            </Button>
                        </div>
                    </Container>
            }
        </Drawer>
    )
}

export default RightDrawer
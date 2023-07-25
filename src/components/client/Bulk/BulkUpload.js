import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink } from 'react-router-dom';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: "#F8F8F8",
        borderRadius: "5px",
        height: "850px",
        padding: '10px'
    },
    usertitle: {
        fontSize: "30px !important",
        fontWeight: "600 !important",
        fontFamily: "Poppins !important",
        color: "#3A3A3A !important",
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    navLink: {
        textDecoration: 'none',
        marginTop: '15px !important'
    },
    navLinkContent: {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    banner: {
        fontFamily: 'Poppins !important',
        fontSize: '18px !important',
        fontWeight: '500 !important',
        marginTop: '15px !important'
    },
    upgrade: {
        fontFamily: 'Poppins !important',
        fontSize: '18px !important',
        fontWeight: '700 !important',
        color: "#3330E4 !important"
    }
}))

const BulkUpload = () => {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Typography className={classes.usertitle}>Bulk Upload</Typography>
            <div className={classes.contentRoot}>
                <LockOutlinedIcon sx={{ color: '#3A3A3A' }} fontSize="large" />
                <Typography className={classes.banner}>Please upgrade your plan to Long-Form to use bulk-processing.</Typography>
                <NavLink to="/dashboard/Settings/1" className={classes.navLink}>
                    <div className={classes.navLinkContent}>
                        <Typography className={classes.upgrade}> Upgrade Now </Typography>{<ArrowForwardOutlinedIcon sx={{  color: "#3330E4 !important"}} />}
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default BulkUpload
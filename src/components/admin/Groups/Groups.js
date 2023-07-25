import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Button, Container, TextField, Typography } from '@mui/material'
import GroupPagination from './GroupPagination'
import GroupManage from './GroupManage'
import { useNavigate } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column'
    },
    headingMain: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFmaily: 'Poppins !important',
        fontWeight: '700 !important',
        fontSize: '20px !important'
    },
    tableHead: {
        background: '#F7F7F7 !important',
        fontFamily: ' !important Poppins',
        fontStyle: " !important normal",
        fontWeight: " !important 600",
        fontSize: " !important 18px",
        lineHeight: " !important 27px",
        color: " !important #06283D",
    },
    tableRow: {
        borderBottom: '1ix solid #D9D9D9 !important'
    },
    errorTable: {
        fontFamily: 'poppins',
        marginTop: '30px'
    },
    tableData: {
        padding: '14px 10px',
        fontSize: '13px',
        color: '#404446',
        borderBottom: " 1px solid #D9D9D9",
    },
    tablAV: {
        padding: '14px 10px',
        borderBottom: " 1px solid #D9D9D9",
    }
}))
const Groups = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const gotoAddRecord = () => {
        navigate("/dashboard/Admin/CreateGroup")
    }
    return (

        <div className={classes.main}>
            <div className={classes.headingMain}>
                <Typography className={classes.title}>Groups</Typography>
                <Button variant='contained' onClick={gotoAddRecord}>New Record</Button>
            </div>
            <table style={{ width: '100%', borderSpacing: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                    <p>Search</p>
                    <TextField sx={{ margin: '10px 0px 10px 10px' }} inputProps={{ style: { height: '0px', width: '105px' } }} />
                </div>
                <tr className={classes.tableHead}>

                </tr>
                <td>
                    <GroupPagination />
                </td>
            </table>
        </div>
    )
}

export default Groups
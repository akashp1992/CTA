import { Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import dot from '../../images/dott.svg'
const useStyle = makeStyles((theme) => ({
    mainRoot: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '150px',
        paddingRight: '150px',
        paddingTop: '50px',
        paddingBottom: '50px',
        background: '#F7F7F7'
    },
    leftContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    rightContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    formContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    typoText: {
        fontFamily: 'Poppins !important',
        fontWeight: 'bold !important',
        fontSize: '30px !important',

    },
    outerShadow: {
        boxShadow: '-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)',
        width: '321px',
        background: '#F7F7F7',
        borderRadius: '10px'
    },
    innerShadow: {
        boxShadow: 'inset -5px -5px 9px rgb(254 254 254 / 83%), inset 5px 5px 9px rgb(94 104 121 / 19%)',
        background: 'transprent',
        borderRadius: '5px',
        width: '100%',
        padding: '5px',
        paddingLeft: '10px',
        margin: "8px !important"

    },
    lableRoot: {
        fontFamily: 'Poppins !important',
        fontSize: '16px !important',
        color: '#00323A !important',
        fontWeight: '700 !important',
        marginBottom: '10px',
        marginTop: '20px'
    },
    formRoot: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        padding: '20px'
    },
    submitButton: {
        background: '#3330E4',
        boxShadow: '-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins',
        borderRadius: '5px',
        paddingLeft: '38px',
        paddingRight: '38px',
        paddingBottom: '3px',
        paddingTop: '3px',
        fontWeight: "600",
        marginTop: '13px',

    }
}))
function AboutSignUp() {
    const classes = useStyle();
    return (
        <div className={classes.mainRoot}>
            <div className={classes.leftContent}>
                <Typography className={classes.typoText}>Sign up now on simple <span style={{ color: "#3330E4" }}>2 Step</span><br />
                    to be top of new CTA law</Typography>
            </div>
            <div className={classes.rightContent}>
                <div className={classes.formContent}>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                        <InputLabel>First Name</InputLabel>
                        <Input placeholder='Enter First Name' className={classes.innerShadow} disableUnderline />

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <InputLabel> Last Name</InputLabel>
                        <Input placeholder='Enter Last Name' className={classes.innerShadow} disableUnderline />

                    </div>
                </div>
                <div><img src={dot} alt="" /></div>
                <div className={classes.submitButton}>Next for Sign up</div>

            </div>

        </div>
    )
}

export default AboutSignUp
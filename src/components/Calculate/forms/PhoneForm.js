import { FormControl, FormLabel, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: '10px',
    },
    mainLabel: {
        color: "#06283D !important",
        fontFamily: "Poppins !important",
        fontWeight: "400 !important",
        fontSize: "22px !important",
        marginBottom: "15px ",

    },
    textField: {
        padding: '10px !important',
        marginLeft: '10px !important',


    },
    textFieldRoot: {
        height: '30px !important'
    }
}))
const PhoneForm = () => {
    const classes = useStyle();
    return (
        <div >
            <FormControl>
                <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className={classes.mainLabel}
                >
                    7.Your Phone Number?
                </FormLabel>
                <div className={classes.container}>
                    <TextField className={classes.textFieldRoot} inputProps={{ className: classes.textField }} placeholder='Your Phone Number' />

                </div>
            </FormControl>
        </div>
    )
}

export default PhoneForm
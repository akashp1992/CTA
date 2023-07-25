import React from 'react'
import { makeStyles } from "@mui/styles";
import { style } from '@mui/system';
import add from '../../images/add.svg'


import {
    Button,
    Container,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";

const useStyle = makeStyles((theme) => ({
    PageButton: {
        background: '#3330E4 !important',
        width: '150px',
        height: '37px'
    },
    addProject: {
        display: 'flex',
        justifyContent: 'space-beetween',

    },
    buttonText: {
        fontSize: '12px !important',

        textTransform: "lowercase",
}
}))

function NewProjectPage() {
    const classes = useStyle()
    return (
        <div>
            <div className={classes.pageParent}>
                <Container>
                    <Button variant="contained" className={classes.PageButton}>
                        <div className={classes.addProject}>
                            <img src={add} />
                            <Typography className={classes.buttonText}>Create New Project</Typography>
                        </div>
                    </Button>
                </Container>
            </div>
        </div>
    )
}

export default NewProjectPage
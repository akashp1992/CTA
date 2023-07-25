import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useCallback, useState } from 'react'
import edit from '../../../../images/client/edit.svg'
import pause from '../../../../images/client/pause.svg'
import move from '../../../../images/client/move.svg'
import Modals from '../../modals/Modals'
import FileDetailsForm from '../../Common/Project/FileDetailsForm'

const useStyle = makeStyles((theme) => ({
    progressSteper: {
        padding: '30px',
        marginTop: '30px'
    },
    pageTitle: {
        color: '#06283D',
        fontSize: '20px !important',
        fontFamily: 'Poppins !important',
        lineHeight: '30px !important',
        fontWeight: "600 !important",
        marginBottom: '30px !important'

    },
    editButton: {
        width: '150px !important',
        height: '36px !important',
        background: '#3330E4 !important',
        float: 'right',
        borderRadius: '5px',

    },
    buttonText: {
        color: '#FFFFFF  !important',
        fontFamily: 'poppins !important',
        fontSize: '12px !important',
        lineHeight: '18px !important',

    },
    eButton: {
        display: "flex !important",
        justifyContent: "center !important",
        alignItems: "center !important",
        height: "100% !important",
        gap: '6px',
        width: '100%',
        textTransform: 'inherit!important'
    },
    buttons: {
        display: 'flex !important',
        justifyContent: 'space-between',
        marginTop: '50px'
    },
    leftButtons: {
        display: 'flex !important', gap: '8px'
    },
    pausebutton: {
        width: '95px !important',
        height: '36px !important',
        background: '#3330E4 !important',
        borderRadius: '5px',
        display: "flex !important",
        justifyContent: "center !important",
        alignItems: "center !important",
        height: "100% !important",
        gap: '8px'

    },
    content: {
        display: 'flex',
        justifyContent: "space-between",
        width: "550px",
        marginTop: '50px !important'
    },
    dark: {
        fontSize: '18px !important',
        fontFamily: 'poppins !important',
        fontWeight: '500 !important',
        lineHeight: '27px !important',
        color: '#06283D !important',
        marginBottom: '10px !important'
    },
    light: {
        color: '#BEBEBE',
        fontSize: '18px !important',
        fontFamily: 'poppins !important',
        fontWeight: '500 !important',
        lineHeight: '27px !important',
        marginBottom: '30px !important'
    },
    uploadButton: {
        margin: "0 !important",
        padding: "0 !important",
        fontSize: '18px !important',
        fontFamily: 'poppins !important',
        fontWeight: '500 !important',
        lineHeight: '27px !important',
        color: '#06283D !important',
        marginBottom: '10px !important',
        textTransform: 'inherit!important'
    },
    saveButton: {
        width: '150px !important',
        height: '36px !important',
        background: '#3330E4 !important',
        borderRadius: '5px',
    },
    cancelButton: {
        border: '1px solid #CECECE',
        width: '150px !important',
        height: '36px !important',
        borderRadius: '5px',
    },
    bottomBtn: {
        display: 'flex',
        gap: '8px',
        marginTop: '50px'
    },
    cancelText: {
        color: '#06283D !important',
        fontFamily: 'poppins !important',
        fontSize: '12px !important',
        lineHeight: '18px !important',
    }

}))
const FileDetails = ({ id }) => {
    const classes = useStyle()
    const [openModal, setOpenModal] = React.useState(false);
    const [isDisable, setIsDisable] = useState(true)
    const [projectName, setProjectName] = useState("")
    const sendDataToParent = useCallback((projectName) => {
        setProjectName(projectName)
        console.log("projectName: ", projectName);
    }, [projectName])
    return (
        <div>
            <div className={classes.buttons}>
                <div className={classes.leftButtons}>
                    <div className={classes.pausebutton}>
                        <Button className={classes.eButton}>
                            <img src={pause} />
                            <Typography className={classes.buttonText}>Pause File</Typography>
                        </Button>
                    </div>
                    <div className={classes.pausebutton}>
                        <Button className={classes.eButton}>
                            <img src={move} />
                            <Typography className={classes.buttonText}>Move File</Typography>
                        </Button>
                    </div>
                </div>
                <div className={classes.editButton}>
                    <Button className={classes.eButton} onClick={() => { setOpenModal(!openModal); setIsDisable(!isDisable) }}>
                        <img src={edit} /><Typography className={classes.buttonText}>Edit Details</Typography>
                    </Button>
                </div>
            </div>
            <div className={classes.content}>
                <FileDetailsForm isDisable={isDisable} projectId={id} sendDataToParent={sendDataToParent} />
            </div>
            {openModal && <Modals closeModal={setOpenModal} projectName={projectName} />}
        </div>
    )
}

export default FileDetails
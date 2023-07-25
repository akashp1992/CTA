import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";
import { Button, Container, Fade, Tooltip, tooltipClasses, Typography, Zoom } from "@mui/material";
import FileDetails from './process/FileDetails';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CheckIcon from '@mui/icons-material/Check'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import InfoIcon from '@mui/icons-material/InfoOutlined';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: "#707070",
            height: '1px',
            zIndex: '-1',
            position: 'relative'
        },
    },

    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#707070', height: '1px',
        borderRadius: 1,
        zIndex: '-1',
        position: 'relative'
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#fff', border: '1px solid #06283D',
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        background: "#FFF",
        border: '1px solid #06283D'
    }),
    ...(ownerState.completed && {
        background: "#3330E4",
        border: '0'
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {
                completed ? <CheckIcon fontSize='large' /> : <CheckIcon fontSize='large' sx={{ color: 'black' }} />
            }

        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};





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

const StepperProcess = (props) => {

    // const HtmlTooltip = styled(({ className, ...props }) => (
    //     <Tooltip {...props} classes={{ popper: className }} />
    // ))(({ theme }) => ({
    //     [`& .${tooltipClasses.tooltip}`]: {
    //         backgroundColor: '#3330E4 !important',
    //         color: '#FFFFFF',
    //         maxWidth: "70%",
    //         fontSize: theme.typography.pxToRem(12),
    //         border: '1px solid #dadde9',
    //     },
    // }));
    const params = useParams()
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [status, setStatus] = useState(0)
    const [isHover, setIsHover] = useState(false)

    const steps = [
        {
            title: 'CTA Filer Info',
            desc: 'file details',
            info: <Tooltip TransitionComponent={Zoom} title="Concerned business owner or beneficiary CTA filing party Information required" placement="bottom"><InfoIcon /></Tooltip>
        },
        {
            title: 'CTA Team Review',
            desc: 'review by cta',
            info: <Tooltip TransitionComponent={Zoom} title="Submitted CTA application is been reviewed internally
            " placement="bottom"><InfoIcon /></Tooltip>
        },
        {
            title: 'Under FinCen',
            desc: 'send to fincen',
            info: <Tooltip TransitionComponent={Zoom} title="The application has been submitted to FinCEN and waiting to get approved" placement='bottom'><InfoIcon /></Tooltip>
        },
        {
            title: 'CTA Filed',
            desc: 'cta filed',
            info: <Tooltip TransitionComponent={Zoom} title="Your CTA filing has been completed and your official certificate is available to download" placement='bottom'><InfoIcon /></Tooltip>
        }
    ];
    //total steps
    const totalSteps = () => {
        return steps.length
    }

    //completed Steps
    const completedSteps = () => {
        return Object.keys(completed).length
    }

    //check if isLastStep
    const isLastStep = () => {
        return activeStep === totalSteps() - 1
    }

    //check all steps completed
    const allStepsCompelted = () => {
        return completedSteps() === totalSteps()
    }

    //for next click
    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepsCompelted() ?
            steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep)
    }
    useEffect(() => {
        setStatus(params.status)
    }, [status])

    //for backClick
    const handleBack = () => {
        setActiveStep((preActiveStep) => preActiveStep - 1)
    }
    //steps render 
    function _renderStepContent(step) {
        switch (step) {
            case 0:
                return <FileDetails id={params.projectId} status={params.status} />;
            case 1:

            default:
                return <div>Not Found</div>;
        }
    }

    const classes = useStyle()
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };



    return (
        <>
            {console.log("ids prams", completedSteps.length)}
            <div>
                <div className={classes.parentProcess}>
                    <div>
                        <Typography className={classes.pageTitle}>Project Progress</Typography>
                    </div>
                    <div className={classes.progressSteper}>
                        <Container>
                            <Stack sx={{ width: '100%' }} spacing={4}>

                                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel StepIconComponent={ColorlibStepIcon}>{[label.title]}</StepLabel>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                                <p style={{ color: '#06283D', fontSize: '11px', textAlign: 'center', margin: 0, fontFamily: 'Poppins', marginRight: '10px' }}>{label.desc}</p>
                                                <div onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>{label.info}</div>
                                            </div>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Stack>
                        </Container>
                    </div>

                    {_renderStepContent(activeStep)}

                    <div className={classes.bottomBtn}>
                        <div className={classes.saveButton}>
                            <Button className={classes.eButton} disabled={status ? true : false} onClick={handleNext}>
                                <Typography className={classes.buttonText} >Submit</Typography>
                            </Button>
                        </div>
                        <div className={classes.cancelButton}>
                            <Button className={classes.eButton} disabled={status ? true : false} onClick={handleBack}>
                                <Typography className={classes.cancelText} >Back</Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StepperProcess


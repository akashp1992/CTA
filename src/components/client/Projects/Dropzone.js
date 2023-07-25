import { Button, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useCallback, useContext, useEffect } from 'react'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'
import upload from "../../../images/client/upload.svg";
import DeleteIcon from '@mui/icons-material/Delete';
import Toast from '../Common/Toast';
import FileContext from '../Common/file-context';
const useStyle = makeStyles((theme) => ({
    uplaoddocbody: {
        width: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F9FE",
        border: "1px #3330E4",
        borderStyle: "dashed",
        borderRadius: "10px",
        borderWidth: "3px",
        padding: "20px",
        paddingBottom: 0
    },
    title1: {
        fontSize: "10px !important",
        fontWeight: "400 !important",
        fontFamily: "Poppins !important",
        color: "#BEBEBE",
        paddingBottom: "5px",
        textAlign: 'center !important'
    },
    title2: {
        fontSize: "12px !important",
        fontWeight: "400 !important",
        fontFamily: "Poppins !important",
        color: "#06283D",
        paddingBottom: "0px",
        textAlign: 'center !important'
    },
    filebtn: {
        backgroundColor: "#3330E4 !important",
        fontSize: "12px !important",
        textTransform: "capitalize !important",
        marginTop: '20px !important'
    },
    uploadicn: {
        paddingRight: "7px",
    },
}))
const Dropzone = ({ isDisabled, fromFiles }) => {
    const [chooseFile, setChooseFiles] = useContext(FileContext)
    const [errors, setErrors] = useState("")
    const [urlFile, setUrlFile] = useState([])
    const [myFiles, setMyFiles] = useState([])
    const onDrop = useCallback((acceptedFiles, fileRejections) => {

        fileRejections.forEach((file) => {
            file.errors.forEach((err) => {
                if (err.code === "file-too-large") {
                    setErrors(`Error: ${err.message}`);
                }

                if (err.code === "file-length") {
                    setErrors(`Error: ${err.message}`);
                }
                if (err.code === "file-size") {
                    setErrors(`Error: ${err.message}`);
                }
            });
        });
        setMyFiles([...myFiles, ...acceptedFiles])
       
    }, [myFiles, chooseFile])

    useEffect(()=>{
        setUrlFile([chooseFile])
    },[])

    const { getRootProps, selectedFiles, getInputProps, isDragAccept, isDragReject, acceptedFiles, fileRejections } = useDropzone({
        maxFiles: 3,
        accept: {

            'image/jpeg': [],
            'image/png': [],
            'application/pdf': []

        }, validator: fileLengthValidator,
        multiple: true,
        onDrop: onDrop,
        disabled: isDisabled,
        
    })
    function fileLengthValidator(file) {
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            return {
                code: "file-too-large",
                message: `File is larger than 10Mb`
            };
        }
        if (!file.length > 3 || myFiles.length > 2) {
            return {
                code: "file-length",
                message: `File length to 3 above`
            };
        }

        return null
    }
    const classes = useStyle();
    const [isOpen, setIsOpen] = useState(false)
    const [msg, setMsg] = useState("Hello")
    const [type, setType] = useState("error");

    const removeFile = file => () => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
    }

    const createFile = urlFile.map((data) => {
        if (data.type === "license_and_passport") {
            return new File([data.license_and_passport], data.file_name, { type: `image/${data.file_name.split('.').pop()}` })
        }
    })



    const errorFuncation = (msg, open) => {
        setIsOpen(open);
        setMsg(msg)
    }
    const files = myFiles.map((file) => (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }} onClick={removeFile(file)} >

            <Typography key={file.path}>
                {file.path}</Typography>
            <IconButton aria-label="delete" disabled color="primary" >
                <DeleteIcon />
            </IconButton>

        </div>
    ));


    const filesContext = createFile.map((file) => (

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }} onClick={removeFile(file)} >

            <Typography key={file?.name}>
                {file?.name}</Typography>
            <IconButton aria-label="delete" disabled color="primary" >
                <DeleteIcon />
            </IconButton>

        </div>
    ))


    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        errors.map(e => (
            <Toast open={() => setIsOpen(true)} msg={e.message} type={"error"} handleClose={() => setIsOpen(false)} />
        ))
    ));
    return (

        <div className={classes.uplaoddocbody}>
            <div>
                {console.log("files", chooseFile)}
                {/* {isDragActive ? (
                    <Typography className={classes.title2}>
                        Release to drop the files here
                    </Typography>
                ) : (
                    <Typography className={classes.title2}>
                        Drag & drop file here
                    </Typography>
                )} */}
                <div>
                    <Typography className={classes.title1}>
                        Jpg, Png or PDF, smaller than 10mb
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.title2}>
                        Drag & drop file here
                    </Typography>
                </div>
            </div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <Button

                    variant="contained"
                    className={classes.filebtn}
                    component="span"


                >
                    <img src={upload} className={classes.uploadicn} /> Choose File
                </Button>

            </div>
            <aside>
                <ul>{files || fromFiles}</ul>
                <ul>{isDisabled ? filesContext : ""}</ul>
                <ul>{errors}</ul>
                {fileRejectionItems}
                {console.log("converted", urlFile)}
                {setChooseFiles(myFiles)}
            </aside>


        </div>

    )
}

export default Dropzone


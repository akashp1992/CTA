import { Button, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'
import upload from "../../../images/admin/upload.svg";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallback } from 'react';
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
    },
    title1: {
        fontSize: "10px !important",
        fontWeight: "400 !important",
        fontFamily: "Poppins !important",
        color: "#BEBEBE",
        paddingBottom: "5px",
    },
    title2: {
        fontSize: "18px !important",
        fontWeight: "400 !important",
        fontFamily: "Poppins !important",
        color: "#06283D",
        paddingBottom: "10px",
    },
    filebtn: {
        backgroundColor: "#3330E4 !important",
        fontSize: "12px !important",
        textTransform: "capitalize !important",
    },
    uploadicn: {
        paddingRight: "7px",
    },
}))
const Dropzone = ({ open }) => {
    const [errors, setErrors] = useState("")
    const [myFiles, setMyFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles, fileRejections) => {
      
        fileRejections.forEach((file) => {
            file.errors.forEach((err) => {
                if (err.code === "file-too-large") {
                    setErrors(`Error: ${err.message}`);
                }

                if (err.code === "file-length") {
                    setErrors(`Error: ${err.message}`);
                }
            });
        });
        setMyFiles([...myFiles, ...acceptedFiles])
    }, [myFiles])

    const { getRootProps, selectedFiles, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
        maxFiles: 3,
        accept: {

            'image/jpeg': [],
            'image/png': [],
            'application/pdf': []

        }, validator: fileLengthValidator,
        multiple: true,
        onDrop
    })
    function fileLengthValidator(file) {
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            return {
                code: "file-too-large",
                message: `File is larger than 10Mb`
            };
        }
        if (!file.length > 3) {
            return {
                code: "file-length",
                message: `File length to 3 above`
            };
        }

        return null
    }
    const classes = useStyle();
    const removeFile = file => () => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
    }
    const files = myFiles.map((file) => (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }} onClick={removeFile(file)}>
            <Typography key={file.path}>
                {file.path}</Typography>
            <IconButton aria-label="delete" disabled color="primary" >
                <DeleteIcon />
            </IconButton>
        </div>
    ));


    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        return (
            <li key={file.path}>
                {file.path}
                <ul>
                    {errors.map(e => <li key={e.code}>{e.message}</li>)}
                </ul>

            </li>
        )
    });

    return (
        <div className={classes.uplaoddocbody}>
            {console.log("files", myFiles)}
            <div>
                {isDragActive ? (
                    <Typography className={classes.title2}>
                        Release to drop the files here
                    </Typography>
                ) : (
                    <Typography className={classes.title2}>
                        Drag & drop file here
                    </Typography>
                )}

            </div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <Button
                    variant="contained"
                    className={classes.filebtn}
                    component="span"
                    onClick={open}
                >
                    <img src={upload} className={classes.uploadicn} /> upload
                </Button>

            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <div>{files}</div>
                <div>{errors}</div>
            </div>
        </div>
    )
}

export default Dropzone
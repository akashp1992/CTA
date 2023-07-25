import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useDispatch } from 'react-redux';
import { getFavouriteProject, RemoveFavouriteProject } from '../../../redux/client/project/favouriteProjectSlice';
import StarIcon from '@mui/icons-material/Star';
import CardItems from '../Dashboard/CardItems';
import fileIcon from "../../../images/client/projectimg.svg";
import Toast from '../Common/Toast';
import EmptyData from '../Common/EmptyData';
import { useSelector } from 'react-redux';
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
    },
    cardbody: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // margin: "12px 12px 15px 12px",
    },
    fileiconstyle: {
        width: "22px",
    },
    title: {
        fontSize: "14px !important",
        fontFamily: "Poppins !important",
        fontWeight: "600 !important",
        marginRight: "30px !important",
        textTransform: 'uppercase !important'
    },
    startIcn: {
        position: "absolute",
        width: "18px !important",
        right: "0",
        top: "0",
        marginRight: "2px",
    },
}))

const Favourite = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.favourite)
    const [data, setData] = useState([])
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [type, setType] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const request = {
            onSuccess: (res) => {
                console.log("dasd", res.data)
                setData(res.data)
            },
            onFail: (err) => {
                setData([])
            }
        }
        dispatch(getFavouriteProject(request))
    }, [])


    const handleRemoveClick = (projectId) => {
        const request = {
            data: {
                project_id: projectId,
                status: 2
            },
            onSuccess: (res) => {
                setOpen(true)
                setType("success")
                setMsg(res.message)
                //console.log("res remove project", res.message);
            },
            onFail: (err) => {
                setOpen(true)
                setType("error")
                setMsg(err.message)
                console.log("err remove project", err);
            }
        }
        dispatch(RemoveFavouriteProject(request))
        setData(data.filter((data) => data.project_id !== projectId))
    }
    return (
        <div className={classes.main}>
            <Typography className={classes.usertitle}>Favorite Projects</Typography>
            <Grid container spacing={4}>
                {
                    data && data.length !== 0 ?
                        data?.map((items, index) => (
                            <Grid item lg={3} md={4} sm={4}>
                                <Container>
                                    <Card className={classes.cardbody}>
                                        <CardActionArea>
                                            <CardContent>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",

                                                    }}
                                                >
                                                    <img src={fileIcon} className={classes.fileiconstyle} />&nbsp;&nbsp;&nbsp;
                                                    <Typography className={classes.title}>
                                                        {`CTA${items.uuid.slice(0, 4)}`}
                                                    </Typography>
                                                    <div onClick={() => handleRemoveClick(items.project_id)}>
                                                        <StarIcon sx={{ color: "#3330E4" }} className={classes.startIcn} />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </Container>
                            </Grid>
                        )) :
                        <EmptyData msg="No Favorite Projects Found" />
                }
            </Grid>
            <Toast open={open} msg={msg} type={type} handleClose={() => setOpen(false)} />
        </div>
    )
}

export default Favourite
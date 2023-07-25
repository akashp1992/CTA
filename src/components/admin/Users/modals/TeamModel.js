import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@mui/styles";
import { Container } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import av4 from '../../../../images/admin/av4.svg'

import MemberMenu from './Membermenu';
import Toast from '../../Common/Toast';
import { Avatar, Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeTeamMemberById } from '../../../../redux/admin/team/removeTeamMemberSlice';
import { getTeamMemberList } from '../../../../redux/admin/team/teamMemberSlice';
import { getTeamMemberByTeamId } from '../../../../redux/admin/team/teamMemberByTeamIdSlice';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { toogleSnackbar } from '../../../../redux/client/common/snackbarSlice';
import { doAdminTeamMember } from '../../../../redux/admin/team/markAsAdminSlice';
const usestyles = makeStyles((theme) => ({
    CreateTeam: {
        background: '#3330E4 !important',
        width: '164px !important',
        height: '40px !important'
    },
    addMemeber: {
        background: '#3330E4 !important',
        width: '138px !important',
        height: '36px !important',
        zIndex: 1
    },
    addProject: {
        display: 'flex !important',
        gap: '6px'
    },
    buttonText: {
        fontSize: '14px !important',
        color: '#fff',
        textTransform: "initial !important",
        fontFamily: 'poppins !important'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        background: "#EBEBEB",
        padding: "20px"
    },
    headerText: {
        fontFamily: 'Poppins !important',
        fontStyle: "normal !important",
        fontWeight: "700 !important",
        fontSize: " 20px !important",
        lineHeight: "30px !important",
        color: "#06283D !important",

    },
    CloseIcon: {
        color: 'white',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        background: '#3330E4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    },
    modalBody: {
        padding: '20px 0'
    },
    content: {
        marginTop: '20px',

    },
    parent: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '10px',
        alignItems: 'center'
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        width: '150px'
    },
    btnText: {
        fontFamily: 'Poppins !important',
        fontStyle: "normal !important",
        fontWeight: "400 !important",
        fontSize: "14px !important",
        lineHeight: "24px !important",
        /* identical to box height */

        textTransform: 'capitalize !important',
        color: "#E43030 !important",
    },
    text: {
        fontFamily: 'Poppins !important',
        fontStyle: "normal !important",
        fontWeight: "400 !important",
        fontSize: "14px !important",
        lineHeight: "24px !important",

        color: "#000000 !important",
    }
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#fff',
    // bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,

};

function TeamModel({ closeModal, id, isData }) {

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: "#GGFFGG",
                color: '#06283D',
                fontFamily: 'poppins',
                fontSize: '15px'
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    const classes = usestyles()
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const [teamId, setTeamId] = React.useState(id)
    const [listOfItems, setListOfItems] = React.useState([]);
    const [teamMemberData, setTeamMemberData] = React.useState([])
    const [removeId, setRemoveId] = React.useState(false)
    const [parentData, setParentData] = React.useState(null)
    const [state, updateState] = React.useState(false)
    const { removeTeamMemberData } = useSelector(state => state.removeTeamMember)
    var data = [];
    var data1 = []
    const filter = teamMemberData.map((items) => {
        return listOfItems.find((el) => el.id === items.team_member_id)
    })

    // const sendDataToParent = React.useCallback((isClick) => {
    //     console.log("isClick", isClick
    //     );
    //     setParentData(isClick)
    // }, [parentData])

    const sendDataToParent = React.useCallback((isClick) => updateState({ ...isClick }), []);
    const [isClicked, setIsClicked] = React.useState(false)
    React.useEffect(() => {
        const request = {
            data: {
                team_id: teamId,
            },
            onSuccess: (res) => {
                console.log("team e", res.data);
                res.data.map((items) => {
                    setTeamMemberData(items?.team_members)
                    const filterId = filter.find(el => el.id === items.team_id)
                    console.log("ids", filterId);
                })
            },
            onFail: (err) => {
                console.log("erro team", err);
            }
        }
        dispatch(getTeamMemberByTeamId(request))
        if (isClicked) {
            dispatch(getTeamMemberByTeamId(request))
        }
        console.log("isClicked", isClicked);
        if (removeId) {
            dispatch(getTeamMemberByTeamId(request))
        }
        // if (parentData) {
        //     dispatch(getTeamMemberByTeamId(request))
        // }
        const requestTeamMember = {
            onSuccess: (res) => {
                //setTeamMemberData(res.data.sort((a, b) => a.id - b.id))
                res.data.map((items) => {
                    data1.push({
                        id: items.id,
                        img: <Avatar {...stringAvatar(`${items.first_name.toUpperCase()} ${items.last_name.toUpperCase()}`)} />,
                        name: `${items.first_name} ${items.last_name}`,

                        text: 'remove'
                    }
                    )
                    setListOfItems(data1)
                })
            },
            onFail: (err) => {
            }
        }
        dispatch(getTeamMemberList(requestTeamMember))

        // if (parentData) {
        //     dispatch(getTeamMemberList(requestTeamMember))
        // }
    }, [removeId, state, isData, isClicked])

    function handleRemove(id) {
        const request = {
            data: {
                team_member_id: id,
                team_id: teamId
            },

            onSuccess: (res) => {
                res.data.status ?
                    setRemoveId(true) :
                    setRemoveId(false)
                dispatch(toogleSnackbar({ msg: res.message, type: "success", open: true }))
            },
            onFail: (err) => {

            }
        }
        dispatch(removeTeamMemberById(request))
        setOpen(true)
    }

    const handleMarkAdmin = (id, team_member_id, is_admin, isClicked) => {
        const request = {
            data: {
                team_member_id: team_member_id,
                team_id: id,
                is_admin: is_admin
            },
            onSuccess: (res) => {
                console.log("is_admin", res.data)
                if (res.success) {
                    dispatch(toogleSnackbar({ open: true, msg: res.message, type: "success" }))
                    setIsClicked({ ...isClicked })
                }
            },
            onFail: (err) => {
                console.log("is_admin err", err)
            }
        }
        dispatch(doAdminTeamMember(request))
    }
    return (
        <div>

            {console.log("filter new", removeId)}
            <Modal
                open={true}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={classes.modal}>
                        <div className={classes.header}>
                            <Typography className={classes.headerText}>Team Member</Typography>
                            <div className={classes.CloseIcon}
                                // onClick={handleClose}
                                onClick={() => { closeModal(false); isData(true) }}
                            ><CloseIcon /></div>
                        </div>
                        <Container>
                            <div className={classes.modalBody}>
                                <MemberMenu isOpen={true} teamId={id} sendDataToParent={sendDataToParent} />
                                <div className={classes.content}>
                                    {filter.length === 0 && filter.filter((el) => el === undefined) ?
                                        (<p style={{ display: 'flex', justifyContent: 'center' }}>No Team Members found</p>)
                                        :
                                        filter.map((member, index) => (
                                            <>
                                                <div className={classes.parent} key={index}>
                                                    <div className={classes.left}>
                                                        {member?.img}
                                                        <Typography className={classes.text}>{member?.name}</Typography>
                                                    </div>
                                                    <div style={{ alignItems: 'flex-start', display: 'flex', alignSelf: 'center' }}>
                                                        {
                                                            member?.is_admin === 0 ?
                                                                <Chip clickable label="mark as admin" onClick={() => handleMarkAdmin(member?.team_id, member?.team_member_id, 1, true)} /> :
                                                                <Chip clickable label="Admin" color="success" onClick={() => handleMarkAdmin(member?.team_id, member?.team_member_id, 0, true)} />


                                                        }
                                                    </div>
                                                    <div>
                                                        <Button className={classes.btnText} onClick={() => {
                                                            handleRemove(member?.team_member_id); setRemoveId(true)
                                                        }}>Remove</Button>
                                                    </div>
                                                </div>

                                            </>
                                        ))
                                    }
                                </div>
                            </div>

                        </Container>
                    </div>
                    {console.log("fiter no data", filter.includes((el) => el === undefined))}
                </Box>
            </Modal>

        </div>
    );
}

export default memo(TeamModel)
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import darkadd from '../../../../images/admin/darkadd.svg';
import add from '../../../../images/admin/add.svg';
import close from '../../../../images/admin/close.svg';
import avblue from '../../../../images/admin/avblue.svg'
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import { getTeamMemberList } from '../../../../redux/admin/team/teamMemberSlice';
import { addTeamMemberById } from '../../../../redux/admin/team/addTeamMemberSlice';
import Toast from '../../Common/Toast';
import { toogleSnackbar } from '../../../../redux/client/common/snackbarSlice';
import { useSelector } from 'react-redux';


const usestyles = makeStyles((theme) => ({
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
  text: {
    fontFamily: 'Poppins !important',
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "24px !important",
    color: "#000000 !important",
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  top: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '5px',
    paddingBottom: "5px"

  },
  parent: {
    display: 'flex',
    justifyContent: 'center',
    // paddingBottom: '10px','
    alignItems: 'center',
    padding: '5px',
    width: '175px'
  },
  done: {
    fontFamily: 'Poppins !important',
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "18px !important",
    color: "#3330E4 !important",
    textTransform: "initial !important",
  },
  icnImg: {
    width: '20px'
  }
}))

 function MemberMenu({ isOpen, teamId, sendDataToParent }) {
  const classes = usestyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch()
  const [listOfItems, setListOfItems] = React.useState([]);
  const [teamMemberData, setTeamMemberData] = React.useState([])
  const { loading } = useSelector(state => state.getTeamMember);

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
  React.useEffect(() => {
    var data = [];
    if (isOpen) {
      const requestTeamMember = {
        onSuccess: (res) => {
          res.data.sort((a, b) => a.first_name - b.first_name).map((items) => {
            data.push({
              id: items.id,
              img: <Avatar {...stringAvatar(`${items.first_name.toUpperCase()} ${items.last_name.toUpperCase()}`)} />,
              name: `${items.first_name} ${items.last_name}`,
              icon: darkadd
            }
            )
            setListOfItems(data)
          })
        },
        onFail: (err) => {

        }
      }

      dispatch(getTeamMemberList(requestTeamMember))
    }




  }, [])

  const [msg, setMsg] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [type, setType] = useState("");

  function handleAdd(id) {
    const request = {
      data: {
        "team_id": teamId,
        "team_member_id": id
      },
      onSuccess: (res) => {
        console.log("add member", res.data);
        dispatch(toogleSnackbar({
          open: true,
          type: "success",
          msg: res.message
        }
        ))

      },
      onFail: (err) => {
        console.log("add member err", err);
        dispatch(toogleSnackbar({
          open: true,
          type: "error",
          msg: err.message
        }
        ))
      }
    }
    dispatch(addTeamMemberById(request))
    // const newList = listOfItems.concat({ id: listOfItems.length + 1, img: avblue, name: "Lorem Ipsum", icon: darkadd });

    // setListOfItems(newList);

    // setName('');
    // console.log("add item", newList)

  }
  return (
    <div>
      {console.log("loading", loading)}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.addMemeber}
      >
        <div className={classes.addProject}>
          <img src={add} />
          <Typography className={classes.buttonText}
          >Add Member</Typography>
        </div>

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>

        </MenuItem>
        <Typography>
          <div className={classes.content}>
            <div className={classes.top}>
              <div>
                <Button className={classes.done} onClick={handleClose}>Done</Button>
              </div>
            </div>

          </div>
          <div style={{ width: '100%' }}>
            {listOfItems.map((member) => (
              <>
                <div className={classes.parent}>

                  <div className={classes.left}>
                    {member.img}
                    {/* <Typography className={classes.text} key={member.id}>{member.name}</Typography> */}
                    <input type='text' value={member.name} key={member.id} className={classes.text} />
                  </div>
                  <div>
                    <img src={member.icon} onClick={() => { handleAdd(member.id);  sendDataToParent(true)}} />
                  </div>
                </div>

              </>
            ))}
          </div>
        </Typography>
      </Menu>
      {/* <Toast open={toastOpen} handleClose={() => setToastOpen(false)} msg={msg} type={type} /> */}
    </div>
  );
}

export default React.memo(MemberMenu)
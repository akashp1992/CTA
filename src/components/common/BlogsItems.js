import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const BlogsItems = ({ data, paramId }) => {
    const [open, setOpen] = useState({})
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    const handleClick = (id) => {
        setOpen((prevState => ({...prevState, [id]: !prevState[id]})))
        // setOpen(!open)
        navigate(`/blogs/${id}`)
        setId(id)
    }

    useEffect(() => {
     //   id === paramId ? setOpen(true) : setOpen(false)
        console.log("clicked", paramId)
    }, [paramId,id])

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {
                data.map((item, index) => (
                    <>
                        <ListItemButton onClick={() => handleClick(item.id)} key={index}>
                            <ListItemText>
                                {item.title}
                            </ListItemText>
                            {
                               open[item.id]
                                    ? <ExpandLess /> : <ExpandMore />
                            }
                        </ListItemButton>
                        <Divider />
                        <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>

                                    <ListItemText primary="Starred" >
                                        new
                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </>
                ))
            }

        </List>
    )
}

export default BlogsItems
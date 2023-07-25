import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useEffect, useState } from 'react'

import ProfileDetails from './ProfileDetails';
import Pricing from '../Pricing/Pricing';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    activeTab: {

        '& .MuiTabs-indicator': { backgroundColor: "#3330E4 !important" },
        '& .MuiTab-root': { color: "#3A3A3A", fontFamily: "Poppins", },
        '& .Mui-selected': { color: "#3A3A3A !important", fontFamily: "Poppins !important", fontWeight: '700 !important' },
    },
    tab: {
        '& .MuiTab-root': { color: "#3A3A3A", fontFamily: "Poppins", },
        //'& .MuiTabs-indicator': { backgroundColor: "red !important" },

        //'& .Mui-selected': { color: "#3A3A3A", fontFamily: "Poppins", fontWeight: '700' },
    }
}))
const TabsRef = () => {
    const classes = useStyles()
    // const params = useParams()
    // const [tabIndex, setTabIndex] = useState(0);
    // const location = useLocation()
    // const navigate = useNavigate()
    // const [activeTab, setActiveTab] = useState(0)
    // const handleTabChange = useCallback((event, newTabIndex) => {

    //     // switch (newTabIndex) {
    //     //     case 0:
    //     //         setTabIndex(0);

    //     //         break;
    //     //     case 1:
    //     //         setTabIndex(1);
    //     //         break;
    //     //     case 2:
    //     //         setTabIndex(2);
    //     //         break;
    //     //     case 3:
    //     //         setTabIndex(3);
    //     //         break;
    //     //     default:
    //     //         setTabIndex(0)
    //     //         break;
    //     // }
    //     if (tabIndex !== newTabIndex) navigate(`/Settings/${newTabIndex}`)

    // }, [tabIndex])

    // // function getInitialTab(){
    // //     switch(true){
    // //         case 
    // //     }
    // //    }

    // useEffect(() => {

    // }, [params.id, tabIndex, classes])

    const tabs = {
        0: {
            title: "Profile Details",
            content: (
                <ProfileDetails />
            )
        },
        1: {
            title: "Plan and Billing",
            content: (
                <Pricing />
            )
        },
        2: {
            title: "Team",
            content: (
                <p>Team</p>
            )
        },
        3: {
            title: "Security",
            content: (
                <p>Security</p>
            )
        },

    }
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("");
    const location = useLocation()
    const params = useParams()
    const toggle = tab => {
        if (activeTab !== tab) {
            navigate(`/dashboard/Settings/${tab}`)
            setActiveTab(`/dashboard/Settings/${tab}`)
        }
    }

    const handleChange = () => {

        setActiveTab(`/dashboard/Settings/${tabs[0]}`)
    }
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (activeTab !== params.id) {
            setIsActive(true)
        }
    }, [activeTab, tabs])

    return (
        <Box>
            {/* {console.log("Params", params.id)} */}
            <Box>
                <Tabs
                    value={location.pathname}
                    className={isActive ? classes.activeTab : classes.tab}
                    onChange={handleChange
                    }
                // value={tabIndex}
                // onChange={handleTabChange}
                // className={tabIndex === params.id ? classes.activeTab : classes.tab}
                // sx={{
                //     '& .MuiTabs-indicator': { backgroundColor: "#3330E4" },
                //     '& .Mui-selected': { color: "#3A3A3A", fontFamily: "Poppins", fontWeight: '700' },
                //     '& .MuiTab-root': { color: "#3A3A3A", fontFamily: "Poppins" }
                // }}

                >
                    {/* <Tab label="Profile Details" value={0} component={NavLink} to="/Settings/0" style={{ textTransform: "none" }} disableRipple />
                    <Tab label="Plan and Billing" value={1} component={NavLink} to="/Settings/1" style={{ textTransform: "none" }} disableRipple />
                    <Tab label="Team" style={{ textTransform: "none" }} value={2} component={NavLink} to="/Settings/2" disableRipple />
                    <Tab label="Security" style={{ textTransform: "none" }} value={3} component={NavLink} to="/Settings/3" disableRipple /> */}

                    {
                        Object.entries(tabs).map((tab) => (
                            <Tab label={tab[1].title} value={`/dashboard/Settings/${tab[0]}`} onClick={() => toggle(tab[0])} component={NavLink} to={`/dashboard/Settings/${tab[0]}`} style={{ textTransform: "none" }} disableRipple />
                        ))
                    }

                </Tabs>
                <Box>
                    {Object.entries(tabs).map((tab) => (
                        params.id === tab[0] && (
                            tab[1].content
                        )

                    ))}

                    {/* {location.pathname === `/Settings/${1}` && (
                        <Pricing />
                    )}
                    {location.pathname === `/Settings/${2}` && (
                        <p>Team</p>
                    )}
                    {location.pathname === `/Settings/${3}` && (
                        <p>Security</p>
                    )} */}
                </Box>
            </Box>
        </Box>
    );
}

export default TabsRef

import React, { useEffect, useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, TextareaAutosize, Checkbox, TextField, Typography, Box, Button } from '@mui/material'
import CheckBox from './CheckBox'
import { useForm } from 'react-hook-form'
import { createGroup } from '../../../redux/group/createGroupSlice'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    mainRoot: {
        width: '100%',
        justifyContent: 'flex-start',
        display: 'flex',

    },
    main: {
        display: 'flex',
        flexDirection: 'column',

    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewPart: {
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
    },
    lable: {
        fontFamily: 'Poppins !important',
        fontSize: '14px !important',
        fontWeight: '400 !important',
    },
    textField: {
        borderRadius: '20px !important'
    },

    title: {
        fontFamily: 'Poppins !important',
        fontSize: '14px !important',
        fontWeight: '700 !important',
    },
}))
const GroupManage = () => {
    const { handleSubmit } = useForm()
    const classes = useStyles()
    const projectList = [
        {
            id: 1,
            name: "Listing",
            checked: false,
            value: "project.listing"
        },
        {
            id: 2,
            name: "Create",
            checked: false,
            value: "project.create"
        },
        {
            id: 3,
            name: "Read",
            checked: false,
            value: "project.read"
        },
        {
            id: 4,
            name: "Update",
            checked: false,
            value: "project.update"
        },
    ]
    const errorList = [
        {
            id: 4,
            name: "Listing",
            checked: false,
            value: "error.listing"
        },
        {
            id: 5,
            name: "Create",
            checked: false,
            value: "error.create"
        },
        {
            id: 6,
            name: "Read",
            checked: false,
            value: "error.read"
        },
        {
            id: 7,
            name: "Update",
            checked: false,
            value: "error.update"
        },
    ]

    const teamData = [
        {
            id: 8,
            name: "Listing",
            checked: false,
            value: "team.listing"
        },
        {
            id: 9,
            name: "Create",
            checked: false,
            value: "team.create"
        },
        {
            id: 10,
            name: "Read",
            checked: false,
            value: "team.read"
        },
        {
            id: 11,
            name: "Update",
            checked: false,
            value: "team.update"
        }

    ]

    const userData = [
        {
            id: 12,
            name: "Listing",
            checked: false,
            value: "user.listing"
        },
        {
            id: 13,
            name: "Create",
            checked: false,
            value: "user.create"
        },
        {
            id: 14,
            name: "Read",
            checked: false,
            value: "user.read"
        },
        {
            id: 15,
            name: "Update",
            checked: false,
            value: "user.update"
        }

    ]

    const [project, setProject] = useState(projectList)
    const [error, setError] = useState(errorList)
    const [team, setTeam] = useState(teamData)
    const [user, setUser] = useState(userData)
    // const [project, setProject] = useState([
    //     { id: 1, label: 'Listing', checked: false },
    //     { id: 2, label: 'Create', checked: false },
    //     { id: 3, label: 'Read', checked: false },
    //     { id: 4, label: 'Update', checked: false },
    //     // Add more checkboxes as needed
    // ]);
    const [selected, setSelected] = useState([])
    var selectedProject = []
    var selectedError = []
    var selectedTeam = []
    var selectedUser = []
    useEffect(() => {
         project?.forEach((el) => {
            if (el.checked) {
                selectedProject.push(el.value)
            }
        })
        error?.forEach((el) => {
            if (el.checked) {
                selectedError.push(el.value)
            }
        })
        team?.forEach((el) => {
            if (el.checked) {
                selectedTeam.push(el.value)
            }
        })
        user.forEach((el) => {
            if (el.checked) {
                selectedUser.push(el.value)
            }
        })
        setSelected([...selectedProject, ...selectedError, ...selectedTeam, ...selectedUser])
    }, [])
    console.log("my value", selected.join(","))
    //For project checkbox
    const handleProjectChange = (event, checkboxId) => {
        const updatedCheckboxes = project.map((checkbox) => {
            if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: event.target.checked };
            }
            return checkbox;
        });
        setProject(updatedCheckboxes);
    };
    const handleProjectParentCheckboxChange = (event) => {
        const updatedCheckboxes = project.map((checkbox) => ({
            ...checkbox,
            checked: event.target.checked,
        }));
        setProject(updatedCheckboxes);
    };

    const parentProjectCheckboxChecked =project.length > 0 && project?.every((checkbox) => checkbox.checked);
    const parentProjectCheckboxIndeterminate =
       project.length > 0 && project.some((checkbox) => checkbox.checked) && !parentProjectCheckboxChecked;


    //for error checkbox
    const handleErrorChange = (event, checkboxId) => {
        const updatedCheckboxes = error.map((checkbox) => {
            if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: event.target.checked };
            }
            return checkbox;
        });
        setError(updatedCheckboxes);
    };
    const handleErrorParentCheckboxChange = (event) => {
        const updatedCheckboxes = error.map((checkbox) => ({
            ...checkbox,
            checked: event.target.checked,
        }));
        setError(updatedCheckboxes);
    };

    const parentErrorCheckboxChecked = error.every((checkbox) => checkbox.checked);
    const parentErrorCheckboxIndeterminate =
        error.some((checkbox) => checkbox.checked) && !parentErrorCheckboxChecked;

    //for team checkbox
    const handleTeamChange = (event, checkboxId) => {
        const updatedCheckboxes = team.map((checkbox) => {
            if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: event.target.checked };
            }
            return checkbox;
        });
        setTeam(updatedCheckboxes);
    };
    const handleTeamParentCheckboxChange = (event) => {
        const updatedCheckboxes = team.map((checkbox) => ({
            ...checkbox,
            checked: event.target.checked,
        }));
        setTeam(updatedCheckboxes);
    };

    const parentTeamCheckboxChecked = team.every((checkbox) => checkbox.checked);
    const parentTeamCheckboxIndeterminate =
        team.some((checkbox) => checkbox.checked) && !parentTeamCheckboxChecked;


    //for user checkbox
    const handleUserChange = (event, checkboxId) => {
        const updatedCheckboxes = user.map((checkbox) => {
            if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: event.target.checked };
            }
            return checkbox;
        });
        setUser(updatedCheckboxes);
    };
    const handleUserParentCheckboxChange = (event) => {
        const updatedCheckboxes = user.map((checkbox) => ({
            ...checkbox,
            checked: event.target.checked,
        }));
        setUser(updatedCheckboxes);
    };

    const parentUserCheckboxChecked = user.every((checkbox) => checkbox.checked);
    const parentUserCheckboxIndeterminate =
        user.some((checkbox) => checkbox.checked) && !parentUserCheckboxChecked;
    const dispatch = useDispatch()
    const onSubmit = (e) => {
       
        const request = {
            data: {
                name: "Director",
                description: "director group",
                is_active: "1",
                slug: "B057D",
                is_restricted: 1,
                system_modules:selected.join(",")
            },
            onSuccess: async (res) => {
                console.log("create group", res.data);
                setProject(res.data)
            },
            onFail: async (error) => {
                console.log("create group error", error);
            }

        }
        dispatch(createGroup(request))
    }

    return (

        <div className={classes.mainRoot}>
            <div className={classes.main}>
                <div className={classes.viewPart}>
                    <Typography className={classes.lable}>Is Active</Typography>
                    <Checkbox />
                </div>
                <div className={classes.viewPart}>
                    <Typography className={classes.lable}>Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField className={classes.textField} />
                </div>
                <div className={classes.viewPart}>
                    <Typography className={classes.lable}>Description</Typography>
                    <TextareaAutosize placeholder='Type here something...' style={{ padding: '10px', minWidth: '500px !important', minHeight: '70px' }} maxRows={3} />
                </div>
                <div style={{ width: '100%' }}>
                    <Typography className={classes.title}>System Module</Typography>
                    <Divider />

                    {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', p: 1, m: 1 }}>
                        {
                            titleData.map((item, index) => (
                                <div style={{ display: 'block', paddingLeft: '1.5em', marginBottom: '.125rem', minHeight: '1.5rem' }}>
                                    <p key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>{item.title}</p>
                                </div>
                            ))
                        }
                    </Box> */}



                    <form onSubmit={(e)=>e.preventDefault()}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', p: 1, m: 1 }}>
                            <div>
                                <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: '700 !important', fontFamily: 'Poppins !important' }}>Project</Typography>
                                <div style={{ marginBottom: '10px' }}>
                                    <CheckBox
                                        name="Select All"
                                        checked={parentProjectCheckboxChecked}
                                        onChange={handleProjectParentCheckboxChange}
                                        ref={(el) => {
                                            if (el) el.indeterminate = parentProjectCheckboxIndeterminate;
                                        }}
                                    />
                                </div>
                                {
                                    project.length > 0 && project.map((obj, index) => (
                                        <div key={index}>
                                            <CheckBox
                                                name={obj.name}
                                                checked={obj.checked}
                                                onChange={(e) => handleProjectChange(e, obj.id)}
                                            />

                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: '700 !important', fontFamily: 'Poppins !important' }}>Errors</Typography>
                                <div style={{ marginBottom: '10px' }}>
                                    <CheckBox
                                        name="Select All"
                                        checked={parentErrorCheckboxChecked}
                                        onChange={handleErrorParentCheckboxChange}
                                        ref={(el) => {
                                            if (el) el.indeterminate = parentErrorCheckboxIndeterminate;
                                        }}
                                    />
                                </div>
                                {
                                    error.map((obj, index) => (
                                        <div key={index}>
                                            <CheckBox
                                                name={obj.name}
                                                checked={obj.checked}
                                                onChange={(e) => handleErrorChange(e, obj.id)}
                                            />

                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: '700 !important', fontFamily: 'Poppins !important' }}>Team</Typography>
                                <div style={{ marginBottom: '10px' }}>
                                    <CheckBox
                                        name="Select All"
                                        checked={parentTeamCheckboxChecked}
                                        onChange={handleTeamParentCheckboxChange}
                                        ref={(el) => {
                                            if (el) el.indeterminate = parentTeamCheckboxIndeterminate;
                                        }}
                                    />
                                </div>
                                {
                                    team.map((obj, index) => (
                                        <div key={index}>
                                            <CheckBox
                                                name={obj.name}
                                                checked={obj.checked}
                                                onChange={(e) => handleTeamChange(e, obj.id)}
                                            />

                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: '700 !important', fontFamily: 'Poppins !important' }}>Users</Typography>
                                <div style={{ marginBottom: '10px' }}>
                                    <CheckBox
                                        name="Select All"
                                        checked={parentUserCheckboxChecked}
                                        onChange={handleUserParentCheckboxChange}
                                        ref={(el) => {
                                            if (el) el.indeterminate = parentUserCheckboxIndeterminate;
                                        }}
                                    />
                                </div>
                                {
                                    user.map((obj, index) => (
                                        <div key={index}>
                                            <CheckBox
                                                name={obj.name}
                                                checked={obj.checked}
                                                onChange={(e) => handleUserChange(e, obj.id)}
                                            />

                                        </div>
                                    ))
                                }
                            </div>
                            {console.log("changes", project)}
                            {console.log("selected", selected)}
                        </Box>
                        <Button type="submit" onClick={onSubmit} variant="contained">Submit</Button>
                    </form>
                    
                </div>
            </div>
        </div >
    )
}

export default GroupManage
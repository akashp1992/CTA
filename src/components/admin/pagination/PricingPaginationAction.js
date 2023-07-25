import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import plan from '../../../json/plan.json';
import { makeStyles } from "@mui/styles";
import stop from "../../../images/admin/stop.svg";
import editOl from "../../../images/admin/editOl.svg";
import deleteOl from "../../../images/admin/deleteOl.svg";
import TableHead from '@mui/material/TableHead';
import { useState } from 'react';
import Toast from '../Common/Toast';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersPlanList } from '../../../redux/admin/users/allUsersPlanListSlice';
import { useSelector } from 'react-redux';
import Spinner from '../../client/Common/Spinner';
const usestyles = makeStyles((theme) => ({
    tableHead: {
        background: '#F7F7F7 !important',
        fontFamily: ' Poppins!important ',
        fontStyle: " normal !important",
        fontWeight: " 600 !important",
        fontSize: "  18px!important",
        lineHeight: "27px !important ",
        color: " #06283D!important ",
    },
    tableRow: {
        borderBottom: '1ix solid #D9D9D9 !important'
    },
    errorTable: {
        fontFamily: 'poppins!important',
        marginTop: '30px!important'
    },
    tableData: {
        // padding: '14px 10px!important',
        fontSize: '13px!important',
        color: '#404446!important',
        // borderBottom: " 1px solid #D9D9D9!important",
        fontFamily: 'poppins!important',
        textAlign: 'left !important',

    },
    tablAV: {
        // padding: '14px 10px!important',
        // borderBottom: " 1px solid #D9D9D9!important",
    },
    tableDataInactive: {
        padding: "14px 10px !important",
        fontSize: "13px !important",
        color: "#E8040B !important",
        textAlign: 'left !important',
        fontWeight: '600 ',
    },
    tableDataActive: {
        padding: "14px 10px !important",
        fontSize: "13px !important",
        color: "#1D7503 !important",
        fontWeight: '600 ',
        textAlign: 'left !important'
    },
    statusFree: {
        padding: "14px 10px !important",
        fontSize: "13px !important",
        color: "#3330E4 !important",
        fontWeight: '600 ',
        textAlign: 'left !important'
    },
    status: {
        padding: "14px 10px !important",
        fontSize: "13px !important",
        color: props => props.status,
        borderBottom: " 1px solid #D9D9D9 !important",
        textAlign: 'center !important'
    },
}))
function PricingPaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

PricingPaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};




export default function CustomPaginationActionsTable(props) {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    // const [status, setStatus] = useState(0)
    const { loading } = useSelector(state => state.getallPlanUserList)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const request = {
            onSuccess: (res) => {
                setList(res.data)
            },
            onFail: (err) => {

            }
        }
        dispatch(getUsersPlanList(request))
    }, [])
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const classes = usestyles(props)



    const filteredData = list.filter((e) => {

        //if no input the return the original
        if (props.input === '') {
            return e;
        }
        //return the item which contains the user input
        else {
            return e.plan_list.find((el) => el.title.toString().toLowerCase().includes(props.input)) || e.id.toString().toLowerCase().includes(props.input) || e.user_list.find((el) => el.first_name.toString().toLowerCase().includes(props.input)) || e.user_list.find((el) => el.last_name.toString().toLowerCase().includes(props.input)) || e.plan_list.length === 0 ? "Free".toString().toLowerCase().includes(props.input) : e.plan_list.find((el) => el.status === 1 ? "Active".toString().toLowerCase().includes(props.input) : "Inactive".toString().toLowerCase().includes(props.input))
        }

    })

    const dispatch = useDispatch()
    let status = 0;


    //For remove the row data
    const handleRemove = (id) => {
        const newList = list.filter((item) => item.id !== id,
            console.log(id)
        );
        setList(newList);
        setOpen(true)
        console.log("id ", list);
    };
    const [editData, setEditData] = useState({
        details: "",
        no: ""
    });
    //select edit from selected id
    const [editId, setEditId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    //get status from planList

    const handleEdit = (e) => {
        e.preventDefault();
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setEditData({
            ...editData,
            [fieldName]: fieldValue
        })

        //setEditData(newData);
        console.log("edit")
    }

    const handleEditClick = (e, item) => {
        e.preventDefault();
        setEditId(item.id);
        const formValues = {
            details: item.details,
            no: item.no,

        };
        setEditData(formValues);
        setIsEdit(true);
    };
    const handleSave = (id) => {
        const newState = list.map(obj => {
            if (obj.id === id) {
                return { ...obj, details: editData.details, no: editData.no };
            }
            return obj;
        });

        setList(newState)
        setIsEdit(false)
    }


    return (
        <TableContainer component={Paper}  >
            {console.log("data", status)}
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow className={classes.tableHead} >
                        <TableCell className={classes.tableHead}>ID</TableCell>
                        <TableCell className={classes.tableHead}>Plan Name</TableCell>
                        <TableCell className={classes.tableHead} >Name Of User</TableCell>
                        <TableCell className={classes.tableHead}>Status</TableCell>
                        <TableCell className={classes.tableHead}>Action</TableCell>
                    </TableRow>
                </TableHead>
                {
                    loading ?
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" colSpan={6} >
                                    <Spinner color="#3330E4" />
                                </TableCell>
                            </TableRow>
                        </TableBody> :
                        <TableBody>
                            {(rowsPerPage > 0
                                ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : list
                            ).map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" className={classes.tableData}>
                                        {row.id}
                                    </TableCell>
                                    <TableCell>
                                        {row?.plan_list?.map((plan) => {
                                            return <p component="th" scope="row" className={classes.tableData} name="details" value={editData.details}
                                                onChange={handleEdit} style={{ outline: 'none' }}>
                                                {plan.title}
                                            </p>

                                        })
                                    /* {
                                    editId === row.id && isEdit ?
                                        (<input type="text" name='details' onChange={handleEdit} value={editData.details} />) :
                                        <p component="th" scope="row" className={classes.tableData} name="details" value={editData.details}
                                            onChange={handleEdit} style={{ outline: 'none' }}>
                                            {row.details}
                                        </p>
                                } */}

                                    </TableCell>
                                    <TableCell>
                                        {row?.user_list?.map((user) => {
                                            return <p component="th" scope="row" className={classes.tableData}>
                                                {user.first_name} {user.last_name}
                                            </p>

                                        })
                                /* {
                                    editId === row.id && isEdit ?
                                        (<input type="text" name='no' onChange={handleEdit} value={editData.no} style={{ outline: 'none' }} />) :
                                        <p component="th" scope="row" className={classes.tableData} name="no" value={editData.no}
                                            onChange={handleEdit} >
                                            {row.no}
                                        </p>
                                } */}
                                    </TableCell>



                                    <TableCell align="right" className={row.plan_list.map((plan) => {
                                        return plan.status === 1 ? classes.tableDataActive : classes.tableDataInactive
                                    })
                                    }>
                                        {
                                            row.plan_list.length > 0 ?

                                                row.plan_list.map((plan) => {
                                                    return plan.status === 1 ? <p component="p" scope="row" className={classes.tableDataActive} >Active </p> : <p component="p" scope="row" className={classes.tableDataInactive}>Inactive </p>
                                                })

                                                :

                                                <p component="th" scope="row" className={classes.statusFree}>Free </p>
                                        }


                                    </TableCell>
                                    <TableCell align="right" className={classes.tableData}>
                                        <img src={stop} className={classes.icons} />
                                        {
                                            editId === row.id && isEdit ?
                                                <SaveIcon className={classes.icons}
                                                    //  onClick={() => handleSave(row.id)}
                                                    style={{ color: '#06283D' }} /> :
                                                <img src={editOl} className={classes.icons}
                                                // onClick={(e) => handleEditClick(e, row)} 

                                                />
                                        }

                                        <img
                                            src={deleteOl}
                                            className={classes.icons}
                                        // onClick={() => handleRemove(row.id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                }

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}

                            count={list.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={PricingPaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            <Toast open={open} msg="Record Deleted..." type="success" handleClose={() => setOpen(false)} />
        </TableContainer>
    );
}



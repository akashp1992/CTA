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
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import av1 from '../../../images/admin/av1.svg'
import av2 from '../../../images/admin/av2.svg'
import av3 from '../../../images/admin/av3.svg'
import av4 from '../../../images/admin/av4.svg'
import TableHead from '@mui/material/TableHead';
import TeamModel from '../Users/modals/TeamModel';
import Toastify from '../Toastify/Toastify';
import { getTeamList } from '../../../redux/admin/team/allTeamListSlice';
import { useDispatch } from 'react-redux';
import { getTeamMemberList } from '../../../redux/admin/team/teamMemberSlice';
import { useSelector } from 'react-redux';
import Spinner from '../../client/Common/Spinner';
import { StarBorder } from '@mui/icons-material';
import { getGroupList } from '../../../redux/group/getGroupSlice';
const usestyles = makeStyles((theme) => ({
    tableHead: {
        background: '#F7F7F7 !important',
        fontFamily: ' Poppins!important ',
        fontStyle: " normal !important",
        fontWeight: " 600 !important",
        fontSize: "  16px!important",
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
        borderBottom: " 1px solid #D9D9D9!important",
        fontFamily: 'poppins!important',
        textAlign: 'left !important'
    },
    tablAV: {
        // padding: '14px 10px!important',
        // borderBottom: " 1px solid #D9D9D9!important",
    }
}))
function GroupPagination(props) {
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

GroupPagination.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};




export default function CustomPaginationActionsTable(props) {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.getTeamList)
    const [teamData, setTeamData] = React.useState([])
    const [teamMemberData, setTeamMemberData] = React.useState([])
    const [listOfItems, setListOfItems] = React.useState([])
    const [isData, setIsData] = React.useState(false);
    const [groupList,setGroupList]=React.useState([])
    // const setDataFromChild = React.useCallback((isClick) => {
    //     setIsData(isClick)
    //     console.log("isData", isClick);
    // }, [isData])

    const [state, updateState] = React.useState(false);
    const setDataFromChild = React.useCallback((isClick) => updateState({ ...isClick }), []);
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
        const request = {
            onSuccess: (res) => {
                setGroupList(res.data)
            },
            onFail: (err) => {

            }
        }

        dispatch(getGroupList(request))

    },[])
    // const merge = teamMemberData.filter(el => el).map((item, i) => Object.assign({}, item, listOfItems.filter(el => el.id !== undefined).find(el => el.id === item.team_member_id)))

    const merge = teamMemberData.filter(el => el && el.length !== 0).map((item, i) => {
        const listItem = listOfItems.find(el => el.id === item.team_member_id);
        return { ...item, ...listItem };

    });

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - groupList.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const removeCommon = (first, second) => {
        const spred = [...first, ...second];
        return spred.filter(el => {
            return !(first.includes(el) && second.includes(el))
        })
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const classes = usestyles()
    const { teamMemberfromTeamId } = useSelector(state => state.teamMembersByTeamId)
    const [id, setId] = React.useState(0)
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModel = (id) => {
        setOpenModal(!openModal)
        setId(id)
    }
    const filteredData = teamData.filter((e) => {

        //if no input the return the original
        if (props.input === '') {
            return e;
        }
        //return the item which contains the user input
        else {
            return e.name.toString().toLowerCase().includes(props.input) || e.id.toString().toLowerCase().includes(props.input) || e.created_at.toString().toLowerCase().includes(props.input)

        }
    })

    const CustomAvatart = ({ id }) => (
        merge.length > 0 ?
            <AvatarGroup className={classes.tablAV}>
                {
                    merge.filter(el => el?.team_id === id && el.length !== 0)?.map((items) => (
                        <Avatar {...stringAvatar(`${items?.first_name?.toUpperCase()} ${items?.last_name?.toUpperCase()}`)} />
                    ))
                }
            </AvatarGroup>
            :
            "Add"
    )

    const data = [
        {
            id: 1,
            name: 'Super Admin',
            isActive: true,
            isRestricted: true,
            createdBy: 'System',
        }
    ]
    return (
        <TableContainer component={Paper}  >
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow className={classes.tableHead} >
                        <TableCell className={classes.tableHead}>Index</TableCell>
                        <TableCell className={classes.tableHead}>Name</TableCell>
                        <TableCell className={classes.tableHead}>Is Active?</TableCell>
                        <TableCell className={classes.tableHead} >Is Restricted?</TableCell>
                        <TableCell className={classes.tableHead}>Created By</TableCell>
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
                                ? groupList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : isData ? groupList : groupList
                            ).sort((a, b) => a.id - b.id).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row" className={classes.tableData} >
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row" className={classes.tableData}>

                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" className={classes.tableData}>
                                        {row?.is_active===1 ? <CheckIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />}
                                    </TableCell>
                                    <TableCell align="right" className={classes.tableData} onClick={() => handleOpenModel(row.id)}>
                                        {row.is_restricted===1 ? "Yes" : "No"}
                                    </TableCell>
                                    <TableCell align="right" className={classes.tableData}>
                                        {row.created_by}
                                    </TableCell>
                                    <TableCell align="right" className={classes.tableData}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <p>Show</p><p>|</p>
                                            <p>Edit</p><p>|</p>
                                            <p>Delete</p>
                                        </div>
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
                            count={groupList.length}
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
                            ActionsComponent={GroupPagination}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            {openModal && <TeamModel id={id} closeModal={setOpenModal} isData={setDataFromChild} />}
            {Toastify('Action successfully executed!', 'success')}
        </TableContainer>
    );
}

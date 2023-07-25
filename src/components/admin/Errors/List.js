import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import data from "../../../json/data.json";
import ErrorsModal from "../Users/modals/ErrorsModal";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import TableHead from "@mui/material/TableHead";
import { useDispatch } from "react-redux";
import { getErrorsList } from "../../../redux/admin/errors/allErrorListSlice";
import { useSelector } from "react-redux";
import Spinner from "../../client/Common/Spinner";
const usestyles = makeStyles((theme) => ({
  tableHead: {
    background: "#F7F7F7 !important",
    fontFamily: " Poppins!important ",
    fontStyle: " normal !important",
    fontWeight: " 600 !important",
    fontSize: "  18px!important",
    lineHeight: "27px !important ",
    color: " #06283D!important ",
  },
  tableRow: {
    borderBottom: "1px solid #D9D9D9 !important !important",
  },
  errorTable: {
    fontFamily: "poppins !important",
    marginTop: "30px !important",
  },
  tableData: {
    padding: "14px 10px !important",
    fontSize: "13px !important",
    color: "#404446 !important",
    borderBottom: " 1px solid #D9D9D9 !important",
    textAlign: 'left!important'
  },
}));
function List(props) {


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
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
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
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
List.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};



export default function CustomPaginationActionsTable(props) {
  const dispatch = useDispatch()
  const [errorData, setErrorData] = useState([])
  const { loading } = useSelector(state => state.errorList)
  useEffect(() => {
    const request = {
      onSuccess: (res) => {
        setErrorData(res.data)
        console.log("errlist", res.data);
      },
      onFail: (err) => {

      }
    }

    dispatch(getErrorsList(request))
  }, [])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - errorData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = usestyles()
  const [openModal, setOpenModal] = React.useState(false);

  const filteredData = errorData.filter((e) => {
    //if no input the return the original
    if (props.input === "") {
      return e;
    }
    //return the item which contains the user input
    else {
      return (
        e.error_detail.toString().toLowerCase().includes(props.input) ||
        e.team_id.toString().toLowerCase().includes(props.input) ||
        e.id.toString().toLowerCase().includes(props.input) ||
        e.created_at.toString().toLowerCase().includes(props.input)
      );
    }
  });
  return (
    <div className={classes.errorTable}>
      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell className={classes.tableHead}>ID</TableCell>
              <TableCell className={classes.tableHead}>Error Details</TableCell>
              <TableCell className={classes.tableHead}>Team Name</TableCell>
              <TableCell className={classes.tableHead}>Publish Date</TableCell>
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
                  ? filteredData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                  : errorData
                ).map((row) => (
                  <TableRow key={row.id} onClick={() => setOpenModal(!openModal)}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableData}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableData}
                    >
                      {row.error_detail.slice(0, 80)}
                    </TableCell>
                    <TableCell align="right" className={classes.tableData}>
                      {row.team_id === 2 ? "akash" : "admin"}
                    </TableCell>

                    <TableCell align="right" className={classes.tableData}>
                      {row.created_at}
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

                count={errorData.length}
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
                ActionsComponent={List}
              />
            </TableRow>
          </TableFooter>
        </Table>

        {openModal && (
          <ErrorsModal
            closeModal={setOpenModal}
            title="File Information Detail"
          />
        )}
      </TableContainer>
    </div>
  );
}



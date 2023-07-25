import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";
import { Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import List from './List';
import searchIcn from '../../../images/admin/searchIcn.svg'
import TablePagination from '@mui/material/TablePagination';

const usestyles = makeStyles((theme) => ({
  searchbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '35px'
  },
  ErrorTitle: {
    color: '06283D !important',
    textAlign: 'left !important',
    fontFamily: 'Poppins !important',
    fontSize: '20px !important',
    fontWeight: "600 !important"
  },
  search: {},
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '342px !important', height: "36px!important",
    borderRadius: '5px !important',
    border: '1px solid #D9D9D9 !important',
  },
  searchText: {
    fontFamily: 'Poppins !important',
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "18px !important",
    color: "#404446 !important",
    outline: '0 !important',
    border: 'none',
    width: '100%'

  },

  parentlabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  '& .MuiInputBase-input': { padding: 0 }
}))

function ErrorsData() {
  const classes = usestyles()
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div className={classes.errorDataMain}>
        <Container>
          <div className={classes.searchbar}>
            <Typography className={classes.ErrorTitle}>Errors</Typography>
            <div className={classes.search}>

              <div className={classes.searchBox}  >
                <img src={searchIcn} style={{ paddingLeft: "15px" }} />
                <input className={classes.searchText} placeholder="Search..." onChange={inputHandler} />
              </div>
            </div>
          </div>
          <div>
            <List input={inputText} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ErrorsData
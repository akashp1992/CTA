import React from 'react'
import { makeStyles } from "@mui/styles";
import teamData from '../../../json/teamData.json'
import TablePaginationActions from '../pagination/TablePaginationActions';
const usestyles = makeStyles((theme) => ({
    tableHead: {
        background: '#F7F7F7 !important',
        fontFamily: ' !important Poppins',
        fontStyle: " !important normal",
        fontWeight: " !important 600",
        fontSize: " !important 18px",
        lineHeight: " !important 27px",
        color: " !important #06283D",
    },
    tableRow: {
        borderBottom: '1ix solid #D9D9D9 !important'
    },
    errorTable: {
        fontFamily: 'poppins',
        marginTop: '30px'
    },
    tableData: {
        padding: '14px 10px',
        fontSize: '13px',
        color: '#404446',
        borderBottom: " 1px solid #D9D9D9",
    },
    tablAV: {
        padding: '14px 10px',
        borderBottom: " 1px solid #D9D9D9",
    }
}))

function ListData(props) {

    const classes = usestyles()
   
    const filteredData = teamData.filter((e) => {

        //if no input the return the original
        if (props.input === '') {
            return e;
        }
        //return the item which contains the user input
        else {
            return e.name.toString().toLowerCase().includes(props.input) || e.details.toString().toLowerCase().includes(props.input) || e.id.toString().toLowerCase().includes(props.input) || e.date.toString().toLowerCase().includes(props.input)

        }
    })


    return (
        <div className={classes.errorTable}>
            <table style={{ width: '100%', borderSpacing: 0 }}>
                <tr className={classes.tableHead}>
                    {/* <th style={{ textAlign: 'left', minWidth: '70px', paddingLeft: '15px' }}>ID</th>
                    <th style={{ textAlign: 'left' }}>Team Name</th>
                    <th style={{ textAlign: 'left' }}>Status Details</th>
                    <th style={{ textAlign: 'left', paddingLeft: '50px' }}>Team Members</th>
                    <th style={{ textAlign: 'left' }}>Creation Date</th> */}
                </tr>




                {/* <tr className={classes.tableRow}>
                            <td className={classes.tableData}>{item.id}</td>
                            <td className={classes.tableData}>{item.details}</td>
                            <td className={classes.tableData}>{item.name}</td>
                            <td className={classes.tablAV}><AvatarGroup >
                                <Avatar alt="Remy Sharp" src={av1}  onClick={() => setOpenModal(!openModal)}/>
                                <Avatar alt="Travis Howard" src={av2} onClick={() => setOpenModal(!openModal)}/>
                                <Avatar alt="Cindy Baker" src={av3} onClick={() => setOpenModal(!openModal)}/>
                                <Avatar alt="Agnes Walker" src={av4} onClick={() => setOpenModal(!openModal)}/>
                                <Avatar alt="Trevor Henderson" src={av4} onClick={() => setOpenModal(!openModal)}/>
                            </AvatarGroup></td>
                            <td className={classes.tableData}>{item.date}</td>
                        </tr> */}
                <TablePaginationActions input={props.input}/>

            </table>
            
        </div>
    )
}

export default ListData
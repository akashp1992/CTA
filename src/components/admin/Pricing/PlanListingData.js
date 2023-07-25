import React from "react";
import { makeStyles } from "@mui/styles";
import PricingPaginationActions from '../../../components/admin/pagination/PricingPaginationAction'
const usestyles = makeStyles((theme) => ({
  tableHead: {
    background: "#F7F7F7 !important",
    height: "60px",
    color: "#06283D",
  },
  tableRow: {
    borderBottom: "1ix solid #D9D9D9 !important",
  },
  errorTable: {
    fontFamily: "poppins",
    marginTop: "30px",
  },
  tableData: {
    padding: "14px 10px",
    fontSize: "13px",
    color: "#404446",
    borderBottom: " 1px solid #D9D9D9",
  },
  tableDataInactive: {
    padding: "14px 10px",
    fontSize: "13px",
    color: "#E8040B",
    borderBottom: " 1px solid #D9D9D9",
  },
  tableDataActive: {
    padding: "14px 10px",
    fontSize: "13px",
    color: "#1D7503",
    borderBottom: " 1px solid #D9D9D9",
  },
  tablAV: {
    padding: "14px 10px",
    borderBottom: " 1px solid #D9D9D9",
  },
  icons: {
    width: "20px",
    marginRight: "6px",
    cursor: "pointer",
  },
}));

function PlanListingData(props) {
  const classes = usestyles();
  return (
    <div className={classes.errorTable}>
      <table style={{ width: "100%", borderSpacing: 0 }}>
     
        <PricingPaginationActions input={props.input}/>
      </table>
    </div>
  );
}

export default PlanListingData;

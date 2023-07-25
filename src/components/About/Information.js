import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import line from "../../images/lineTitle.svg";
import { Grid } from "@mui/material";
const useStyle = makeStyles((theme) => ({
  titleRoot: {
    fontFamily: "poppins",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
    [theme.breakpoints.down("md")]:{
      marginTop:"40px",
      padding:"0px 10px"
    }
  },
  main: {
    fontFamily: "poppins",
    paddingLeft: "150px",
    paddingRight: "150px",
    paddingTop: "50px",
    [theme.breakpoints.down("md")]:{
      padding:"0 10px",
      marginTop:"30px"
    }
  },
  typoTitle: {
    fontSize: "46px !important",
    fontFamily: "Poppins !important",
    fontWeight: "bold !important",
    [theme.breakpoints.down("md")]:{
      fontSize: "35px !important",
      textAlign:"center !important"
    },
    [theme.breakpoints.only("xs")]:{
      fontSize: "26px !important",
      textAlign:"center !important"
    }
  },
  gridTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column !important",
  },
  content: {
    borderLeft: "1px solid #3330E4",
    marginLeft: "4px",
  },
  li: {
    content: "",
    color: "#3330E4",
  },
  typoLi: {
    fontFamily: "Poppins !important",
    fontSize: "16px",
    color: "#06283D",
  },
  contentRight: {
    borderLeft: "1px solid #3330E4",
    marginLeft:"4px"
  },
  infoTitle: {
    borderLeft: "10px solid  #3330E4",
    height: "51px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    paddingLeft: "10px",
    "& :after": {
      height: "100px",
    },
  },
  infoData: {
    marginLeft: "15px",
    marginTop: "20px",
  },
  contentMain: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]:{
      marginBottom:"40px"
    }
  },
}));
function Information() {
  const classes = useStyle();
  return (
    <div style={{marginBottom:"30px"}}>
      <div className={classes.titleRoot}>
        <Typography className={classes.typoTitle}>
          Information Needs to be Reported
        </Typography>
        <img src={line} alt="line" />
      </div>
      <div className={classes.main}>
        <Grid item container>
          <Grid md={6} lg={6} xl={6} className={classes.gridTitle}>
            <div className={classes.contentMain}>
              <div style={{ width: "100%" }}>
                <p className={classes.infoTitle}>
                  Reporting companies must disclose basic <br />
                  information
                </p>
              </div>
              <div className={classes.content}>
                <div className={classes.infoData}>
                  <ul>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>
                        The company's full name
                      </div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>
                        Any trade name or D/B/As
                      </div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>
                        {" "}
                        Business street address
                      </div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>
                        {" "}
                        Jurisdiction of formation
                      </div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>IRS taxpayer ID</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={6} lg={6} xl={6} className={classes.gridTitle}>
            <div className={classes.contentMain}>
              <div style={{ width: "100%" }}>
                <p className={classes.infoTitle}>
                  Reporting companies must report each beneficial owner and
                  company applicant's
                </p>
              </div>
              <div className={classes.contentRight}>
                <div className={classes.infoData}>
                  <ul>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>Name</div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>Birthday</div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>Address</div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>
                        {" "}
                        Jurisdiction of formation
                      </div>
                    </li>
                    <li className={classes.li}>
                      <div className={classes.typoLi}>
                        acceptable identification document{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Information;

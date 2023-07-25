import { ClassNames } from "@emotion/react";
import { Button, SvgIcon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import uploadIcon from "../../images/uploadIcon.svg";

const useStyle = makeStyles((theme) => ({
  mainCRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    margin: "10px",
    padding: "70px",
  },
  typoHeading: {
    fontFamily: "Poppins semibold !important",
    fontWeight: "700",
    color: "#06283D",
  },
  listTypo: {
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    color: "#00323A",
    fontSize: "14px !important",
    marginTop: "10px !important",
  },
  showMoreRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  showMore: {
    background: "#3330E4 !important",
    color: "white !important",
    textTransform: "none !important",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    padding: "7px",
  },
  listTypoShadow: {
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    color: "#00323A",
    fontSize: "14px !important",
    marginTop: "10px !important",
  },
  displayHide: {
    display: "none",
  },
}));
function CorporateAct() {
  const classes = useStyle();
  const [show, setShow] = useState(false);
  const handleShowMore = () => {
    setShow(!show);
  };
  return (
    <div className={classes.mainCRoot}>
      <Typography className={classes.typoHeading}>
        H.R.2513 – Corporate Transparency Act of 2019
      </Typography>
      <Typography className={classes.listTypo}>
        “do not include any entity that is—
      </Typography>
      <Typography className={show ? classes.listTypo : classes.listTypoShadow}>
        “(i) a business concern that is an issuer of a class of securities
        registered under section 12 of the Securities Exchange Act of 1934 (15
        U.S.C. 781) or that is required to file reports under section 15(d) of
        that Act (15 U.S.C. 78o(d));
      </Typography>
      <div className={show ? "" : classes.displayHide}>
        <Typography className={classes.listTypo}>
          “(ii) a business concern constituted, sponsored, or chartered by a
          State or Indian Tribe, a political subdivision of a State or Indian
          Tribe, under an interstate compact between two or more States, by a
          department or agency of the United States, or under the laws of the
          United States;
        </Typography>
        <Typography className={classes.listTypo}>
          “(iii) a depository institution (as defined in section 3 of the
          Federal Deposit Insurance Act (12 U.S.C. 1813));
        </Typography>
        <Typography className={classes.listTypo}>
          “(iv) a credit union (as defined in section 101 of the Federal Credit
          Union Act (12 U.S.C. 1752));
        </Typography>
        <Typography className={classes.listTypo}>
          “(v) a bank holding company (as defined in section 2 of the Bank
          Holding Company Act of 1956 (12 U.S.C. 1841)) or a savings and loan
          holding company (as defined in section 10(a) of the Home Owners’ Loan
          Act (12 U.S.C. 1467a(a));
        </Typography>
        <Typography className={classes.listTypo}>
          “(vi) a broker or dealer (as defined in section 3 of the Securities
          Exchange Act of 1934 (15 U.S.C. 78c)) that is registered under section
          15 of the Securities Exchange Act of 1934 (15 U.S.C. 78o);
        </Typography>
        <Typography className={classes.listTypo}>
          “(vii) an exchange or clearing agency (as defined in section 3 of the
          Securities Exchange Act of 1934 (15 U.S.C. 78c)) that is registered
          under section 6 or 17A of the Securities Exchange Act of 1934 (15
          U.S.C. 78f and 78q–1);
        </Typography>
        <Typography className={classes.listTypo}>
          “(viii) an investment company (as defined in section 3 of the
          Investment Company Act of 1940 (15 U.S.C. 80a–3)) or an investment
          adviser (as defined in section 202(11) of the Investment Advisers Act
          of 1940 (15 U.S.C. 80b–2(11))), if the company or adviser is
          registered with the Securities and Exchange Commission, has filed an
          application for registration which has not been denied, under the
          Investment Company Act of 1940 (15 U.S.C. 80a–1 et seq.) or the
          Investment Adviser Act of 1940 (15 U.S.C. 80b– 1 et seq.), or is an
          investment adviser described under section 203(l) of the Investment
          Advisers Act of 1940 (15 U.S.C. 80b–3(l));
        </Typography>
      </div>
      <div className={classes.showMoreRoot} onClick={handleShowMore}>
        <div className={classes.showMore}>
          <Typography
            style={{
              marginRight: "5px",
              fontSize: "12px",
              fontFamily: "Poppins",
              cursor: "pointer"
            }}
          >
            Show More
          </Typography>
          <img src={uploadIcon} />
        </div>
      </div>
    </div>
  );
}

export default CorporateAct;

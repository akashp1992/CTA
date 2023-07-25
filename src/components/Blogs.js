import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import addIcon from "../images/addIcon.svg";
import minIcon from "../images/minIcon.svg";
import BlogsCard from './common/BlogsCard';
import BlogsItems from './common/BlogsItems';

const useStyles = makeStyles((theme) => ({
    mainRoot: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "50px"
    },
    title: {
        fontFamily: 'Poppins !important',
        color: '#323232  !important',
        fontSize: '22px  !important',
        fontWeight: '700  !important',
        marginTop: '30px !important',
    },
    desc: {
        fontFamily: 'Poppins !important',
        color: '#323232  !important',
        fontSize: '16px  !important',
        fontWeight: '400  !important',
        marginTop: '50px !important',
        marginBottom: '20px !important'
    },
    accordionTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        background: "white",
        paddingLeft: "1rem",
        fontFamily: "Poppins !important",
        fontSize: "15px !important",
        fontWeight: "bold !important",
        borderRadius: "15px !important",
    },
    accordionTitleActive: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        background: "white",
        padding: "1rem",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: "bold",
        marginBottom: "10px",
        borderRadius: "15px",

        borderLeft: "5px solid #3330E4",
    },
    accordionContent: {
        padding: "1rem",
        width: "100%",
    },
    accordionContentActive: {
        padding: "1rem",
        width: "100%",
    },
    borderBottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        background: "white",
        padding: "1rem",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: "bold",
        marginBottom: "10px",
        borderRadius: "15px",
        boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    },
    accRoot: {
        boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px !important",
        marginBottom: "10px",
        borderRadius: "10px !important",
        border: "none !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    accRootActive: {
        boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px !important",
        marginBottom: "10px",
        borderRadius: "10px !important",
        borderLeft: "5px solid #3330E4 !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    span: {
        color: '#3330E4 !important',
        fontWeight: '700 !important',
    }
}))
const Blogs = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const { id } = useParams();
    const blogList = [
        {
            id: 1,
            title: 'new 1',
            subList: [
                {
                    id: 1,
                    title: 'new1 sub'
                }
            ]
        },
        {
            id: 2,
            title: 'new 2',
            subList: [
                {
                    id: 1,
                    title: 'new 2 sub 1'
                },
                {
                    id: 2,
                    title: 'new 2 sub 2'
                }
            ]
        },
        {
            id: 3,
            title: 'new 3',
            subList: [
                {
                    id: 1,
                    title: 'new 3 sub 1'
                },
                {
                    id: 2,
                    title: 'new 3 sub 2'
                }
            ]
        }
    ]
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    
    return (
        <Container>
            {console.log("params", id)}
            <div className={classes.mainRoot}>
                <>
                    <Typography className={classes.title}>CTAF expert insights: Understanding the Corporate Transparency Act</Typography>
                    <Typography className={classes.desc}>The Corporate Transparency Act (CTA) is a significant piece of legislation that was passed by the U.S. Congress in December 2020. The Act is aimed at increasing transparency and combating money laundering and other illicit activities facilitated by anonymous shell companies.<span className={classes.span}> The CTA requires certain companies to disclose their beneficial ownership </span>The Corporate Transparency Act (CTA) is a new law that was planned to be enacted in 2021 as part of the National Defense Authorization Act but it has postponed since then and <span className={classes.span}>final law enactment date is January’2024.</span> The CTA is designed to combat money laundering and other illicit activities by requiring certain companies to disclose their beneficial ownership information to FinCEN. The purpose of the CTA is to create a more transparent business environment and make it harder for criminals to use anonymous shell companies to conceal their activities.</Typography>
                </>
            </div>
            {/* <div style={{ marginBottom: '30px' }}>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    elevation={0}
                    sx={{
                        width: '100%',
                        "&:before": {
                            borderTop: "none !important",
                            backgroundColor: "transparent !important",
                        },
                    }}
                    className={expanded === "panel1" ? classes.accRootActive : classes.accRoot}
                >
                    <AccordionSummary

                        expandIcon={
                            expanded === "panel1" ? (
                                <img src={minIcon} alt="min" width="20px" />
                            ) : (
                                <img src={addIcon} alt="add" width="20px" />
                            )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}> Who is required to comply with the Corporate Transparency Act?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.aaa}>
                            Under the CTA, certain companies are required to submit beneficial ownership information to FinCEN. Specifically, the CTA applies to corporations, limited liability companies (LLCs), and similar entities that are created by filing with a state authority. The CTA exempts entities that are publicly traded, certain financial institutions, and other exempt entities.<br />

                            <span className={classes.span}><br />information to the Financial Crimes Enforcement Network (FinCEN)</span> of the U.S. Department of the Treasury. This article provides expert insights into the CTA and what it means for businesses.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    elevation={0}
                    sx={{
                        width: '100%',
                        "&:before": {
                            borderTop: "none !important",
                            backgroundColor: "transparent !important",
                        },
                    }}
                    className={expanded === "panel6" ? classes.accRootActive : classes.accRoot}
                >
                    <AccordionSummary

                        expandIcon={
                            expanded === "panel6" ? (
                                <img src={minIcon} alt="min" width="20px" />
                            ) : (
                                <img src={addIcon} alt="add" width="20px" />
                            )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}> What information is required to be reported under the Corporate Transparency Act filing and who are beneficial owners?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.aaa}>

                            The CTA requires companies to report the<br />
                            names,<br />
                            dates of birth,<br />
                            addresses, and other identifying information of their beneficial owners to FinCEN.<br />

                            <span className={classes.span}> <br />Beneficial owners are defined as individuals who directly or indirectly own 25% or more of the equity interests in a company, or who exercise substantial control over the company. </span>The CTA also requires companies to provide the name and address of a person who will serve as a point of contact for FinCEN.<br />

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    elevation={0}
                    sx={{
                        width: '100%',
                        "&:before": {
                            borderTop: "none !important",
                            backgroundColor: "transparent !important",
                        },
                    }}
                    className={expanded === "panel2" ? classes.accRootActive : classes.accRoot}
                >
                    <AccordionSummary

                        expandIcon={
                            expanded === "panel2" ? (
                                <img src={minIcon} alt="min" width="20px" />
                            ) : (
                                <img src={addIcon} alt="add" width="20px" />
                            )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}> What are the penalties for non-compliance with the Corporate Transparency Act?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.aaa}>
                            The CTA imposes significant penalties for non-compliance with the reporting requirements. Companies that fail to comply with the reporting requirements can be subject to civil and criminal penalties, including fines of up to $10,000 and imprisonment for up to two years. In addition, officers and directors of non-compliant companies can be subject to personal liability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    elevation={0}
                    sx={{
                        width: '100%',
                        "&:before": {
                            borderTop: "none !important",
                            backgroundColor: "transparent !important",
                        },
                    }}
                    className={expanded === "panel3" ? classes.accRootActive : classes.accRoot}
                >
                    <AccordionSummary

                        expandIcon={
                            expanded === "panel3" ? (
                                <img src={minIcon} alt="min" width="20px" />
                            ) : (
                                <img src={addIcon} alt="add" width="20px" />
                            )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}>
                            What are the benefits of complying with the Corporate Transparency Act?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.aaa}>
                            While the CTA imposes new reporting requirements on certain companies, there are several benefits to complying with the Act. First, compliance with the CTA can help to reduce the risk of exposure to criminal and civil liability. Second, companies that comply with the CTA will be viewed as more transparent and trustworthy by customers, investors, and other stakeholders. Finally, compliance with the CTA can help companies to avoid reputational damage and negative publicity associated with being linked to illicit activities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    elevation={0}
                    sx={{
                        width: '100%',
                        "&:before": {
                            borderTop: "none !important",
                            backgroundColor: "transparent !important",
                        },
                    }}
                    className={expanded === "panel4" ? classes.accRootActive : classes.accRoot}
                >
                    <AccordionSummary

                        expandIcon={
                            expanded === "panel4" ? (
                                <img src={minIcon} alt="min" width="20px" />
                            ) : (
                                <img src={addIcon} alt="add" width="20px" />
                            )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}>
                            What steps can companies take to prepare for the Corporate Transparency Act?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.aaa}>
                            There are several steps that companies can take to prepare for the CTA. First, companies should identify their beneficial owners and ensure that they have the necessary information to report to FinCEN. This may involve conducting due diligence on existing shareholders and implementing processes to identify new beneficial owners as they arise. <br />

                            <br />Second,companies should establish a system for collecting and storing beneficial ownership information that is compliant with the CTA's requirements. Third, companies should ensure that they have designated a point of contact for FinCEN, who will be responsible for handling any inquiries related to the reporting requirements. Finally, companies should review their existing anti-money laundering (AML) policies and procedures to ensure that they are up-to-date and in compliance with the CTA's requirements.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    elevation={0}
                    sx={{
                        width: '100%',
                        "&:before": {
                            borderTop: "none !important",
                            backgroundColor: "transparent !important",
                        },
                    }}
                    className={expanded === "panel5" ? classes.accRootActive : classes.accRoot}
                >
                    <AccordionSummary

                        expandIcon={
                            expanded === "panel5" ? (
                                <img src={minIcon} alt="min" width="20px" />
                            ) : (
                                <img src={addIcon} alt="add" width="20px" />
                            )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}>
                            What are the potential challenges of implementing the Corporate Transparency Act?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.aaa}>
                            While the CTA is aimed at increasing transparency and combating money laundering, there are potential challenges associated with its implementation. One of the main challenges is the collection and reporting of beneficial ownership information, which may be difficult for some companies. In addition, there may be concerns about the security and confidentiality of the information that is reported to FinCEN. Finally, there may be concerns about the potential burden that the reporting requirements may place on small businesses and startups.<br />

                            <br />Conclusion<br />

                            <br />The Corporate Transparency Act is a significant piece of legislation that aims to increase transparency and combat money laundering and other illicit activities facilitated by anonymous shell companies. While the reporting requirements may be challenging for some companies, compliance with the Act can help to reduce the risk of exposure to criminal and civil liability, improve the company's reputation, and enhance transparency and trustworthiness with stakeholders. Companies should take steps to prepare for the CTA's reporting requirements and ensure that they have the necessary processes and systems in place to comply with the Act. Thus CTAF, has came up with the automated CTA filing portal that is been governed by CPAs and Tax attorneys so anyone can file with ease.<br />

                            <br /> Overall, the CTA is a positive step towards creating a more transparent business environment and reducing the risk of criminal activity. Companies that embrace the reporting requirements and work to enhance their transparency and accountability will be well-positioned to succeed in an increasingly complex and interconnected global business environment.

                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div> */}
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flexBasis: '330px', minWidth: '330px', paddingRight: '20px', borderRight: '1px solid #e2e4e6' }}>
                    <BlogsItems data={blogList} paramId={id} />
                </div>
                <div style={{ flexShrink: '1' }}>
                    <BlogsCard />
                    <BlogsCard />
                </div>
            </div>
        </Container >
    )
}

export default Blogs
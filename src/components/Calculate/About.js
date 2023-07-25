import React from 'react'
import Title from './Title'
import makeStyles from '@mui/styles/makeStyles'
import { Grid } from '@mui/material'
import cta from '../images/cta.svg'
import file from '../images/file.svg'
import form from '../images/form.svg'
import calender from '../images/calender.svg'
import next from '../images/next.svg'
import previous from '../images/previous.svg'

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px',
        textAlign: 'center',
        flexDirection: 'column'
    },
    description: {
        padding: '0 83px',
        marginTop: '10px',
        color:'#00323A',
        fontSize:'16px',
        fontFamily:"poppins"
    },
    cards: {
        display: "flex",
        justifyContent: "center",
        marginTop: '80px',
    },
    container: {
        width: "1000px",
        position: "relative"
    },
    card: {
        textAlign: 'center',
        background: "#F7F7F7",
        boxShadow: '1px 1px #F7F7F7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        width: '220px'
    },
    cardTitle: {
        fontSize: '17px',
        color: '#06283D',
        fontWeight: 600,
        margin: "20px 0",
    },
    cardImg: {
        marginTop: '6px'
    },
    cta: {
        marginTop: '6px',
        width: "105px"
    },
    cardContent: {
        padding: "0 16px",
        textAlign: 'left'
    },
    cardButton: {
        width: '200px',
        height: '40px',
        background: '#3330E4',
        border: 'none',
        borderRadius: '5px',
        margin: '30px 0',
        color: "#fff",
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    next: {
        position: "absolute",
        right: "-60px",
        top: "36%",
    },
    previous:{
        position: "absolute",
        left: "-85px",
        top: "35%",
    }
}))

function About() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Title title="About CTA you need to know" />
            <p className={classes.description}>
                The Corporate Transparency Act (CTA) is a law enacted by Congress, requiring certain corporations and limited liability companies (reporting companies) to disclose beneficial owner information to FinCEN and update ownership information within one year of any changes.
            </p>

            <div className={classes.cards}>
                <div className={classes.container}>
                <img src={next} className={classes.next} />
                <img src={previous} className={classes.previous} />
                    <Grid item container >
                        <Grid lg={3} xl={3}>
                            <div className={classes.card}>
                                <img src={file} className={classes.cardImg} />
                                <p className={classes.cardTitle}>Who Needs To File</p>
                                <p className={classes.cardContent}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                <div className={classes.cardButton}>Know More </div>
                            </div>
                        </Grid>
                        <Grid lg={3} xl={3}>
                            <div className={classes.card}>
                                <img src={form} className={classes.cardImg} />
                                <p className={classes.cardTitle}>Required Forms</p>
                                <p className={classes.cardContent}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                <div className={classes.cardButton}>Know More </div>
                            </div>
                        </Grid>
                        <Grid lg={3} xl={3}>
                            <div className={classes.card}>
                                <img src={calender} className={classes.cardImg} />
                                <p className={classes.cardTitle}>Filing Dates</p>
                                <p className={classes.cardContent}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                <div className={classes.cardButton}>Know More </div>
                            </div>
                        </Grid>
                        <Grid lg={3} xl={3}>
                            <div className={classes.card}>
                                <img src={cta} className={classes.cta} />
                                <p className={classes.cardTitle}>One Easy Solution</p>
                                <p className={classes.cardContent}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                <div className={classes.cardButton}>Know More </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default About
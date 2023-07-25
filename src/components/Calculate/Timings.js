import React from 'react'
import Title from './Title'
import makeStyles from '@mui/styles/makeStyles'
import { Grid } from '@mui/material'
import checkmark from '../images/checkmark.svg'
import arrow from '../images/arrow.svg'
import flowerDesk from '../images/flowerDesk.svg'
import desk from '../images/desk.svg'
import user from '../images/user.svg'
import device from '../images/device.svg'



const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "80px",
    },
    description: {
        padding: '0 42px',
        marginTop: '10px',
        color: '#00323A',
        fontSize: '16px',
        fontFamily: "poppins",
        textAlign: 'center'
    },
    parent: {
        padding: '0 110px',
    },
    cards: { marginTop: "30px" },
    card: {
        padding: '30px 20px',
        background: "#F7F7F7",
        width: "300px",
        height: "500px",
        borderRadius: '10px',
        position: 'relative',

    },
    title: {
        color: "#3330E4",
        fontSize: "35px",
        fontWeight: 'bold',
        inlineSize: "266px"
    },
    content: {
        display: 'flex',
        alignItems: "start",
        marginTop: "20px"
    },
    cardData: {
        width: "238px",
        marginLeft: "20px",
    },
    button: {
        position: "absolute",
        left: "27%",
        bottom: '8px'

    },
    btn: {
        width: "150px",
        height: "40px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // border:"1px solid #707070"
    },
    arrow: {
        width: "18px"
    },
    bottom: {
        position: 'relative'
    },
    desk: {
        width: "1100px",
        position: "absolute",
        marginLeft: "100px",
        top:"15px"
    },
    flowerDesk: {
        position: "absolute",
        bottom: "-7rem",
        left: "12px",
        width: "83px",

    },
    device:{
        top: "-7rem",
    position: "absolute",
    right: "32px",
    },

    user:{
        position: "absolute",
        right: 0,
        top: "-7rem",
        width: "200px",
        zTndex: "-1",}

}))

function Timings() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.main}>
                <Title title="Timing of Filing" />
                <div className={classes.parent}>
                    <p className={classes.description}>An entity must file a new report within 30 days after any change in any information that was reported in the most recent filed report. if the entity filed information that was inaccurate at the time of filing, the company would have to file a corrected report within 14 calendar days of the date it knew, or should have known, that the information was inaccurate.</p>
                    <div className={classes.cards}>
                        <Grid item container>
                            <Grid lg={4} xl={4}>
                                <div className={classes.card}>
                                    <div className={classes.title}><p>Domestic Companies</p></div>
                                    <div className={classes.content}>
                                        <img src={checkmark} />
                                        <p className={classes.cardData}>A U.S. entity formed on or after the effective date of the final Regs. must file its initial report within <b>14 days</b>  of formation with the State
                                        </p>
                                    </div>
                                    <div className={classes.content}>
                                        <img src={checkmark} />
                                        <p className={classes.cardData}>A U.S. entity formed before the effective date of the final Regs. must file its initial report within <b>1 year</b> of the final Reg.’s effective date. </p>
                                    </div>
                                    <div className={classes.button}>
                                        <div className={classes.btn}>
                                            <p>File Report</p>
                                            <img src={arrow} className={classes.arrow} />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid lg={4} xl={4}>
                                <div className={classes.card}>
                                    <div className={classes.title}><p>Foreign Companies</p></div>
                                    <div className={classes.content}>
                                        <img src={checkmark} />
                                        <p className={classes.cardData}>A non-U.S. entity which first registers in a U.S. State on or after the effective date of the final Regs. must file its initial report within <b>14 days</b> of State law registration.                              </p>
                                    </div>
                                    <div className={classes.content}>
                                        <img src={checkmark} />
                                        <p className={classes.cardData}>A non-U.S. entity which first registers in a U.S. State before the effective date of the final Regs. must file its initial report within <b>1 year</b>of the final Reg.’s effective date. </p>
                                    </div>
                                    <div className={classes.button}>
                                        <div className={classes.btn}>
                                            <p>File Report</p>
                                            <img src={arrow} className={classes.arrow} />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid lg={4} xl={4}>
                                <div className={classes.card}>
                                    <div className={classes.title}><p>Beneficial Owner</p></div>
                                    <div className={classes.content}>
                                        <img src={checkmark} />
                                        <p className={classes.cardData}>A beneficial owner is any individual who directly or indirectly, through any contract, arrangement, understanding, relationship, or otherwise exercises substantial control over the entity.                                </p>
                                    </div>
                                    <div className={classes.content}>
                                        <img src={checkmark} />
                                        <p className={classes.cardData}>A Beneficial owner is defined as person with substantial control of company or has at least   <b>25% ownership.</b></p>
                                    </div>
                                    <div className={classes.button}>
                                        <div className={classes.btn}>
                                            <p>File Report</p>
                                            <img src={arrow} className={classes.arrow} />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={classes.bottom}>
                    <img src={flowerDesk} className={classes.flowerDesk} />
                    <img src={desk} className={classes.desk} />
                    <img src={device} className={classes.device} />
                    <img src={user} className={classes.user} />

                </div>
            </div>
        </div>
    )
}

export default Timings
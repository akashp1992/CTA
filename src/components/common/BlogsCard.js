import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    card: {
        boxShadow: "0px 8px 30px 0 rgb(0 0 0 / 10%)",
        height: 'auto',
        padding: '20px',
        borderLeft: '2px solid #ff4800',
        background: '#fff',
        margin: '0 auto',
        marginTop: '20px',
        display: 'block',
        fontSize: '15.5px',
        color: '#3A3A3A',
        lineHeight: '3.42',
        width: '95%'
    },
    cardDesc: {
        fontSize: '15.5px !important',
        fontWeight: '300 !important',
        fontStretch: 'normal !important',
        fontStyle: 'normal !important',
        lineHeight: '1.52 !important',
        letterSpacing: '0.16px !important',
        textAlign: 'left !important',
        color: '#999999 !important',
        width: '90% !important',
        fontFamily: 'Poppins !important'
    }
}))
const BlogsCard = () => {
    const classes = useStyle()
    return (
        <div className={classes.card}>
            <Typography>Who is required to comply with the Corporate Transparency Act?</Typography>
            <Typography className={classes.cardDesc}>Under the CTA, certain companies are required to submit beneficial ownership information to FinCEN. Specifically, the CTA applies to corporations, limited liability companies (LLCs), and similar entities that are created by filing with a state authority. The CTA exempts entities that are publicly traded, certain financial institutions, and other exempt entities.<br />

                <br />information to the Financial Crimes Enforcement Network (FinCEN) of the U.S. Department of the Treasury. This article provides expert insights into the CTA and what it means for businesses</Typography>
        </div>
    )
}

export default BlogsCard
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, formControlClasses } from '@mui/material';
import cta1 from '../images/cta1.svg'
import file1 from '../images/file1.svg'
import form1 from '../images/form1.svg'
import calender1 from '../images/calender1.svg'
import { makeStyles } from '@mui/styles';

import { Container } from '@mui/system';

const useStyle = makeStyles((theme) => ({
    card: {
        textAlign: 'center',
        background: "#F7F7F7",
        boxShadow: '1px 1px #F7F7F7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        width: '220px',
        margin:'10px',
        fontFamily:'poppins'
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
}))

export default function AboutCtaItem() {
    const classes = useStyle();

    const list = [
        {
            img: file1,
            title: "Who Needs To File"
        },
        {
            img: form1,
            title: "Required Forms"
        },
        {
            img: calender1,
            title: "Filing Dates"
        },
        {
            img: cta1,
            title: "One Easy Solution"

        },
    ]
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            {
                list.map((list) => (
                    <div className={classes.card}>
                        <img src={list.img} />
                        <p className={classes.cardTitle}>{list.title}</p>
                        <p className={classes.cardContent}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className={classes.cardButton}>Know More </div>
                    </div>
                ))
            }

        </div>
    );
}
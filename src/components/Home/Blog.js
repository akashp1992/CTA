import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import CardItem from './data/cardItem';
import Title from './Title';

const useStyle = makeStyles((theme) => ({
    titleRoot: {
        display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',justifyContent:'center',
        padding:'30px'

    },
    typoTitle: {
        fontSize: '46px !important',
        fontFamily: 'Poppins !important',
        fontWeight: 'bold !important'
    },
    subTitle: {
        fontFamily: 'Poppins regular !important',
        fontWeight: 'regular !important',
        color: '#00323A',
        marginTop: '10px',
        fontSize: '15px !important'
    },
    flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        "& div": {
            flex: '1 0  26%',
            height: '50px,',
            backgroundColor: 'lightgreen',
            border: '2px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2em'
        }

    },
    title: {
        color: "#00323a",
        fontSize: "16px",
        textAlign: "center",
      },

}))
function Blog() {
    const classes = useStyle();
    const items=[
        <CardItem />,
        <CardItem />,
        <CardItem />,
      
    ]
    const responsive=
        {
            0: {
                items: 1,
            },
            1024: {
                items: 3
            }
          }
    
    return (
        <div className={classes.titleRoot}>
            <Title title="Blog"/>
            <p className={classes.title}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
            <Typography className={classes.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
            <AliceCarousel  paddingRight={30} items={items} responsive={responsive}/>
        </div>
    )
}

export default Blog
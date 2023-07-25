import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import line from '../images/lineTitle.svg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import AboutCtaItem from './AboutCtaItem';
import Title from './Title';

const useStyle = makeStyles((theme) => ({
    titleRoot: {
        display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center',
        padding: '30px'

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
        fontSize: '15px !important',
        width: '1100px'
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

    }

}))
function AboutCta() {
    const classes = useStyle();
    const items = [
        <AboutCtaItem />,
    ]
    const responsive =
    {
        0: {
            items: 4,
        },
        1024: {
            items: 3
        }
    }

    return (
        <div className={classes.titleRoot}>
            <Title title="About CTA you need to know" />
            <Typography className={classes.subTitle}>The Corporate Transparency Act (CTA) is a law enacted by Congress, requiring certain corporations and limited liability companies (reporting companies) to disclose beneficial owner information to FinCEN and update ownership information within one year of any changes.  </Typography>
            <AliceCarousel paddingRight={30} items={items} responsive={responsive} />
        </div>
    )
}

export default AboutCta
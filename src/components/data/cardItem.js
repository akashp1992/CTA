import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cardImg from '../../images/cardImg.png'
import { makeStyles } from '@mui/styles';
import backIcon from '../../images/backArrow.svg'
import { Container, fontWeight } from '@mui/system';

const useStyle = makeStyles((theme) => ({
    cardTitle: {
        fontFamily: 'Poppins !important',
        color: '#3330E4 !important',
        fontSize: '16px !important',
        fontWeight: 'bold !important',
    },
    showMoreRoot: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'left',
        width: '100%'
    },
    showMore: {
        background: '#3330E4 !important',
        color: 'white !important',
        textTransform: 'none !important',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25px',
        padding: '7px',

    },
    cardDesc: {
        fontFamily: 'Poppins !important',
        color: '#06283D !important',
        fontSize: '14px !important',
        fontWeight: '400 !important',
    },
    cardMain: {
        width: '100%', marginTop: '20px', maxWidth: '100%', border: 'none',
    },
    cardSubMain:{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', margin: '5px',
      
    }
}))

export default function CardItem({ styles }) {
    const classes = useStyle();
    return (
        <Container maxWidth={false} style={{ overflowX: 'hidden' }}>
            <div className={classes.cardMain}>
                <Card className={classes.cardSubMain}  style={styles} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
                            image={cardImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                Lorem Ipsumis simply dummy
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className={classes.cardDesc}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div className={classes.showMoreRoot} ><div className={classes.showMore}><Typography style={{ marginRight: '5px', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 500 }}>Know More</Typography><img src={backIcon} /></div></div>
                    </CardActions>
                </Card>
            </div>
        </Container>
    );
}
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import underLine from '../../images/lineTitle.svg'

const useStyles = makeStyles((theme)=>({
    main:{
        position:'relative',
        fontFamily:'poppins',
        textAlign:'center'
    },
    text:{
        color:"#06283D",
        fontSize:'40px',
        fontWeight:"bold",
        [theme.breakpoints.down('sm')]:{
            fontSize:'35px'
        },
        [theme.breakpoints.only('lg')]:{
            fontSize:'37px'
        },
    }
}))

function Title({title}) {
    const classes = useStyles()
  return (
    <div>
        <div className={classes.main}>
            <p className={classes.text}>{title}</p>
            <img src={underLine}/>
        </div>
        
    </div>
  )
}

export default Title
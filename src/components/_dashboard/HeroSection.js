import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button } from '@material-ui/core';
import wangIcon from './WandWhite.svg'
import {
  Facebook,
  Instagram,
  Twitter} from '@material-ui/icons';

import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
  container:{
    background:`${theme.palette.primary.light}`,
    padding: theme.spacing(4),
    display:'flex',
    flexDirection:"column",
    textAlign:'left'
  },
  logo:{
    paddingBottom:theme.spacing(6)
  },
  heading:{
    fontWeight:'bold',
    paddingBottom:theme.spacing(3)
  },
  headingBlue:{
    color:theme.palette.primary.main
  },
  heading2:{
    textTransform:"uppercase",
    paddingBottom:theme.spacing(6)
  },
  buttons:{
    paddingBottom:theme.spacing(6)
  },
  Button:{
    fontSize:'1.2rem',
    width:'15rem',
    marginBottom:'1rem'
  },
  icons:{
    paddingBottom:theme.spacing(8)
  },
  iconFill:{
    fill:theme.palette.primary.main,
    marginRight:'1rem'
  },
  borderNull:{
    border:'0px'
  }
}))


const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        {/* <img src='./WandWhite.svg'/> */}
        <img width='100px' src='./WandWhite.png'/>
        {/* <img src={wangIcon}/> */}
      </div>
      <Typography variant='h2' className={classes.heading}>
        Simplify Your Maid Service With This Simple  
        <span className={classes.headingBlue}> Scheduling Software </span>
      </Typography>
      <Typography variant='h4' className={classes.heading2}>
        DISCOVER HOW YOU CAN CLEAN MORE HOMES AND MAKE MORE MONEY THAN EVER BEFORE
      </Typography>
      <div className={classes.buttons}>
        <Button
          className={classes.Button}
          variant="contained"
          color="primary"
        >
          GET STARTED
        </Button>
        <Button
          className={clsx(classes.Button,classes.borderNull)}
          variant="outlined"
        >
          How it works?
        </Button>
      </div>
      <div className={classes.icons}>
        <Facebook className={classes.iconFill}/>
        <Instagram className={classes.iconFill}/>
        <Twitter className={classes.iconFill}/>
      </div>
    </div>
  )
}

export default HeroSection
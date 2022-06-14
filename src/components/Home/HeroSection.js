import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Twitter} from '@material-ui/icons';

import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
  outer:{
    background:theme.palette.primary.light,
  },
  mainContainer:{
    marginBottom:'4vw',
    padding:'4vw 1vw',
    textAlign:'left',
    display:'grid',
    gridTemplateAreas:"hero image",
    gridTemplateColumns:'6fr 5fr',
    justifyContent:'space-between',
    [theme.breakpoints.down('sm')]: {
      display:'grid',
      gridTemplateAreas:"hero",
      gridTemplateColumns:'6fr 0fr',
    }
  },
  container:{
    background:`${theme.palette.primary.light}`,
    padding: '2.5vw',
    display:'flex',
    flexDirection:"column",
    textAlign:'left',
  },
  heading:{
    fontWeight:'bold',
    fontSize:'2.6vw',
    paddingBottom:'2vw',
    color:theme.palette.primary.lightDark,
    [theme.breakpoints.down('sm')]: {
      fontSize:'5vw',
      paddingBottom:'4vw',
    }
  },
  headingBlue:{
    color:theme.palette.primary.main
  },
  heading2:{
    textTransform:"uppercase",
    fontSize:'1.5vw',
    color:theme.palette.primary.lightDark,
    paddingBottom:'3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize:'3vw',
    }
  },
  font:{
    textDecoration:'none'
  },
  buttons:{
    paddingBottom:'2.5vw',
    [theme.breakpoints.down('sm')]: {
      paddingBottom:'3vw',
    }
  },
  Button:{
    width:'15vw',
    marginBottom:'1rem',
    color:'white',
    fontSize:'1.5vw',
    [theme.breakpoints.down('sm')]: {
      width:'25vw',
      color:'white',
      fontSize:'2vw',
    }
  },
  icons:{
    paddingBottom:'3.5vw',
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(5),
    }
  },
  iconFill:{
    fill:theme.palette.primary.main,
    marginRight:'1vw',
    width:"1.8vw",
    height:"1.8vw",
    [theme.breakpoints.down('sm')]: {
      marginRight:'0.7rem',
      width:"1rem",
      height:"1rem",
    }
  },
  borderNull:{
    border:'0px',
    fontWeight:'bold',
    fontSize:'1.5vw',
    color:theme.palette.primary.lightDark,
    [theme.breakpoints.down('sm')]: {
      width:'25vw',
      fontSize:'2vw',
    }
  },
  imgContainer:{
    minWidth:"45vw",
    alignSelf:'right',
    display:'grid',
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  }
}))

const HeroSection = () => {

  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Container className={classes.mainContainer} component="main" maxWidth="xl">
        <div className={classes.container}>
          <Typography variant='h4' className={classes.heading}>
            Simplify Your Maid Service With This Simple  
            <span className={classes.headingBlue}> Scheduling Software </span>
          </Typography>
          <Typography variant='h6' className={classes.heading2}>
            DISCOVER HOW YOU CAN CLEAN MORE HOMES AND<br/> MAKE MORE MONEY THAN EVER BEFORE
          </Typography>
          <div className={classes.buttons}>
            <NavLink to="/register" variant="body2" className={classes.font}>
              <Button
                className={classes.Button}
                variant="contained"
                color="primary"
              >
                GET STARTED
              </Button>
            </NavLink>
            <NavLink to="/pricing" variant="body2" className={classes.font}>
              <Button
                className={clsx(classes.Button,classes.borderNull)}
                variant="outlined"
              >
                How it works?
              </Button>
            </NavLink>
          </div>
          <div className={classes.icons}>
            <Facebook className={classes.iconFill}/>
            <Instagram className={classes.iconFill}/>
            <Twitter className={classes.iconFill}/>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img width='100%' alt='' src='Mask-Group-1.png'/>
        </div>
      </Container>

    </div>
  )
}

export default HeroSection
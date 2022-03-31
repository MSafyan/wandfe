import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
// import wangIcon from 'WandWhite.svg'
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
    marginBottom:theme.spacing(12),
    textAlign:'left',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('sm')]: {
    marginBottom:theme.spacing(2),
    }
  },
  container:{
    background:`${theme.palette.primary.light}`,
    padding: theme.spacing(4),
    display:'flex',
    flexDirection:"column",
    textAlign:'left',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    }
  },

  logo:{
    paddingBottom:theme.spacing(6)
  },
  heading:{
    fontWeight:'bold',
    paddingBottom:theme.spacing(3),

  },
  headingBlue:{
    color:theme.palette.primary.main
  },
  heading2:{
    textTransform:"uppercase",
    paddingBottom:theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(3),
    }
  },
  font:{
    textDecoration:'none'
  },
  buttons:{
    paddingBottom:theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(2),
    }
  },
  Button:{
    width:'15rem',
    marginBottom:'1rem',
    color:'white',
    [theme.breakpoints.down('sm')]: {
      width:theme.spacing(20),
      padding:theme.spacing(0.5)
    }
  },
  icons:{
    paddingBottom:theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(5),
    }
  },
  iconFill:{
    fill:theme.palette.primary.main,
    marginRight:'1rem'
  },
  borderNull:{
    border:'0px',
    color:'black'
  },
  imgContainer:{
    width:'50%',
    minWidth:"500px",
    alignSelf:'right',
    display:'grid',
    alignItems:"center",
    [theme.breakpoints.down('xs')]: {
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
          <Typography variant='h1' className={classes.heading}>
            Simplify Your Maid Service With This Simple  
            <span className={classes.headingBlue}> Scheduling Software </span>
          </Typography>
          <Typography variant='h5' className={classes.heading2}>
            DISCOVER HOW YOU CAN CLEAN MORE HOMES AND MAKE MORE MONEY THAN EVER BEFORE
          </Typography>
          <div className={classes.buttons}>
            <NavLink to="/login" variant="body2" className={classes.font}>
              <Button
                className={classes.Button}
                variant="contained"
                color="primary"
              >
                GET STARTED
              </Button>
            </NavLink>
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
        <div className={classes.imgContainer}>
          <img width='100%' alt='' src='Mask-Group-1.png'/>
        </div>
      </Container>

    </div>
  )
}

export default HeroSection
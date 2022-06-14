import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  outer:{
    padding:theme.spacing(6),
    paddingTop:'3vw',
    paddingBottom:'3vw',
    [theme.breakpoints.down('sm')]: {
      padding:'2vw',
      paddingTop:'1vw',
    }
  },
  mainContainer:{
    background:theme.palette.primary.light,
    paddingTop:'6vw',
    paddingBottom:'6vw',
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop:'2vw',
      paddingBottom:'8vw',
    }
  },
  line:{
    borderTop:'2px red solid',
    borderTopColor:theme.palette.primary.main,
    width:'5vw',
    margin:'5vw auto',
    [theme.breakpoints.down('sm')]: {
    }
  },
  heading:{
    color:theme.palette.primary.lightDark,
    fontSize:'4.5vw',
    fontWeight:"bold",
    paddingBottom:'5vw'
  },
  bold:{
    fontWeight:"bold",
    color:theme.palette.primary.dark,
    paddingBottom:theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(3),
      fontSize:"1rem"
    }
  },
  headingBlue:{
    color:theme.palette.primary.main,
  },
  darkBlue:{
    color:theme.palette.primary.dark,
    fontSize:'1.2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.3rem'
    }
  }
}))


const HeroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.outer}>
      <Container className={classes.mainContainer} component="main" maxWidth="xl">
        <div className={classes.line}></div>
          <Typography variant='h1' className={classes.heading}>
            Running your maid service smoothly<br/> doesn't have to cost a 
            <span className={classes.headingBlue}>
              {" fortune"}
            </span>
          </Typography>
        <Typography variant='h5' className={classes.darkBlue}>
          DISCOVER HOW YOU CAN CLEAN MORE HOMES AND 
          <div>
            MAKE MORE MONEY THAN EVER BEFORE
          </div>
        </Typography>
      </Container>
    </div>

  )
}

export default HeroSection
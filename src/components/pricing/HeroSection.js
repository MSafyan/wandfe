import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  outer:{
    padding:theme.spacing(6),
    paddingTop:theme.spacing(12),
    paddingBottom:theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(4),
      paddingTop:theme.spacing(2),
    }
  },
  mainContainer:{
  background:theme.palette.primary.light,
  paddingTop:theme.spacing(12),
  paddingBottom:theme.spacing(12),
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop:theme.spacing(6),
      paddingBottom:theme.spacing(6),
    }
  },
  line:{
    borderTop:'2px red solid',
    borderTopColor:theme.palette.primary.main,
    padding:theme.spacing(4),
    width:'5rem',
    margin:'auto',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(1),
    }
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
          <Typography variant='h1' className={classes.bold}>
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
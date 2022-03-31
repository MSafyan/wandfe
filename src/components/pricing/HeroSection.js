import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  outer:{
    background:theme.palette.primary.light,
  },
  mainContainer:{
  background:theme.palette.primary.light,
    textAlign:'center',
    padding:theme.spacing(6),
    paddingTop:theme.spacing(12),
    paddingBottom:theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(4),
    }
  },
  line:{
    borderTop:'2px red solid',
    borderTopColor:theme.palette.primary.main,
    padding:theme.spacing(4),
    width:'5rem',
    margin:'auto',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2),
    }
  },
  bold:{
    fontWeight:"bold",
    paddingBottom:theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(4),
    }
  },
  headingBlue:{
    color:theme.palette.primary.main,
  },

}))


const HeroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.outer}>
      <Container className={classes.mainContainer} component="main" maxWidth="xl">
        <div className={classes.line}></div>
          <Typography variant='h1' className={classes.bold}>
            Running your maid service smoothly doesn't have to cost a 
            <span className={classes.headingBlue}>
              {" fortune"}
            </span>
          </Typography>
        <Typography variant='h5'>
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
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer:{
  background:theme.palette.primary.light,
    textAlign:'center',
    padding:theme.spacing(6),
    paddingTop:theme.spacing(12),
    paddingBottom:theme.spacing(12),
  },
  line:{
    borderTop:'2px red solid',
    borderTopColor:theme.palette.primary.main,
    padding:theme.spacing(4),
    width:'5rem',
    margin:'auto'
  },
  bold:{
    fontWeight:"bold",
    paddingBottom:theme.spacing(8)
  },
  headingBlue:{
    color:theme.palette.primary.main,
  },

}))


const HeroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="lg">
      <div className={classes.line}></div>
        <Typography variant='h2' className={classes.bold}>
          Running your maid service smoothly doesn't have to cost a 
          <span className={classes.headingBlue}>
            {" fortune"}
          </span>
        </Typography>
      <Typography variant='h6'>
        DISCOVER HOW YOU CAN CLEAN MORE HOMES AND 
        <div>
          MAKE MORE MONEY THAN EVER BEFORE
        </div>
      </Typography>
    </Container>

  )
}

export default HeroSection
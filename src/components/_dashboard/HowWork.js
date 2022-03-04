import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container} from '@material-ui/core';

import CardOutlined from './CardOutlined'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      paddingTop:theme.spacing(12),
      paddingBottom:theme.spacing(12),
      textAlign:'left'
    },
    bold:{
      fontWeight:"bold",
      paddingBottom:theme.spacing(4)
    },
    heading2:{
      paddingBottom:theme.spacing(6)
    },
    headingBlue:{
      color:theme.palette.primary.main,
      display:'block'
    },
    cardRoot:{
      minWidth: 275,
    }
  }));

const Payment = () => {
  const classes = useStyles();

  const cards=[
    {
      heading:"Easily find new Cleaning Job",
      body:'Easily view all of your local cleaners ready for for a one time job, or recurring visits.'
    },
    {
      heading:"notify & dispatch cleaning crews in real time",
      body:'Securely book & pay right inside of the app'
    },
  ]

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="lg">
      <Typography variant='h4' className={classes.bold}>
        HOW WE WORK
      </Typography>
      <Typography variant='h2' className={clsx(classes.bold,classes.heading2)}>
      Find Work Easily By 
      <span className={classes.headingBlue}>
        {" Wand"}
      </span>
      </Typography>
      <Grid container spacing={2}>
      {
        cards.map((val,i)=>{
          return <Grid item md={5}><CardOutlined key={i} val={val}/></Grid>
        })
      }

      </Grid>
    </Container>
  )
}

export default Payment
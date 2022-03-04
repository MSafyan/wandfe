import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container} from '@material-ui/core';

import Card from './Card'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      paddingTop:theme.spacing(12),
      paddingBottom:theme.spacing(12),
      textAlign:'left'
    },
    bold:{
      fontWeight:"bold"
    },
    heading2:{
      paddingBottom:theme.spacing(6)
    },
    headingBlue:{
      color:theme.palette.primary.main
    },
    cardRoot:{
      minWidth: 275,
    }
  }));

const Payment = () => {
  const classes = useStyles();

  const cards=[
    {
      heading:"Convert Estimates to Jobs",
      body:'Wipe down flat surfaces and hung surfaces, make bed if unmade.'
    },
    {
      heading:"Offer recurring service agreements",
      body:'Surface wipe down, mirrors, toilet and shower cleaning. Booked as full or half.'
    },
  ]

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="lg">
      <Typography variant='h4' className={classes.bold}>
        CLEANING
      </Typography>
      <Typography variant='h2' className={clsx(classes.bold,classes.heading2)}>
        Home Cleaning Estimates, Invoices, & Payments
      </Typography>
      <Grid container spacing={2}>
      {
        cards.map((val,i)=>{
          return <Grid item md={5}><Card key={i} val={val}/></Grid>
        })
      }

      </Grid>
    </Container>
  )
}

export default Payment
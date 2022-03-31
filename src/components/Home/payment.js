import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container} from '@material-ui/core';
import {
  Work,
  // CurrencyPound,
  LocalAtm,
  Sync,

} from '@material-ui/icons';

import Card from './Card'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      paddingTop:theme.spacing(12),
      paddingBottom:theme.spacing(12),
      textAlign:'left',
      [theme.breakpoints.down('xs')]: {
        padding:theme.spacing(4),
      }
    },
    bold:{
      fontWeight:"bold"
    },
    heading2:{
      paddingBottom:theme.spacing(6),
      paddingTop:theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        paddingBottom:theme.spacing(4),
        paddingTop:theme.spacing(2),
      }
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
      body:'Wipe down flat surfaces and hung surfaces, make bed if unmade.',
      icon:<Work/>
    },
    {
      heading:"Offer recurring service agreements",
      body:'Surface wipe down, mirrors, toilet and shower cleaning. Booked as full or half.',
      icon:<Work/>
    },
    {
      heading:"Take credit cards, debit",
      body:'Clean sink, counters and empty and load dishwasher if present.',
      icon:<LocalAtm/>
    },
    {
      heading:"Sync with QuickBooks Online/Desktop",
      body:'Wipe down flat surfaces and hung surfaces, make bed if unmade.',
      icon:<Sync/>
    },
  ]

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="xl">
      <Typography variant='h5' className={classes.bold}>
        CLEANING
      </Typography>
      <Typography variant='h1' className={clsx(classes.bold,classes.heading2)}>
        Home Cleaning Estimates, Invoices, & Payments
      </Typography>
      <Grid container spacing={2}>
      {
        cards.map((val,i)=>{
          return <Grid item md={4}><Card key={i} val={val}/></Grid>
        })
      }

      </Grid>
    </Container>
  )
}

export default Payment
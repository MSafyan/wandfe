import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container } from '@material-ui/core';
import MobileStoreButton from 'react-mobile-store-button';
import clsx from 'clsx'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      paddingBottom:theme.spacing(12),
      textAlign:'left',
      [theme.breakpoints.down('sm')]: {
        padding:theme.spacing(2),
      }
    },
    content:{
      paddingBottom:theme.spacing(8),
      color:theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]: {
        paddingBottom:theme.spacing(3),
      }
    },
    hide:{
      [theme.breakpoints.down('sm')]: {
        display:'none'
      }
    },
    imgContainer:{
      display:'flex',
      alignItems:'center',
      // position:'absolute',
      right:'1px',
      top:'-10rem'
    },
    bold:{
      fontWeight:'bold',
      paddingTop:theme.spacing(6),
      color:theme.palette.primary.dark
    },
    headingBlue:{
      color:theme.palette.primary.main,
      display:'block'
    },
    mobileView:{
      display:'none',
      [theme.breakpoints.down('sm')]: {
        display:'inline-block',
      }
    },
  }));
  

const GetInApp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="xl">
      <Grid container>
        <Grid item xs={6}>
          <Typography variant='h5' className={classes.bold}>
            GET IN TOUCH
          </Typography >
          <Typography variant='h1' className={clsx(classes.content,classes.bold)}>
            Let us earn your
            <span className={classes.headingBlue}> trust</span>
          </Typography>
          <Typography variant='h6' className={clsx(classes.content,classes.hide)}>
            It’s never been this easy, until now. Finally a user-friendly way to find, and hire reputable cleaners in your area, all within our app. <br/> Connect with an experienced cleaner within minutes!
          </Typography>
          <Typography variant='h2' className={clsx(classes.content,classes.mobileView)}>
            It's never Been
          </Typography>
          <div style={{padding:'8px'}}>
            <img src='store2.png' style={{paddingRight:'1rem'}}/>
            <img src='store1.png'/>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.imgContainer}>
          <img style={{width:'40vw'}} alt='' src='mobile.png'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GetInApp
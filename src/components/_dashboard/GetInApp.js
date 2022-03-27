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
      paddingBottom:theme.spacing(6),
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
      alignItems:'center'
    },
    bold:{
      fontWeight:'bold',
      paddingTop:theme.spacing(3)
    },
    headingBlue:{
      color:theme.palette.primary.main,
      display:'block'
    },
  }));
  

const GetInApp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="lg">
      <Grid container>
        <Grid item md={6}>
          <Typography variant='h6'>
            GET IN TOUCH
          </Typography >
          <Typography variant='h2' className={clsx(classes.content,classes.bold)}>
            Let us earn your
            <span className={classes.headingBlue}> trust</span>
          </Typography>
          <Typography variant='body1' className={clsx(classes.content,classes.hide)}>
            It’s never been this easy, until now. Finally a user-friendly way to find, and hire reputable cleaners in your area, all within our app. Connect with an experienced cleaner within minutes!
          </Typography>
          <Typography variant='h2' className={classes.content}>
            It's never Been
          </Typography>
          <div style={{padding:'8px'}}>
            <MobileStoreButton
              store="ios"
              width={'20vw'}
              linkProps={{ title: 'iOS Store Button' }}
            />

            <MobileStoreButton
              store="android"
              width={'20vw'}
              linkProps={{ title: 'Play Store Button' }}
            />
          </div>
        </Grid>
        <Grid item md={6} className={classes.imgContainer}>
          <img style={{width:'45vw'}} alt='' src='pablo-cleaning-up.png'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GetInApp
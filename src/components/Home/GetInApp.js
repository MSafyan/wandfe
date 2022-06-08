import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container } from '@material-ui/core';
import clsx from 'clsx'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      padding:'3.5vw',
      paddingBottom:'4vw',
      textAlign:'left',
      [theme.breakpoints.down('sm')]: {
        padding:theme.spacing(2),
      }
    },
    heading:{
      fontWeight:'bold',
      fontSize:'2vw',
      paddingBottom:'2vw',
      color:theme.palette.primary.lightDark,
      [theme.breakpoints.down('sm')]: {
        paddingTop:theme.spacing(0),
        fontSize:"0.4rem"
      }
    },
    headingBlue:{
      color:theme.palette.primary.main,
      display:'block'
    },
    heading2:{
      paddingBottom:'4vw',
      color:theme.palette.primary.lightDark,
      fontWeight:'bold',
      fontSize:'3.9vw',
      [theme.breakpoints.down('sm')]: {
        paddingBottom:theme.spacing(3),
        fontSize:"1rem"
      }
    },
    content:{
      paddingBottom:'2.5vw',
      color:theme.palette.primary.lightDark,
      fontWeight:'bold',
      fontSize:"1.3vw",
      [theme.breakpoints.down('sm')]: {
        paddingBottom:theme.spacing(3),
        fontSize:"1rem"
      }
    },
    contentTop:{
      paddingBottom:'0.8vw',
    },
    hide:{
      [theme.breakpoints.down('sm')]: {
        display:'none'
      }
    },
    storeContainer:{
      display:'flex'
    },
    storeWrapper:{
      width:"15vw"
    },
    store:{
      [theme.breakpoints.down('sm')]: {
        width:"3vw"
      }
    },
    imgContainer:{
      display:'flex',
      alignItems:'center',
      right:'1px',
      top:'-10rem'
    },
    mobileView:{
      display:'none',
      [theme.breakpoints.down('sm')]: {
        display:'inline-block',
        fontSize:'1.5rem'
      }
    },
  }));
  

const GetInApp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="xl">
      <Grid container>
        <Grid item xs={6}>
          <Typography variant='h5' className={classes.heading}>
            GET IN TOUCH
          </Typography >
          <Typography variant='h1' className={clsx(classes.heading2)}>
            Let us earn your
            <span className={classes.headingBlue}> trust</span>
          </Typography>
          <Typography variant='h6' className={clsx(classes.content,classes.hide,classes.contentTop)}>
            It’s never been this easy, until now. Finally a user-friendly way to find, and hire reputable cleaners in your area, all within our app.
          </Typography>
          <Typography variant='h6' className={clsx(classes.content,classes.hide)}>
            Connect with an experienced cleaner within minutes!
          </Typography>
          <Typography variant='h2' className={clsx(classes.content,classes.mobileView)}>
            It's never Been
          </Typography>
          <div className={classes.storeContainer}>
            <div className={classes.storeWrapper} style={{marginRight:'1vw'}}>
              <img alt='' src='store2.png' width='100%'/>
            </div>
            <div className={classes.storeWrapper}>
              <img alt='' src='store1.png' width='100%'/>
            </div>
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
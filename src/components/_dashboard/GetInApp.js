import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container } from '@material-ui/core';
import MobileStoreButton from 'react-mobile-store-button';
import clsx from 'clsx'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      paddingBottom:theme.spacing(12),
      textAlign:'left'
    },
    content:{
      paddingBottom:theme.spacing(6),
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
        <Grid item sm={12} md={6}>
          <Typography variant='h6'>
            GET IN TOUCH
          </Typography >
          <Typography variant='h4' className={clsx(classes.content,classes.bold)}>
            Let us earn your
            <span className={classes.headingBlue}> trust</span>
          </Typography>
          <Typography variant='h2' className={classes.content}>
            It's never Been
          </Typography>
          <div style={{padding:'8px'}}>
            <MobileStoreButton
              store="ios"
              width={'200px'}
              linkProps={{ title: 'iOS Store Button' }}
            />

            <MobileStoreButton
              store="android"
              width={'200px'}
              linkProps={{ title: 'iOS Store Button' }}
            />
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <img alt='' src='pablo-cleaning-up.png'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GetInApp
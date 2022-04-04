import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid, Container } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    mainGrid:{
      textAlign:'left',
      paddingTop:theme.spacing(10),
      paddingBottom:theme.spacing(10),
      paddingBottom:theme.spacing(12),
      [theme.breakpoints.down('sm')]: {
        padding:theme.spacing(2),
      }
    },
    fontBold:{
      // fontSize:"1.1rem",
      paddingBottom:theme.spacing(0.5)
    },
    subHeading:{
      paddingBottom:theme.spacing(2),
      fontWeight:'bold'
    },
    copyright:{
      textAlign:'center'
    }
  }));
  

const Footer = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <Grid container spacing={2} className={classes.mainGrid}>

        {/* Logo */}
        <Grid item md={6}  lg={3}>
          <img src='allblack.png' alt='' width='70%'/>
        </Grid>

        {/* Cleaner */}
        <Grid item xs={12} md={6}  lg={3}>
          <Typography variant='h6' className={classes.subHeading}>
            Become a Cleaner
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            Services
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            Products
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            FQA
          </Typography>
        </Grid>

        {/* Terms of Services */}
        <Grid item md={6}  lg={3}>
        <Typography variant='h6' className={classes.subHeading}>
            Terms of Services
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            privary Policy
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            Press
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            Blog Feed
          </Typography>
        </Grid>
        
        {/* Contact Us */}
        <Grid item md={6}  lg={3}>
        <Typography variant='h6' className={classes.subHeading}>
            Become a Cleaner
          </Typography>
          <Typography variant='h6' className={classes.subHeading}>
            4818 Washington Blvd St. Louis, MO 63108 Phone: 1-844-GET-WAND 
            <div className={classes.subHeading}>
              E-Mail: support@wandusa.com 
            </div>
            <div className={classes.subHeading}>
              Web Site: Wandusa.com
            </div>
          </Typography>
        </Grid>
        <Grid item sm={12} className={classes.copyright}>
          <Typography variant='h6'>
            Copyright- All Rights Reserved by WAND USA Inc.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
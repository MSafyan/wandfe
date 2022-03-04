import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Grid, Container } from '@material-ui/core';

import {
  Twitter} from '@material-ui/icons';

  const useStyles = makeStyles((theme) => ({
    mainGrid:{
      textAlign:'left',
      paddingBottom:theme.spacing(12)
    },
    fontBold:{
      fontSize:"1.1rem",
      paddingBottom:theme.spacing(0.5)
    },
    subHeading:{
      paddingBottom:theme.spacing(2)
    },
    copyright:{
      textAlign:'center'
    }
  }));
  

const Footer = () => {
  const classes = useStyles();

  return (
    <Container style={{padding:'3rem'}} component="main" maxWidth="lg">
      <Grid container spacing={2} className={classes.mainGrid}>

        {/* Logo */}
        <Grid item sm={12} md={6}  lg={3}>
          Logo
        </Grid>

        {/* Cleaner */}
        <Grid item sm={12} md={6}  lg={3}>
          <Typography variant='h6' className={classes.subHeading}>
            Become a Cleaner
          </Typography>
          <Typography variant='body2' className={classes.fontBold}>
            Services
          </Typography>
          <Typography variant='body2' className={classes.fontBold}>
            Products
          </Typography>
          <Typography variant='body2' className={classes.fontBold}>
            FQA
          </Typography>
        </Grid>

        {/* Terms of Services */}
        <Grid item sm={12} md={6}  lg={3}>
        <Typography variant='h6' className={classes.subHeading}>
            Terms of Services
          </Typography>
          <Typography variant='body2' className={classes.fontBold}>
            privary Policy
          </Typography>
          <Typography variant='body2' className={classes.fontBold}>
            Press
          </Typography>
          <Typography variant='body2' className={classes.fontBold}>
            Blog Feed
          </Typography>
        </Grid>
        
        {/* Contact Us */}
        <Grid item sm={12} md={6}  lg={3}>
        <Typography variant='h6' className={classes.subHeading}>
            Become a Cleaner
          </Typography>
          <Typography variant='body2' className={classes.subHeading}>
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
          Copyright- All Rights Reserved by WAND USA Inc.
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid, Container } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    mainGrid:{
      textAlign:'left',
      padding:'3.5vw',
      paddingBottom:'5vw',
      [theme.breakpoints.down('sm')]: {
        padding:'5vw 3vw',
      }
    },
    fontBold:{
      fontSize:'1.3vw',
      color:theme.palette.primary.lightDark,
      paddingBottom:theme.spacing(0.5),
      [theme.breakpoints.down('sm')]:{
        fontSize:"0.3rem",
        paddingBottom:theme.spacing(0.1),
      }
    },
    subHeading:{
      fontSize:'1.3vw',
      fontWeight:'bold',
      color:theme.palette.primary.lightDark,
      paddingBottom:theme.spacing(2),
      [theme.breakpoints.down('sm')]:{
        fontSize:"0.3rem",
        paddingBottom:theme.spacing(0.2),
      }
    },
    copyright:{
      textAlign:'center',
      [theme.breakpoints.down('sm')]:{
        paddingBottom:theme.spacing(0.2),
        display:"flex",
        alignItems:"center"
        
      }
    },
    copyrightText:{
      fontSize:'1.3vw',
      color:theme.palette.primary.lightDark,
      [theme.breakpoints.down('sm')]:{
        fontSize:"0.3rem",
        margin:"auto"
      }
    },
  }));
  

const Footer = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <Grid container spacing={2} className={classes.mainGrid}>
        {/* Logo */}
        <Grid item xs={3}>
          <img src='allblack.png' alt='' width='70%'/>
        </Grid>

        {/* Cleaner */}
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
        <Typography variant='h6' className={classes.subHeading}>
            Become a Cleaner
          </Typography>
          <Typography variant='h6' className={classes.fontBold}>
            4818 Washington Blvd St. Louis, MO 63108 Phone: 1-844-GET-WAND 
            <div className={classes.fontBold}>
              E-Mail: support@wandusa.com 
            </div>
            <div className={classes.fontBold}>
              Web Site: Wandusa.com
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.copyright}>
          <Typography variant='h6' className={classes.copyrightText}>
            Copyright- All Rights Reserved by WAND USA Inc.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
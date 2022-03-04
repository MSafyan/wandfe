import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container } from '@material-ui/core';
import clsx from 'clsx';

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      background: `linear-gradient(to top, rgba(80,200,200,0.8), rgba(80,200,200,0.8)), url(https://picsum.photos/1280/853/?random=1) no-repeat top center`,
      color:'white',
      padding:theme.spacing(12),
    },
    heading:{
      paddingBottom:theme.spacing(6)
    },
    para:{
      fontSize:'1.4rem'
    },
    Button:{
      fontSize:'1.2rem',
      width:'15rem',
      marginBottom:'1rem',
      color:'white'
    },
    buttonContained:{
      color:theme.palette.primary.main,
      background:"white"
    },
    borderNull:{
      border:'0px'
    }
  }));

const BluishOverlay = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Container style={{padding:'3rem'}} component="main" maxWidth="lg">
        <Typography variant='h4' className={classes.heading}>
          You and Your Maid Service Deserve a Little Peace & Quiet
        </Typography>
        <Typography variant='body1' className={clsx(classes.heading,classes.para)}>
          The Easiest-to-Use and the Best Rated Maid Software on Capterra. Rated 5 stars by Owners just like YOU!
        </Typography>
        <div className={classes.buttons}>
          <Button
            className={clsx(classes.Button,classes.buttonContained)}
            variant="contained"
            color="primary"
          >
            GET STARTED
          </Button>
          <Button
            className={clsx(classes.Button,classes.borderNull)}
            variant="outlined"
          >
            How it works?
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default BluishOverlay
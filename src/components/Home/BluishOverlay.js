import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container } from '@material-ui/core';
import clsx from 'clsx';

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      background: `url(Group-10.png)`,
      color:'white',
      padding:theme.spacing(12),
      [theme.breakpoints.down('sm')]: {
        padding:theme.spacing(4),
      }
    },
    innerContainer:{

    },
    img:{
      padding:theme.spacing(8),
      [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(3),
      }
    },
    heading:{
      paddingBottom:theme.spacing(6),
      fontWeight:'bold'
    },
    para:{
      // fontSize:'1.4rem'
      fontWeight:'normal'
    },
    Button:{
      width:'15rem',
      marginBottom:'1rem',
      color:'white',
      [theme.breakpoints.down('sm')]: {
        width:theme.spacing(20),
        padding:theme.spacing(0.5)
      }
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
      <Container className={classes.innerContainer} component="main" maxWidth="xl">
        <img src='WandWhite.png' alt='' width='40%' className={classes.img}/>
        <Typography variant='h1' className={classes.heading}>
          You and Your Maid Service Deserve a Little Peace & Quiet
        </Typography>
        <Typography variant='h4' className={clsx(classes.heading,classes.para)}>
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
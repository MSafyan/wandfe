import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx'


  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      marginBottom:theme.spacing(12),
      textAlign:'left',
      background:theme.palette.primary.main,
      display:'flex',
      justifyContent:'space-between'
    },
    contentWrapper:{
      padding:theme.spacing(6),
      color:"white",
      [theme.breakpoints.down('sm')]:{
        padding:theme.spacing(2)
      }
    },
    content:{
      paddingBottom:theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        paddingBottom:theme.spacing(2),
      }
    },
    author:{
      fontWeight:'bold'
    },
    bold:{
      fontWeight:'bold',
      paddingTop:theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        paddingTop:theme.spacing(1),
      }
    },
    imgContainer:{
      width:'50vw',
      // minWidth:"500px",
      alignSelf:'right',
      [theme.breakpoints.down('sm')]:{
        // minWidth:"250px",
      }
    }
  }));

const SuperEasy = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentWrapper}>
        <Typography variant='h6' className={classes.bold}>
          WHAT OUR HOME CLEANING PROS SAY
        </Typography >
        <Typography variant='h2' className={clsx(classes.content,classes.bold)}>
          Super easy to use.
        </Typography>
        <Typography variant='h5' className={clsx(classes.content)}>
          After Wand cleaners my apartment always clean and fresh. Plus I know that with Wand cleaners my home is secure.
        </Typography>
        <Typography variant='h4' className={classes.author}>
          James, Brooklyn, NY.
        </Typography>
        <Typography variant='h4' className={classes.author}>
          {".  .   .   ."}
        </Typography>
      </div>
      <div className={classes.imgContainer}>
        <img style={{width:'50vw'}} alt='' src='Mask-Group-2.png'/>
      </div>
    </div>
  )
}

export default SuperEasy
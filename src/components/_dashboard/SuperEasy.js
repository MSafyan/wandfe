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
      color:"white"
    },
    content:{
      paddingBottom:theme.spacing(6),
    },
    bold:{
      fontWeight:'bold',
      paddingTop:theme.spacing(3)
    },
    imgContainer:{
      width:'50%',
      minWidth:"500px",
      alignSelf:'right'
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
        <Typography variant='body2' className={clsx(classes.content)}>
          After Wand cleaners my apartment always clean and fresh. Plus I know that with Wand cleaners my home is secure.
        </Typography>
        <Typography variant='h5' className={classes.content}>
          James, Brooklyn, NY.
        </Typography>
      </div>
      <div className={classes.imgContainer}>
        <img width='100%' alt='' src='Mask-Group-2.png'/>
      </div>
    </div>
  )
}

export default SuperEasy
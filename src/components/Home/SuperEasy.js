import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx'


  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      marginBottom:'4vw',
      textAlign:'left',
      background:theme.palette.primary.main,
      display:'flex',
      justifyContent:'space-between',
    },
    contentWrapper:{
      padding:'3.5vw',
      color:"white",
    },
    heading:{
      fontWeight:'bold',
      fontSize:'2vw',
      padding:'2vw 0px',
      color:'white',
    },
    heading2:{
      paddingBottom:'6vw',
      color:'white',
      fontWeight:'bold',
      fontSize:'3.9vw',
    },
    content:{
      paddingBottom:'2vw',
      fontSize:"1.9vw",
      fontWeight:"normal",
    },
    author:{
      fontWeight:'bold',
      fontSize:'3.2vw',
    },
    bold:{
      fontWeight:'bold',
      paddingTop:theme.spacing(3),
    },
    dot:{
      height: '12px',
      width: '12px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight:'1rem',
    },
    imgContainer:{
      width:'50vw',
      alignSelf:'right',
    }
  }));

const SuperEasy = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentWrapper}>
        <Typography variant='h5' className={classes.heading}>
          WHAT OUR HOME CLEANING PROS SAY
        </Typography >
        <Typography variant='h1' className={clsx(classes.heading2)}>
          Super easy to<br/> use.
        </Typography>
        <Typography variant='h5' className={clsx(classes.content)}>
          After Wand cleaners my apartment always clean and fresh. Plus I know that with Wand cleaners my home is secure.
        </Typography>
        <Typography variant='h2' className={classes.author}>
          James, Brooklyn, NY.
        </Typography>
        <Typography variant='h2' className={classes.author}>
          <span className={classes.dot}></span>
          {"  .   .   ."}
        </Typography>
      </div>
      <div className={classes.imgContainer}>
        <img width='100%' alt='' src='Mask-Group-2.png'/>
      </div>
    </div>
  )
}

export default SuperEasy
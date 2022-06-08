import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
    margin:'2vw',
    padding:'2vw',
    background:theme.palette.primary.dark,
    borderRadius:"1rem",
    position:'relative',
    overflow:'inherit',
    color:'white',
    [theme.breakpoints.down('sm')]:{
      height:"30vw",
      padding:'3vw 0px',
      '& .MuiCardContent-root':{
        padding:theme.spacing(1),
      }
    }
  },
  content:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:"-webkit-fill-available"
  },
  title: {
    fontSize: '1.2vw',
    paddingBottom:'1vw',
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]:{
      fontSize:"2.4vw",
      paddingBottom:theme.spacing(0.3),
    }
  },
  body:{
    fontSize: '1.2vw',
    fontWeight:'100',
    [theme.breakpoints.down('sm')]:{
      fontSize:"2.4vw",
    }
  },
  iconWrapper:{
    position:'absolute',
    top:'-1.8vw',
    left:'2.5vw',
    background:theme.palette.primary.main,
    border:"0.5vw solid white ",
    borderRadius:'100%',
    padding:'0.5vw',
    [theme.breakpoints.down('md')]:{
      padding:"0px .3vw",
      top:'-2.2vw',
    },
    [theme.breakpoints.down('sm')]:{
      padding:"0px .8vw",
      border:"1vw solid white ",
    }
  },
}));

export default function SimpleCard({val}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant='h6'>
          {val.heading}
        </Typography>
        <Typography variant="h6" className={classes.body}>
          {val.body}
        </Typography>
      </CardContent>
      <div className={classes.iconWrapper}>
        {val.icon}
      </div>
    </Card>
  );
}

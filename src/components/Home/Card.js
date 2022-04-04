import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  Payment} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  root: {
    padding:theme.spacing(5),
    background:theme.palette.primary.dark,
    color:'white',
    borderRadius:"1rem",
    position:'relative',
    overflow:'inherit',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2),
      height:'none',
    }
  },
  title: {
    // fontSize: '1.7rem',
    paddingBottom:theme.spacing(2),
    paddingTop:theme.spacing(2),
    fontWeight:'bold'
  },
  iconWrapper:{
    position:'absolute',
    top:theme.spacing(-6),
    background:theme.palette.primary.main,
    border:"0.4rem solid white ",
    borderRadius:'50%',
    padding:theme.spacing(3)
  },
}));

export default function SimpleCard({val}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h6'>
          {val.heading}
        </Typography>
        <Typography variant="h6">
          {val.body}
        </Typography>
      </CardContent>
      <div className={classes.iconWrapper}>
        {val.icon}
      </div>
    </Card>
  );
}

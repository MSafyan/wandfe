import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  Payment} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  root: {
    padding:theme.spacing(4),
    background:theme.palette.primary.dark,
    color:'white',
    height:'15rem',
    borderRadius:"1rem",
    position:'relative',
    overflow:'inherit',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2),
      height:'none',
    }
  },
  title: {
    fontSize: '1.2rem',
    paddingBottom:theme.spacing(2),
    fontWeight:'bold'
  },
  iconWrapper:{
    position:'absolute',
    top:theme.spacing(-4),
    background:theme.palette.primary.main,
    border:"0.7rem solid white ",
    borderRadius:'50%',
    padding:theme.spacing(1)
  },
}));

export default function SimpleCard({val}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h5'>
          {val.heading}
        </Typography>
        <Typography variant="body1" component="h2">
          {val.body}
        </Typography>
      </CardContent>
      <div className={classes.iconWrapper}>
        <Payment />
      </div>
    </Card>
  );
}

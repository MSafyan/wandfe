import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  Payment} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  root: {
    padding:theme.spacing(8),
    background:theme.palette.primary.dark,
    color:'white',
    height:'15rem',
    borderRadius:"1rem",
    position:'relative'
  },
  title: {
    fontSize: '1.2rem',
    paddingBottom:theme.spacing(2)
  },
  iconWrapper:{
    position:'absolute',
    top:'-20px',
    background:theme.palette.primary.main,
    border:"0.7rem solid white ",
    borderRadius:'50%',
    padding:'0.3rem'
  },
}));

export default function SimpleCard({val}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant='h5'>
          {val.heading}
        </Typography>
        <Typography variant="body2" component="h2">
          {val.body}
        </Typography>
      </CardContent>
      <div className={classes.iconWrapper}>
        <Payment />
      </div>
    </Card>
  );
}

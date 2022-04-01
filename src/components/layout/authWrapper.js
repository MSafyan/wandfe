import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container:{
    padding:theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(1)
    }
  },
  logo:{
    'position':"absolute",
    zIndex:'3',
    [theme.breakpoints.down('sm')]: {
      position:"relative",
      textAlign:'start'
    }
  },
  leftSide:{
    background:'#F2FCFC',
    zIndex:1,
    [theme.breakpoints.down('sm')]: {
      order:1
    }
  },
  img:{
    width:'100%'
  },
  backgroundBox:{
    background:'#F2FCFC',
    width:'50%',
    height:'100%',
    top:0,
    position:'absolute',
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  },
  onBoarding:{
    marginRight:'100%'
  },
  center:{
    margin:"auto"
  }
}));

function AuthWrapper({isAuthenticated, children,history}) {
  const classes = useStyles();
  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <div className={classes.logo}>
        <img alt='' src='wordcyan.png' />
      </div>
      <Container className={classes.container} component="main" maxWidth="md">
      <CssBaseline />
      <Grid container spacing={2}>
          <Grid item sm={12} md={6} className={classes.leftSide}>
            <div>
              <img src='pablo-cleaning-up.png' alt='pablo cleaning' className={classes.img}/>
            </div>
            <Typography variant="body2" component="p">
              better keep yourself clean and bright; you are the window through which you must see the world
            </Typography>
            <Typography variant="h6" component="h6">
              - George Bernard Shaw
            </Typography>
          </Grid>
          <Grid container item sm={12} md={6}>
            <Grid item>
              <Typography component="h6" variant="h6" className={classes.onBoarding}>
                {"ONBOARDING"}
              </Typography>
              <Typography component="h3" variant="h3">
                Welcome Here
              </Typography>
            </Grid>
            {children}
          </Grid>
        </Grid>
      </Container>
      <div className={classes.backgroundBox}></div>
    </>
  );
}


export default AuthWrapper
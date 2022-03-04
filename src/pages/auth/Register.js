import React from 'react';
import {FormGroup,CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { ErrorMessage,Field, Form, Formik} from 'formik';
import { object, string, ref, number } from 'yup';

import { connect } from "react-redux";
import { SIGN_UP } from "../../actions/authActions";

const initialValues = {
  firstName:'',
  lastName:'',
  email: '',
  password: '',
  confirmPassword:'',
  zipcode:'',
  phoneNumber:'',
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  leftSide:{
    background:'#F2FCFC',
    zIndex:1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  img:{
    width:'100%'
  },
  twoInOne:{
    display:'flex',
    justifyContent:"space-between"
  },
  submitButton:{
    fontSize:'1.2rem',
    width:'15rem',
    marginBottom:'1rem'
  },
  backgroundBox:{
    background:'#F2FCFC',
    width:'50%',
    height:'100%',
    top:0,
    position:'absolute'
  },
  onBoarding:{
    marginRight:'100%'
  },
  center:{
    margin:"auto"
  }
}));

function SignUp({isAuthenticated,loading,history, SIGN_UP}) {
  const classes = useStyles();
  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <Container style={{padding:'3rem'}} component="main" maxWidth="md">
      <CssBaseline />
      <Grid container spacing={2}>
          <Grid item md={6} className={classes.leftSide}>
            <div>logo</div>
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
            {/* <div className={classes.paper}> */}
            <Grid item>
              <Typography component="h6" variant="h6" className={classes.onBoarding}>
                {"ONBOARDING"}
              </Typography>
              <Typography component="h3" variant="h3">
                Welcome Here
              </Typography>
            </Grid>
            <Formik
              validationSchema={
                object({
                  firstName: string().required('First Name is mandatory!!!').min(1).max(100),                 
                  lastName: string().required('Last Name is mandatory!!!').min(1).max(100),
                  email: string().email('Must be a valid email').max(255).required('Email is required'),
                  password: string().required('password should be minimum 8character!!!').min(8),
                  confirmPassword:string().oneOf([ref('password'), null], 'Passwords must match'),
                  zipcode:number().integer().typeError('Please enter a valid zip code').required('Zip code is mandatory'),
                  phoneNumber: number().integer().typeError('Please enter a valid phone number').required('Must provide Address'),
                })
              }
            initialValues={initialValues}
            onSubmit={async (values) => {
              console.log(values);
              SIGN_UP(values);
            
            }}>
                {({ isSubmitting, isValidating }) => (
                  <Form className={classes.form}>
                    <div className={classes.twoInOne}>
                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name="firstName" as={TextField} label="First Name" variant='outlined' />
                          <ErrorMessage component='div' style={{color:"red"}} name="firstName" />
                        </FormGroup>
                      </Box>
                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name="lastName" type="text" as={TextField} label="Last Name" variant='outlined' />
                          <ErrorMessage component='div' style={{color:"red"}} name="lastName" />
                        </FormGroup>
                      </Box>
                    </div>

                    <Box marginBottom={2}>
                      <FormGroup>
                        <Field name="email" as={TextField} label="Your Email Address" variant='outlined' />
                        <ErrorMessage component='div' style={{color:"red"}} name="email" />
                      </FormGroup>
                    </Box>
                    <Box marginBottom={2}>
                      <FormGroup>
                        <Field name="password" type="password" as={TextField} label="Your password" variant='outlined' />
                        <ErrorMessage component='div' style={{color:"red"}} name="password" />
                      </FormGroup>
                    </Box>
                    <Box marginBottom={2}>
                      <FormGroup>
                        <Field name="confirmPassword" type="password" as={TextField} label="Confirm password" variant='outlined' />
                        <ErrorMessage component='div' style={{color:"red"}} name="confirmPassword" />
                      </FormGroup>
                    </Box>

                    <div className={classes.twoInOne}>
                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name="zipcode" as={TextField} label="Zip Code" variant='outlined' />
                          <ErrorMessage component='div' style={{color:"red"}} name="zipcode" />
                        </FormGroup>
                      </Box>
                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name="phoneNumber" as={TextField} label="Phone Number" variant='outlined' />
                          <ErrorMessage component='div' style={{color:"red"}} name="phoneNumber" />
                        </FormGroup>
                      </Box>
                    </div>
                  
                    <Button
                      disabled={loading}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submitButton}
                      startIcon={
                        loading ? (
                          <CircularProgress size="1rem" />
                        ) : undefined
                      }
                    >
                      {loading ? 'Submitting' : 'Sign Up'}
                    </Button>
                    <div>
                      <Grid container>
                        <Grid item className={classes.center}>
                          <Typography component="span" variant="body2">
                            Already has an account?
                          </Typography>
                          <Link href="/login" variant="body2" style={{margin:'auto'}}>
                            {"  Sign In"}
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </Form>
                )}
              </Formik>
              <Box mt={8}>
                <Copyright />
              </Box>
            {/* </div> */}
          </Grid>
        </Grid>
      </Container>
      <div className={classes.backgroundBox}></div>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated || false,
  loading:state.auth.loading
});

export default connect(
  mapStateToProps,
  { SIGN_UP }
)(SignUp);
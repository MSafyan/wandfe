import React from 'react';
import {FormGroup,CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'

import { ErrorMessage,Field, Form, Formik} from 'formik';
import { object, string } from 'yup';

import AuthWrapper from '../../components/layout/authWrapper';


import { connect } from "react-redux";
import { SIGN_IN } from "../../actions/authActions";

const initialValues = {
  identifier: '',
  password: '',
}


const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  submitButton:{
    fontSize:'1.2rem',
    width:'15rem',
    marginBottom:'1rem'
  },
  Button:{
    width:'15vw',
    marginBottom:'1rem',
    color:'white',
    fontSize:'1.5vw',
    [theme.breakpoints.down('sm')]: {
      width:'11rem',
      fontSize:'.8rem',
      marginBottom:'1rem',
      color:'white',
    }
  },
  field:{
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':{
      border: "none",
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 4px 8px',
      height:"6rem",
      [theme.breakpoints.only('lg')]: {
        height:"5rem",
      },
      [theme.breakpoints.only('md')]: {
        height:"3.5rem",
      },
      [theme.breakpoints.down('sm')]: {
        height:"4rem",
      },
    },
    '& .MuiInputLabel-outlined':{
      fontSize:'1.5rem',
      marginTop:"0.7vw",
      [theme.breakpoints.only('lg')]: {
        fontSize:'1rem',
      },
      [theme.breakpoints.only('md')]: {
        fontSize:'0.7rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize:'0.7rem',
        marginTop:".3rem",
      }
    },
    '& .MuiInputBase-input':{
      height:"4rem",
      [theme.breakpoints.only('lg')]: {
        height:"3rem",
      },
      [theme.breakpoints.only('md')]: {
        height:"1.8rem",
      },
      [theme.breakpoints.down('sm')]: {
        height:"2rem",
      }
    },
    '& .MuiOutlinedInput-input':{
      fontSize:'1.5rem',
      [theme.breakpoints.only('lg')]: {
        fontSize:'1rem',
      },
      [theme.breakpoints.only('md')]: {
        fontSize:'0.7rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize:'0.7rem',
      }
    }
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
  linkText:{
    fontWeight:'600',
    fontSize:'1vw',
    color:theme.palette.primary.lightDark,
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.6rem'
    }
  },
  center:{
    margin:"auto"
  },
  marginBox:{
    marginBottom:'1.2vw',
    [theme.breakpoints.down('sm')]: {
      marginBottom:theme.spacing(2),
    }
  },
  linkWrapper:{
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent:'space-around',
    }
  },
  blue:{
    color:theme.palette.primary.main
  }
}));

function SignIn({isAuthenticated,loading,history, SIGN_IN}) {
  const classes = useStyles();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/orders');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <AuthWrapper title="Glad to see you again!">
              <Formik
                validationSchema={
                  object({
                    password: string().required('password should be minimum 8character!!!').min(8),
                    identifier: string().required('Your email is mandatory!!!').min(2).max(100),
                  })
                }
              initialValues={initialValues}
              onSubmit={async (values,{setSubmitting}) => {
                // console.log(values);
                SIGN_IN(values)
                ;
              
              }}>
                {({ isSubmitting, isValidating }) => (
                  <Form className={classes.form}>

                    <Box className={classes.marginBox}>
                      <FormGroup>
                        <Field name="identifier" as={TextField} label="Your Email Address" variant='outlined' className={classes.field}/>
                        <ErrorMessage component='div' style={{color:"red"}} name="identifier" />
                      </FormGroup>
                    </Box>
                    <Box className={classes.marginBox}>
                      <FormGroup>
                        <Field name="password" type="password" as={TextField} label="Your password" variant='outlined' className={classes.field}/>
                        <ErrorMessage component='div' style={{color:"red"}} name="password" />
                      </FormGroup>
                    </Box>
                  
                    <Button
                      disabled={loading}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.Button}
                      startIcon={
                        loading ? (
                          <CircularProgress size="1rem" />
                        ) : undefined
                      }
                    >
                      {loading ? 'Submitting' : 'Sign In'}
                    </Button>
                    <div className={classes.linkWrapper}>
                      <div>
                        <Link href="/forgot" variant="h6" className={clsx(classes.linkText,classes.blue)}>
                          {"Forgot  "}
                        </Link>
                        <Typography component="span" variant="h6" className={classes.linkText}>
                          Password?
                        </Typography>
                      </div>
                      <div>
                        <Typography component="span" variant="h6" className={classes.linkText}>
                          Don't have an account yet?
                        </Typography>
                        <Link href="/register" variant="h6" className={clsx(classes.linkText,classes.blue)}>
                          {"  Sign Up"}
                        </Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
    </AuthWrapper>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading:state.auth.loading
});

export default connect(
  mapStateToProps,
  { SIGN_IN }
)(SignIn);
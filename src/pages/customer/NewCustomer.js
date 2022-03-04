import React from 'react';
import Header from '../../components/FormsUI/Headers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  CircularProgress
} from '@material-ui/core';
import Textfield from '../../components/FormsUI/Textfields';
import DateTimePicker from '../../components/FormsUI/DataTimePickers';
import Button from '../../components/FormsUI/Buttons';

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_CUSTOMER,CUSTOMER_UPDATE } from "../../actions/customerAction";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));



const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  contactNo1: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  contactNo2: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number'),
  address: Yup.string()
    .required('Required'),
  DOB: Yup.date().required('Date of birth required'),
});

const NewCustomer = ({success,NEW_CUSTOMER,CUSTOMER_UPDATE,customer,loading,edit,history}) => {
  const classes = useStyles();
  React.useEffect(()=>{
    if(success){
      history.push('/newvehicle')
    }
    // eslint-disable-next-line
  },[success])
  const formState=()=>{
    const INITIAL_FORM_STATE = {
      firstName: '',
      lastName: '',
      email: '',
      contactNo1: '',
      contactNo2: '',
      address: '',
      DOB: '',
    };

    const EDIT_FORM_STATE={
      firstName:customer?.firstName || '',
      lastName:customer?.lastName || '',
      email:customer?.email || '',
      contactNo1:customer?.contactNo1 || '',
      contactNo2:customer?.contactNo2 || '',
      address:customer?.address || '',
      DOB:customer?.DOB || ''
    }

    if(!edit){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

 



  return (
    <Layout>
    <Grid container>
      <Grid item xs={12}>
        <Header title={edit?'Update Customer':'New Customer'}/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                if(edit) {
                  CUSTOMER_UPDATE(values);
                }else{
                  NEW_CUSTOMER(values)
                  }
              }}
              enableReinitialize
            >
              {({ values, errors, isSubmitting, isValid }) => (
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="contactNo1"
                      label="Contact No.1"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="contactNo2"
                      label="Contact No.2"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="address"
                      label="Address"
                      />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="DOB"
                      label="Date of Birth"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {
                      edit?
                      <Button
                      disabled={loading}
                      type="submit"
                      variant="contained"
                      color="primary"
                      startIcon={
                        loading ? (
                          <CircularProgress size="1rem" />
                        ) : undefined
                      }
                    >
                      {loading ? 'Submitting' : 'Update Customer'}
                    </Button>:
                    <Button
                    disabled={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={
                      loading ? (
                        <CircularProgress size="1rem" />
                      ) : undefined
                    }
                  >
                    {loading ? 'Submitting' : 'Add Customer'}
                  </Button>
                    }
                    
                  </Grid>
                </Grid>

              </Form>
              )}
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
    </Layout>
  );
};

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading,
  success:state.customer.success,
});

export default connect(
  mapStateToProps,
  { NEW_CUSTOMER,CUSTOMER_UPDATE }
)(NewCustomer);
import React from 'react';
import Header from '../components/FormsUI/Headers';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  CircularProgress,
  Input,
  Button,
  Typography
} from '@material-ui/core';
// import Textfield from '../components/FormsUI/Textfields';
import Inputfeild from '../components/FormsUI/Inputfeild';
import DateTimePicker from '../components/FormsUI/DataTimePickers';
import ButtonF from '../components/FormsUI/Buttons';
import AddIcon from '@material-ui/icons/Add';
import Select from '../components/FormsUI/Selects'

import Layout from '../components/layout/Index'

import { connect } from "react-redux";
import { NEW_CUSTOMER,CUSTOMER_UPDATE } from "../actions/customerAction";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  addressWrapper:{
    padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
    marginTop:theme.spacing(3),
    borderRadius:theme.spacing(2),
    background:'white',
    gridColumnGap:theme.spacing(2),
    gridRowGap:theme.spacing(3),
  },
  emailWrapper:{
    width:'70%'
  },
  justifyStart:{
    justifySelf:'start'
  },
  header:{
    alignContent:'center',
    gridColumnGap:theme.spacing(2)
  }
}));



const FORM_VALIDATION = Yup.object().shape({
  cleaningService: Yup.string()
  .required('Required'),
  otherEmail: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  companyPhone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  companyWebsite: Yup.string()
    .required('Required'),
  facebookPage: Yup.string()
    .required('Required'),
  billingAddress: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  region: Yup.string()
    .required('Required'),
  address1: Yup.string()
    .required('Required'),
  address2: Yup.string(),
  zipCode: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
  
});

const CompanyInfo = ({NEW_CUSTOMER,CUSTOMER_UPDATE,customer,edit}) => {
  const classes = useStyles();
  React.useEffect(()=>{

    // eslint-disable-next-line
  },[])

  const allDurations={
    'OrderId':'OrderId',
    'customerId':'customerId',
    'vehicleRegNo':'vehicleRegNo'
  }

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      cleaningService: '',
      otherEmail: '',
      companyPhone: '',
      companyWebsite: '',
      facebookPage: '',
      billingAddress: '',
      city: '',
      region: '',
      address1: '',
      address2: '',
      zipCode: '',
    };

    const EDIT_FORM_STATE={
      cleaningService:customer?.firstName || '',
      otherEmail:customer?.lastName || '',
      companyPhone:customer?.email || '',
      companyWebsite:customer?.contactNo1 || '',
      facebookPage:customer?.contactNo2 || '',
      billingAddress:customer?.address || '',
      city:customer?.DOB || '',
      region:customer?.DOB || '',
      address1:customer?.DOB || '',
      address2:customer?.DOB || '',
      companyPhone:customer?.DOB || '',
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
        <Container maxWidth="lg">
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
                <div style={{display:'grid',gridTemplateColumns:'3fr 1fr 1fr 1fr'}} className={classes.header}>
                  <Typography variant='h4' style={{gridArea:'1 / 1'}}>
                    Comapny Information  
                  </Typography>
                  <Typography variant='h6' style={{gridArea:'1 / 2'}}>
                    I want to recieve Email  
                  </Typography>
                  <Select style={{gridArea:'1 / 3'}}
                    name="allDurations"
                    label="All Durations"
                    options={allDurations}
                  />
                  <Button style={{gridArea:'1 / 4'}}
                    type='submit'
                    variant='contained'
                  >
                    Save Changes  
                  </Button>  
                </div>
                
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div style={{display:'flex'}}>
 
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'12% auto 25% 25%',gridTemplateRows:"1fr 1fr",alignItems:'center'}} className={classes.addressWrapper}>
                  <div style={{gridArea: '1 / 1 / 3 / 2'}}> 
                    <img src='logo512.png' width='80%'/>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<AddIcon />}
                      style={{padding:'0px',border:'none'}}

                    >
                      Upload File
                      <input
                        type="file"
                        hidden
                      />
                    </Button>
                  </div>
                  <div style={{gridArea: '1 / 2 / 2 / 3'}}>
                    <Field
                      name="cleaningService" placeholder="cleaning Service" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="cleaningService" />
                  </div>
                  <div style={{gridArea: '2 / 2 / 3 / 3'}}>
                    <Field
                      name="companyPhone" placeholder="companyPhone" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="companyPhone" />
                  </div>

                  <div style={{gridArea: '1 / 3 / 2 / 5',justifySelf:'start'}} className={classes.emailWrapper} >
                    <Field
                      name="otherEmail" placeholder="otherEmail" fullWidth as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="otherEmail" />
                  </div>
                  <div style={{gridArea: '2 / 3 / 3 / 4',justifySelf:'start'}}> 
                    <Field
                      name="companyWebsite" placeholder="companyWebsite" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="companyWebsite" />
                  </div>
                  <div style={{gridArea: '2 / 4 / 3 / 5',justifySelf:'start'}}> 
                    <Field
                      name="facebookPage" placeholder="facebookPage" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="facebookPage" />
                  </div>
                </div>

                {/* address  */}
                <div style={{display:'grid', gridTemplateAreas:'1fr 1fr 1fr',gridTemplateRows:'1fr 1fr'}} className={classes.addressWrapper}>
                  <div style={{gridArea:'1 / 1 / 2 / 2'}} className={classes.justifyStart}>
                    <Field
                      name="billingAddress" placeholder="billingAddress" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="billingAddress" />
                  </div>  
                  <div style={{gridArea:'1 / 2 / 2 / 3'}} className={classes.justifyStart}>
                    <Field
                      name="address1" placeholder="address1" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="address1" />
                  </div>  
                  <div style={{gridArea:'1 / 3 / 2 / 4'}} className={classes.justifyStart}>
                    <Field
                      name="address2" placeholder="address2" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="address2" />
                  </div>  
                  <div style={{gridArea:'2 / 1 / 3 / 2'}} className={classes.justifyStart}>
                    <Field
                      name="city" placeholder="city" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="city" />
                  </div>  
                  <div style={{gridArea:'2 / 2 / 3 / 3'}} className={classes.justifyStart}>
                    <Field
                      name="region" placeholder="region" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="region" />  
                  </div>  
                  <div style={{gridArea:'2 / 3 / 3 / 4'}} className={classes.justifyStart}>
                    <Field
                      name="zipCode" placeholder="zipCode" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="zipCode" />
                  </div>  
                </div>

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
)(CompanyInfo);
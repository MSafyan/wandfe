import React from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Input,
  CircularProgress,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import clsx from 'clsx';
import Select from '../../components/FormsUI/Selects'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AddIcon from '@material-ui/icons/Add';

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_CUSTOMER } from "../../actions/customerAction";


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridContainer:{
    display:'grid',
    gridTemplateColumns:'2fr 1fr',
    gridTemplateRows:'0.3fr 1.2fr 0.6fr' ,
    gridGap:theme.spacing(3),
    gridTemplateAreas:`
    "heading confirmBtn" 
    "personal billing" 
    "address address"`,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateRows:'0.2fr 1.4fr 1fr 1fr' ,
      gridTemplateAreas:`
      "heading confirmBtn" 
      "personal personal"
      "billing billing" 
      "address address"`,
    }
  },
  header:{
    justifySelf:'Start',
    paddingBottom:theme.spacing(3)
  },
  confirmBtn:{
    background:theme.palette.primary.lightDark,
    width:'70%',
    height:theme.spacing(7),
    padding:'0px',
    color:"white",
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
  },
  cardHeading:{
    fontSize:"18px",
    fontWeight:'bold'
  },
  customerGrid:{
    gridArea:'personal',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    gridTemplateRows:'0.5fr 1fr 1fr 1fr' ,
    gridTemplateAreas:`
    "heading heading heading heading"
    "title no no no" 
    "firstName lastName phoneNumber email"
    "companyName preferredMethod marketingSource marketingSource"`,
    gridColumnGap:theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "heading heading" 
      "title no"
      "firstName lastName"
      "phoneNumber email"
      "companyName preferredMethod" 
      "marketingSource no"`,
    }
  },
  locationGrid:{
    gridArea:'address',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'0.5fr 1fr 1fr' ,
    gridGap:theme.spacing(1),
    gridTemplateAreas:`
    "addHeading addHeading addHeading" 
    "address1 address2 address2"
    "city region zipCode"`,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "addHeading addHeading" 
      "address1 address1"
      "address2 address2"
      "city region" 
      "zipCode no"`,
    }
  },
  billingGrid:{
    gridArea:"billing",
    display:'grid',
    gridTemplateRows:'1fr 1fr 1fr' ,
    gridTemplateColumns:'1fr',
    textAlign:'left',
    gridTemplateAreas:`
    "billHeading"
    "line1" 
    "addAddress"
    "notes"`,
  },
  select:{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    },
  },
  label:{
    textAlign:'left',
    color:theme.palette.primary.lightDark
  },
  bold:{
    fontWeight:'bold'
  },
  marketSource:{
    width:"66%",
    marginLeft:'auto'
  },
  card:{
    padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
    borderRadius:theme.spacing(2),
    background:'white',
    gridColumnGap:theme.spacing(3),
  },
  justifyStart:{
    textAlign:'left'
  }
}));



const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  phoneNumber: Yup.number()
  .integer()
  .typeError('Please enter a valid phone number')
  .required('Required'),
  email: Yup.string()
  .email('Invalid email.')
  .required('Required'),
  // password: Yup.string().required('password should be minimum 8character!!!').min(8),
  // confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
  companyName: Yup.string()
    .required('Required'),
  preferredMethod: Yup.string()
    .required('Required'),
  address1: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  region: Yup.string()
    .required('Required'),
  zipCode: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
});


const NewCustomer = ({type,history,NEW_CUSTOMER,customer,loading,edit}) => {
  const classes = useStyles();
  React.useEffect(()=>{
    if(type==='customer'){
			history.push('/createBooking')
		}
    // eslint-disable-next-line
  },[])

  const pets={
    'facebook':'facebook',
    'google':'google',
  }

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      preferredMethod: '',
      password:'12341234',
      confirmPassword:'12341234',
      marketSource: '',
      termsCheck:true,
      billingAddress: '',
      notes: '',
      address1:'',
      address2:'',
      city:'',
      region:'',
      zipCode:'',
    
    };

    const EDIT_FORM_STATE={
      firstName:customer?.firstName || '',
      lastName:customer?.lastName || '',
      phoneNumber:customer?.contactNo1 || '',
      email:customer?.email || '',
      companyName:customer?.contactNo2 || '',
      preferredMethod:customer?.address || '',
      marketSource:customer?.DOB || '',
      notes:customer?.notes || '',
      billingAddress:customer?.billingAddress || '',
    }

    if(!edit){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

  return (
    <Layout>
        {/* <Container maxWidth="lg"> */}
            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                // if(edit) {
                  // CUSTOMER_UPDATE(values);
                // }else{
                  NEW_CUSTOMER(values)
                  // }
              }}
              enableReinitialize
            >
              {({ values, setFieldValue,handleSubmit }) => (
              <Form>
                <div className={classes.gridContainer}>
                  <Typography variant='h4' style={{gridArea:'heading'}} className={classes.header}>
                    <span className={classes.bold}> Add New Customer  </span>
                  </Typography>
                    {/* <NavLink to="/bookingPayment" variant="body2" className={classes.font}> */}
                    <Button style={{gridArea:'confirmBtn'}}
                      disabled={loading}
                      className={classes.confirmBtn}
                      type='submit'
                      variant='contained'
                      startIcon={
                        loading ? (
                          <CircularProgress size="1rem" />
                        ) : undefined
                      }
                      endIcon={<ArrowRightAltIcon style={{fill:'white'}}/>}
                    >
                      Create Customer
                    </Button>  
                  {/* </NavLink> */}
                  <div className={clsx(classes.customerGrid,classes.card)}>
                      <Typography variant='body1' className={clsx(classes.justifyStart,classes.cardHeading)} style={{gridArea:'heading'}}>personal Detail</Typography>
                      <div style={{gridArea:"title"}}>
                        <Select
                          name="title"
                          label="Title"
                          options={pets}
                          className={classes.select}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="marketSource" />
                      </div>
                      <div style={{gridArea:"firstName"}}>
                        <Typography variant='body2' className={classes.label}>
                          First Name
                        </Typography>
                        <Field
                          name="firstName" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="firstName" />
                      </div>
                      <div style={{gridArea:"lastName"}}>
                        <Typography variant='body2' className={classes.label}>
                          Last Name
                        </Typography>
                        <Field
                          name="lastName" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="lastName" />
                      </div>
                      <div style={{gridArea:"phoneNumber"}}>
                        <Typography variant='body2' className={classes.label}>
                          Phone Number
                        </Typography>
                        <Field
                          name="phoneNumber" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="phoneNumber" />
                      </div>
                      <div style={{gridArea:"email"}}>
                        <Typography variant='body2' className={classes.label}>
                          Email
                        </Typography>
                        <Field
                          name="email" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="email" />
                      </div>
                      <div style={{gridArea:"companyName"}}>
                        <Typography variant='body2' className={classes.label}>
                          Company Name
                        </Typography>
                        <Field
                          name="companyName" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="companyName" />
                      </div>
                      <div style={{gridArea:"preferredMethod"}}>
                        <Typography variant='body2' className={classes.label}>
                          Preferred Method
                        </Typography>
                        <Field
                          name="preferredMethod" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="preferredMethod" />
                      </div>
                      {/* <div style={{gridArea:"password"}}>
                        <Field
                          name="password"  type="password" variant='standard' placeholder="password" as={TextField}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="password" />
                      </div>
                      <div style={{gridArea:"confirmPassword"}}>
                        <Field
                          name="confirmPassword" type="password" variant='standard' placeholder="confirmPassword" as={TextField}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="confirmPassword" />
                      </div> */}
                      <div style={{gridArea:"marketingSource"}} className={classes.marketSource}>
                        <Select
                          name="marketSource"
                          label="MarketSource"
                          options={pets}
                          className={clsx(classes.select)}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="marketSource" />
                      </div>

                  </div>
                  <div className={clsx(classes.billingGrid,classes.card)}>
                    <Typography  variant='body1' className={classes.cardHeading} style={{gridArea:"billHeading"}}>
                      Billing Address
                    </Typography>  
                    <div style={{gridArea:'line1'}}>
                      <FormControlLabel
                        checked={values.termsCheck}
                        onChange={() => setFieldValue("termsCheck", !values.termsCheck)}
                        control={<Checkbox />}
                        label="Same as Address line 1"
                        style={{display:'block'}}
                      />
                    <Button
                      component="label"
                      startIcon={<AddIcon style={{marginRight:'0.6rem'}}/>}
                      style={{padding:'0px',
                      border:'none',
                      fontWeight:'bold',
                      fontSize:'12px'}}
                    >
                      Add new Service Address
                    </Button>
                    </div>
                    {!values.termsCheck &&
                      <div style={{gridArea:"addAddress",paddingBottom:'0.8rem'}}>
                        <Field
                          name="billingAddress" placeholder="billingAddress" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="billingAddress" />
                      </div>
                    }
                    <div style={{gridArea:"notes"}}>
                      <Typography variant='body2' className={classes.bold}>
                        Addition Information or notes
                      </Typography> 
                      <div >
                        <Field
                          name="notes" placeholder="notes" as={Input}
                        />
                        <ErrorMessage component='div' style={{color:"red"}} name="notes" />
                      </div>
                    </div>
                  </div>
                  <div className={clsx(classes.locationGrid,classes.card)}>
                    <Typography variant='body1' className={clsx(classes.justifyStart,classes.cardHeading)} style={{gridArea:'addHeading'}}>Address Detail</Typography>
                    <div style={{gridArea:'address1'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Address1
                      </Typography>
                      <Field
                        name="address1" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="address1" />
                    </div>  
                    <div style={{gridArea:'address2'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Address2
                      </Typography>
                      <Field
                        name="address2" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="address2" />
                    </div>  
                    <div style={{gridArea:'city'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        City
                      </Typography>
                      <Field
                        name="city" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="city" />
                    </div>  
                    <div style={{gridArea:'region'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Region
                      </Typography>
                      <Field
                        name="region" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="region" />  
                    </div>  
                    <div style={{gridArea:'zipCode'}} className={classes.justifyStart}>
                    ``<Typography variant='body2' className={classes.label}>
                        Zip Code
                      </Typography>
                      <Field
                        name="zipCode" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="zipCode" />
                    </div>  
                  </div>
                </div>
              </Form>
              )}
            </Formik>
        {/* </Container> */}
    </Layout>
  );
};

const mapStateToProps = state => ({
  type:state.auth.user.role.name,
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading,
  success:state.customer.success,
});

export default connect(
  mapStateToProps,
  { NEW_CUSTOMER }
)(NewCustomer);
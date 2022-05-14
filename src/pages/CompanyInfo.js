import React from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles  } from '@material-ui/core/styles';
import {
  Input,
  Button,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AddIcon from '@material-ui/icons/Add';
import Selects from '../components/FormsUI/Selects'
import { toast } from "react-toastify";

import Layout from '../components/layout/Index'

import axios,{url} from '../actions/customAxios';
import { connect } from "react-redux";
import { COMPANY_INFO,SET_EMPLOYEE_LOADING,UNSET_EMPLOYEE_LOADING,FETCH_COMPANY_INFO } from "../actions/employeeActions";
import { ClEANER_CLEANER } from '../actions/orderAction';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridWrapper:{
    display:'grid',
    gridTemplateAreas:`
    "heading" 
    "details" 
    "address"
    "country"
    `,
    gridTemplateColumns:'1fr',
    gridTemplateRows:'1fr 2fr 2fr',
    gridGap:theme.spacing(3),
    
  },
  headerGrid:{
    display:'grid',
    gridTemplateColumns:'3fr 0.8fr 0.7fr 1.2fr',
    gridTemplateAreas:`
    "companyHeading emailLable emailDrop confirmBtn"`,
    gridColumnGap:theme.spacing(2),
    alignItems:'center',
    paddingBottom:'1rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "companyHeading companyHeading" 
      "emailLable no"
      "emailDrop confirmBtn"`,
    }
  },
  detailsGrid:{
    gridArea:'details',
    display:'grid',
    gridTemplateColumns:'10vw auto 25% 25%',
    gridTemplateRows:"1fr 1fr",
    gridTemplateAreas:`
    "image cleaningService otherEmail otherEmail"
    "image companyPhone companyWebsite facebookPage"`,
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "image cleaningService"
      "otherEmail companyPhone"
      "companyWebsite facebookPage"`,
    }
  },
  locationGrid:{
    gridArea:'address',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'1fr 1fr 1fr' ,
    gridTemplateAreas:`
    "addHeading addHeading addHeading" 
    "billingAddress address1 address2"
    "city region zipCode"`,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "addHeading addHeading" 
      "billingAddress billingAddress"
      "address1 address1"
      "address2 address2"
      "city region"
      "zipCode no"`,
    }
  },
  countryGrid:{
    gridArea:'country',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateAreas:`
    "country country1 timezone"`,
    [theme.breakpoints.down('sm')]: {
    gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`"country country1" "timezone no"`,
    }
  },
  card:{
    padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
    marginTop:theme.spacing(3),
    borderRadius:theme.spacing(2),
    background:'white',
    gridColumnGap:theme.spacing(2),
    gridRowGap:theme.spacing(3),
  },
  cardHeading:{
    color:theme.palette.primary.lightDark,
    fontSize:"0.9vw",
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize:"18px",
    },
  },
  select:{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      [theme.breakpoints.up('md')]: {
        height:'2.8vw',
      }
    },
    "& .MuiSelect-outlined":{
      height:'.8vw',
      [theme.breakpoints.down('md')]: {
        paddingLeft:'5px',
        paddingRight:'20px',
      }
    },
    "& .MuiOutlinedInput-input":{
      [theme.breakpoints.only('lg')]: {
        padding:'9px 10px',
        fontSize:'12px'
      },
      [theme.breakpoints.only('md')]: {
        padding:'7px 10px'
      },
      [theme.breakpoints.down('sm')]: {
        padding:'5px 4px'
      }
    }
  },
  label:{
    textAlign:'left',
    color:theme.palette.primary.lightDark,
    fontWeight:"600",
    [theme.breakpoints.up('md')]: {
      fontSize:'0.75vw',
    }
  },
  imgBg:{
    borderRadius:'10px',
    background:theme.palette.primary.light,
    position:'relative',
    height:"8vw",
    width:"8vw",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down('sm')]: {
      height:"22vw",
      width:"22vw",
    }
  },
  imgBgChip:{
    position:'absolute',
    background:'white',
    borderRadius:'10px',
    padding:'2px',
    top:'15px',
    left:'10px',
    [theme.breakpoints.up('md')]: {
      fontSize:'0.66vw'
    },
    [theme.breakpoints.down('sm')]: {
      top:'5px',
      left:'2px',
      fontSize:'10px'
    }
  },
  emailWrapper:{
    width:'70%'
  },
  confirmBtn:{
    background:theme.palette.primary.lightDark,
    width:'70%',
    padding:'0px',
    color:"white",
    [theme.breakpoints.up('md')]: {
      height:'2.8vw',
      fontSize:'0.7vw',
    },
    [theme.breakpoints.down('md')]: {
      width:'100%',
    },
    [theme.breakpoints.down('sm')]: {
      width:'80%',
      display:'flex',
      padding:'5px',
      justifyContent:'space-around',
      marginLeft:'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width:'100%',
    }
  },
  chooseFile:{
    padding:'0px',
    border:'none',
    fontWeight:'bold',
    fontSize:'12px',
    [theme.breakpoints.up('md')]: {
      fontSize:"0.8vw",
    }
  },
  header:{
    justifySelf:'Start',
    fontWeight:"bold",
    fontSize:'3.2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize:"1.3rem",
      textAlign:'left',
      marginTop:"1rem",
      paddingBottom:'0.8rem'
    }
  },
  heading2:{
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.9rem',
      paddingBottom:'0.4rem'
    }
  },
  labelInput:{
    '& .MuiInputBase-input':{
      [theme.breakpoints.up('md')]: {
        fontSize:'0.75vw',
      }
    }
  },
  justifyStart:{
    textAlign:'left'
  },
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
  facebookPage: Yup.string(),
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

const allDurations={
  'EveryDay':'Every Day',
  'EveryWeek':'Every Week',
}

const CompanyInfo = ({history,type,ClEANER_CLEANER,businessId,COMPANY_INFO,loading,company,imageUrl,SET_EMPLOYEE_LOADING,UNSET_EMPLOYEE_LOADING,FETCH_COMPANY_INFO}) => {
  const classes = useStyles();
  React.useEffect(()=>{
    if(type==='customer'){
			history.push('/createBooking')
		}else{
      ClEANER_CLEANER()
      // UNSET_EMPLOYEE_LOADING()
      FETCH_COMPANY_INFO()
    }
    // eslint-disable-next-line
  },[])

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      allDurations:'EveryDay',
      logo:null,
      cleaningService: company?.cleaningService || '',
      otherEmail: company?.otherEmail || '',
      companyPhone: company?.companyPhone || '',
      companyWebsite: company?.companyWebsite || '',
      facebookPage: company?.facebookPage || '',
      billingAddress: company?.billingAddress || '',
      address1: company?.address1 || '',
      address2: company?.address2 || '',
      city: company?.city || '',
      region: company?.region || '',
      zipCode: company?.zipCode || '',
      country: company?.country || '',
      country1: company?.country1 || '',
      timezone: company?.timezone || '',
      bathroomDuration:'30',
      kitchenDuration:'30',
      bedroomDuration:'30',
      livingroomDuration:'30',
      ratePerHour:'30',
      available:true,
      days:['Monday'],
      startTime:new Date(),
      endTime:new Date(),
    };

      return INITIAL_FORM_STATE;
  }

  return (
    <Layout>
      {
        type!=='customer' && 
          <div className={classes.formWrapper}>
            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={async(values) => {
                // debugger;
                if(values.logo && (typeof(values.logo) !=='string')){
                  console.log('inside img check'+values.logo)
                  let data=new FormData();
                  data.append('refId',businessId);
                  data.append('field','logo');
                  data.append('ref','business');
                  data.append('files',values.logo);
                  SET_EMPLOYEE_LOADING()
                  // debugger;
                  try {
                    await axios.post(
                      `${url}/upload/`,data,
                      {
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      })
                      toast.success('image uploaded...')
                    
                  } catch (error) {
                      toast.warn('image upload failed, try again...')
                    console.log(error)
                  }
                UNSET_EMPLOYEE_LOADING()
                delete values.logo;
              }

              COMPANY_INFO({...values})
              }}
              enableReinitialize
            >
              {({ values, handleSubmit,setFieldValue }) => (
              <Form>
                <div className={classes.headerGrid}>
                  <Typography variant='h2' className={classes.header} style={{gridArea:'companyHeading'}}>
                    Company Information  
                  </Typography>
                  <Typography variant='body1' className={clsx(classes.cardHeading,classes.justifyStart,classes.heading2)} style={{gridArea:'emailLable'}}>
                    I want to recieve Email  
                  </Typography>
                  <Selects style={{gridArea:'emailDrop',background:'white'}}
                    name="allDurations"
                    options={allDurations}
                    className={classes.select}
                  />
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
                      Save Changes
                    </Button>    
                </div>
                
                <div className={clsx(classes.detailsGrid,classes.card)}>
                  <div style={{gridArea: 'image',marginRight:'1rem',textAlign:'start'}}> 
                    <div className={classes.imgBg}>
                      {
                        values.logo ?
                        <img src={URL.createObjectURL(values.logo)} height='90%' width='90%' alt=''/>:
                        <img src={imageUrl? imageUrl: `logo512.png`} alt='' height='90%' width='90%'/>
                      }
                      <Typography className={classes.imgBgChip} variant='body2'>Your logo here</Typography>
                    </div>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<AddIcon />}
                      className={classes.chooseFile}
                    >
                      Choose a File
                      <input
                        type="file"
                        hidden
                        onChange={(e)=>{
                          setFieldValue('logo', e.target.files[0])
                        }}
                      />
                    </Button>
                  </div>
                  <div style={{gridArea: 'cleaningService',justifySelf:'start'}}>
                    <Typography variant='body2' className={classes.label}>
                      Cleaning Service
                    </Typography>
                    <Field
                      name="cleaningService" as={Input} className={classes.labelInput}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="cleaningService" />
                  </div>
                  <div style={{gridArea: 'companyPhone',justifySelf:'start'}}>
                    <Typography variant='body2' className={classes.label}>
                      Company Phone
                    </Typography>
                    <Field
                      name="companyPhone" as={Input} className={classes.labelInput}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="companyPhone" />
                  </div>

                  <div style={{gridArea: 'otherEmail',justifySelf:'start'}} className={classes.emailWrapper} >
                    <Typography variant='body2' className={classes.label}>
                      Best Mail to reach someone in you company(excluding your personal email)
                    </Typography>
                    <Field
                      name="otherEmail" fullWidth as={Input} className={classes.labelInput}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="otherEmail" />
                  </div>
                  <div style={{gridArea: 'companyWebsite',justifySelf:'start'}}> 
                    <Typography variant='body2' className={classes.label}>
                      Company Website
                    </Typography>
                    <Field
                      name="companyWebsite" as={Input} className={classes.labelInput}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="companyWebsite" />
                  </div>
                  <div style={{gridArea: 'facebookPage',justifySelf:'start'}}> 
                    <Typography variant='body2' className={classes.label}>
                      Facebook Page
                    </Typography>
                    <Field
                      name="facebookPage" as={Input} className={classes.labelInput}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="facebookPage" />
                  </div>
                </div>

                {/* address  */}
                <div className={clsx(classes.locationGrid,classes.card)}>
                    <Typography variant='body1' className={clsx(classes.justifyStart,classes.cardHeading)} style={{gridArea:'addHeading'}}>Address Detail</Typography>
                    <div style={{gridArea:'billingAddress'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Your Company Billing Address
                      </Typography>
                      <Field
                        name="billingAddress" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="billingAddress" />
                    </div>  
                    <div style={{gridArea:'address1'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Address Line 1
                      </Typography>
                      <Field
                        name="address1" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="address1" />
                    </div>  
                    <div style={{gridArea:'address2'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Address Line 2
                      </Typography>
                      <Field
                        name="address2" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="address2" />
                    </div>  
                    <div style={{gridArea:'city'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        City/Town
                      </Typography>
                      <Field
                        name="city" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="city" />
                    </div>  
                    <div style={{gridArea:'region'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        State/Province/Region
                      </Typography>
                      <Field
                        name="region" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="region" />  
                    </div>  
                    <div style={{gridArea:'zipCode'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        ZipCode/PostalCode
                      </Typography>
                      <Field
                        name="zipCode" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="zipCode" />
                    </div>  
                </div>

                {/* Country  */}
                <div className={clsx(classes.countryGrid,classes.card)}>
                    <div style={{gridArea:'country'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Country
                      </Typography>
                      <Field
                        name="country" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="country" />
                    </div>  
                    <div style={{gridArea:'country1'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Country
                      </Typography>
                      <Field
                        name="country1" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="country1" />
                    </div>  
                    <div style={{gridArea:'timezone'}} className={classes.justifyStart}>
                      <Typography variant='body2' className={classes.label}>
                        Date and Time Format
                      </Typography>
                      <Field
                        name="timezone" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="timezone" />
                    </div>  
                </div>

              </Form>
              )}
            </Formik>
          </div>
      }
    </Layout>
  );
};

const mapStateToProps = state => ({
  type:state.auth.user.role.name,
  edit: state.customer.edit,
  loading:state.employee.loading,
  businessId:state.auth.user.cleaner?.business,
  imageUrl:state.employee.company?.logo?.url,
  company:state.employee.company
});

export default connect(
  mapStateToProps,
  { COMPANY_INFO, FETCH_COMPANY_INFO,
    ClEANER_CLEANER,SET_EMPLOYEE_LOADING,UNSET_EMPLOYEE_LOADING }
)(CompanyInfo);
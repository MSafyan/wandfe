import React from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles,useTheme  } from '@material-ui/core/styles';
import {
  Input,
  Button,
  CircularProgress,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';
import clsx from 'clsx';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AddIcon from '@material-ui/icons/Add';
import Selects from '../components/FormsUI/Selects'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';

import Layout from '../components/layout/Index'

import {url} from '../actions/customAxios';
import { connect } from "react-redux";
import { COMPANY_INFO } from "../actions/employeeActions";

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
    "service"
    "schedule"`,
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
    alignItems:'base-line',
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
    gridTemplateColumns:'12% auto 25% 25%',
    gridTemplateRows:"1fr 1fr",
    gridTemplateAreas:`
    "image cleaningService otherEmail otherEmail"
    "image companyPhone companyWebsite facebookPage"`,
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "image cleaningService" 
      "image no"
      "companyPhone companyWebsite"
      "facebookPage otherEmail"`,
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
  serviceGrid:{
    gridArea:'service',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'1fr 1fr 1fr' ,
    gridTemplateAreas:`
    "addHeading addHeading addHeading" 
    "bathroomDuration kitchenDuration bedroomDuration"
    "livingroomDuration ratePerHour no"`,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "addHeading addHeading" 
      "bathroomDuration kitchenDuration"
      "bedroomDuration livingroomDuration"
      "ratePerHour no"`,
    }
  },
  scheduleGrid:{
    gridArea:'service',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'1fr 1fr 1fr' ,
    gridTemplateAreas:`
    "addHeading addHeading addHeading" 
    "available startTime endTime"
    "days ratePerHour no"`,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:`
      "addHeading addHeading" 
      "available days"
      "startTime endTime"`,
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
    fontSize:"18px",
    fontWeight:'bold'
  },
  emailWrapper:{
    width:'70%'
  },
  confirmBtn:{
    background:theme.palette.primary.lightDark,
    width:'70%',
    height:theme.spacing(7),
    padding:'0px',
    color:"white",
  },
  header:{
    justifySelf:'Start',
    paddingBottom:theme.spacing(3),
    fontWeight:"bold"
  },
  justifyStart:{
    textAlign:'left'
  },
}));

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


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
  bathroomDuration: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
  kitchenDuration: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
  bedroomDuration: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
  livingroomDuration: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
  ratePerHour: Yup.number()
    .integer()
    .typeError('Please enter a valid zipCode')
    .required('Required'),
  available:Yup.boolean().required(),
  startTime:Yup.date(),
  endTime:Yup.date(),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  'mon','tue','wed','thue','fri','sat','sun'
];

const allDurations={
  'EveryDay':'EveryDay',
  'EveryWeek':'EveryWeek',
}
const available={
  true:'True',
  false:'False',
}

const CompanyInfo = ({history,type,businessId,COMPANY_INFO,loading,edit,imageUrl}) => {
  const classes = useStyles();
  const theme = useTheme();
  React.useEffect(()=>{
    if(type==='customer'){
			history.push('/createBooking')
		}
    // eslint-disable-next-line
  },[])
  const [personName, setPersonName] = React.useState(['mon']);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      allDurations:'',
      logo:null,
      cleaningService: '',
      otherEmail: '',
      companyPhone: '',
      companyWebsite: '',
      facebookPage: '',
      billingAddress: '',
      address1: '',
      address2: '',
      city: '',
      region: '',
      zipCode: '',
      bathroomDuration:'',
      kitchenDuration:'',
      bedroomDuration:'',
      livingroomDuration:'',
      ratePerHour:'',
      available:true,
      days:[],
      startTime:new Date(),
      endTime:new Date(),
    };

 

    const EDIT_FORM_STATE={
      // cleaningService:customer?.firstName || '',
      // otherEmail:customer?.lastName || '',
      // companyPhone:customer?.email || '',
      // companyWebsite:customer?.contactNo1 || '',
      // facebookPage:customer?.contactNo2 || '',
      // billingAddress:customer?.address || '',
      // city:customer?.DOB || '',
      // region:customer?.DOB || '',
      // address1:customer?.DOB || '',
      // address2:customer?.DOB || '',
    }

    if(!edit){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
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
                console.log('hi')
                debugger;
                if(values.logo){
                  let data=new FormData();
                  data.append('refId',businessId);
                  data.append('field','logo');
                  data.append('ref','business');
                  data.append('files',values.logo);

                await fetch(
                  `${url}/upload/`,
                  {
                    method:'POST',
                    body:data
                  }
                )
                delete values.logo;
              }

              COMPANY_INFO({...values,days:personName})
              }}
              enableReinitialize
            >
              {({ values, handleSubmit,setFieldValue }) => (
              <Form>
                <div className={classes.headerGrid}>
                  <Typography variant='h2' className={classes.header} style={{gridArea:'companyHeading'}}>
                    Company Information  
                  </Typography>
                  <Typography variant='body1' className={clsx(classes.cardHeading,classes.justifyStart)} style={{gridArea:'emailLable'}}>
                    I want to recieve Email  
                  </Typography>
                  <Selects style={{gridArea:'emailDrop'}}
                    name="allDurations"
                    label="All Durations"
                    options={allDurations}
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
                  <div style={{gridArea: 'image'}}> 
                    <img src={imageUrl? imageUrl: `logo512.png`} alt='' width='80%'/>
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
                        onChange={(e)=>{
                          setFieldValue('logo', e.target.files[0])
                        }}
                      />
                    </Button>
                  </div>
                  <div style={{gridArea: 'cleaningService'}}>
                    <Field
                      name="cleaningService" placeholder="cleaning Service" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="cleaningService" />
                  </div>
                  <div style={{gridArea: 'companyPhone'}}>
                    <Field
                      name="companyPhone" placeholder="companyPhone" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="companyPhone" />
                  </div>

                  <div style={{gridArea: 'otherEmail',justifySelf:'start'}} className={classes.emailWrapper} >
                    <Field
                      name="otherEmail" placeholder="otherEmail" fullWidth as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="otherEmail" />
                  </div>
                  <div style={{gridArea: 'companyWebsite',justifySelf:'start'}}> 
                    <Field
                      name="companyWebsite" placeholder="companyWebsite" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="companyWebsite" />
                  </div>
                  <div style={{gridArea: 'facebookPage',justifySelf:'start'}}> 
                    <Field
                      name="facebookPage" placeholder="facebookPage" as={Input}
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="facebookPage" />
                  </div>
                </div>

                {/* address  */}
                <div className={clsx(classes.locationGrid,classes.card)}>
                    <Typography variant='body1' className={clsx(classes.justifyStart,classes.cardHeading)} style={{gridArea:'addHeading'}}>Address Detail</Typography>
                    <div style={{gridArea:'billingAddress'}} className={classes.justifyStart}>
                      <Field
                        name="billingAddress" placeholder="billingAddress" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="billingAddress" />
                    </div>  
                    <div style={{gridArea:'address1'}} className={classes.justifyStart}>
                      <Field
                        name="address1" placeholder="address1" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="address1" />
                    </div>  
                    <div style={{gridArea:'address2'}} className={classes.justifyStart}>
                      <Field
                        name="address2" placeholder="address2" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="address2" />
                    </div>  
                    <div style={{gridArea:'city'}} className={classes.justifyStart}>
                      <Field
                        name="city" placeholder="city" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="city" />
                    </div>  
                    <div style={{gridArea:'region'}} className={classes.justifyStart}>
                      <Field
                        name="region" placeholder="region" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="region" />  
                    </div>  
                    <div style={{gridArea:'zipCode'}} className={classes.justifyStart}>
                      <Field
                        name="zipCode" placeholder="zipCode" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="zipCode" />
                    </div>  
                  </div>

                {/* service  */}
                <div className={clsx(classes.serviceGrid,classes.card)}>
                    <Typography variant='body1' className={clsx(classes.justifyStart,classes.cardHeading)} style={{gridArea:'addHeading'}}>Service Time Detail</Typography>
                    <div style={{gridArea:'bathroomDuration'}} className={classes.justifyStart}>
                      <Field
                        name="bathroomDuration" placeholder="bathroomDuration" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="bathroomDuration" />
                    </div>  
                    <div style={{gridArea:'kitchenDuration'}} className={classes.justifyStart}>
                      <Field
                        name="kitchenDuration" placeholder="kitchenDuration" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="kitchenDuration" />
                    </div>  
                    <div style={{gridArea:'bedroomDuration'}} className={classes.justifyStart}>
                      <Field
                        name="bedroomDuration" placeholder="bedroomDuration" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="bedroomDuration" />
                    </div>  
                    <div style={{gridArea:'livingroomDuration'}} className={classes.justifyStart}>
                      <Field
                        name="livingroomDuration" placeholder="livingroomDuration" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="livingroomDuration" />  
                    </div>  
                    <div style={{gridArea:'ratePerHour'}} className={classes.justifyStart}>
                      <Field
                        name="ratePerHour" placeholder="ratePerHour" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="ratePerHour" />
                    </div>  
                  </div>

                {/* schedule  */}
                <div className={clsx(classes.scheduleGrid,classes.card)}>
                  <Typography variant='body1' className={clsx(classes.justifyStart,classes.cardHeading)} style={{gridArea:'addHeading'}}>Schedule Time Detail</Typography>
                <Selects style={{gridArea:'available'}}
                    name="available"
                    label="available"
                    options={available}
                  />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Days you are available</InputLabel>
                <Select style={{gridArea:'days'}}
                    name="available"
                    label="available"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={personName}
                    onChange={(e)=>{
                      handleChange(e)
                      setFieldValue('city','hi');
                      console.log(e.target.value)
                      return setFieldValue('dayss',e.target.value)
                    }}
                    
                    input={<Input />}
                    MenuProps={MenuProps}
                  >
                  {names.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                      {name}
                    </MenuItem>
                  ))}
                  </Select>
                </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardTimePicker
                        name='startTime'
                        margin="normal"
                        style={{gridArea:'startTime'}}
                        id="time-picker"
                        value={values.startTime}
                        onChange={value => setFieldValue("startTime", value)}
                        label="Time picker"
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                      <KeyboardTimePicker
                        name='endTime'
                        margin="normal"
                        style={{gridArea:'endTime'}}
                        id="time-picker"
                        value={values.endTime}
                        onChange={value => setFieldValue("endTime", value)}
                        label="Time picker"
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                    </MuiPickersUtilsProvider>
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
  imageUrl:state.employee.company?.logo?.url
});

export default connect(
  mapStateToProps,
  { COMPANY_INFO }
)(CompanyInfo);
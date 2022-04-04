import React from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Moment from 'react-moment';
import './date.css';
import {
  Input,
  Button,
  Typography,
	Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';
import Test from '../test'
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
//   KeyboardTimePicker
// } from '@material-ui/pickers';

import clsx from 'clsx'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import Select from '../../components/FormsUI/Selects'

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_ORDER,FETCH_CLEANER } from "../../actions/orderAction";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridWrapper:{
    display:'grid',
    gridTemplateAreas:
    `"heading heading confirmBtn" 
    "serviceDetial serviceDetial dateTime" 
    "type type comment"`,
    gridTemplateColumns:'5fr 4fr 3fr',
    gridTemplateRows:'0.2fr 1fr 1fr',
    gridColumnGap:theme.spacing(2),
    gridColumnRow:theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateRows:'0.2fr 1.3fr 1fr 2fr 1fr',
      gridTemplateColumns:'1fr 1fr',
      gridTemplateAreas:
      `"heading confirmBtn" 
      "serviceDetial serviceDetial"
      "dateTime dateTime" 
      "type type"
      "comment comment"`,
    }
  },
  bold:{
    fontWeight:"bold"
  },
  cardHeading:{
    fontSize:"18px",
    fontWeight:'bold',
    paddingBottom:theme.spacing(1)
  },
  font:{
    textDecoration:"none"
  },
  card:{
    padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
    marginTop:theme.spacing(3),
    borderRadius:theme.spacing(2),
    background:'white',
    gridColumnGap:theme.spacing(2),
    gridRowGap:theme.spacing(3),
    textAlign:'left'
  },
  flex:{
    display:'flex',
    justifyContent:"space-between",
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column"
    }
  },
  flexComp:{
    display:"flex",
    
  },
  emailWrapper:{
    width:'70%'
  },
  justifyStart:{
    justifySelf:'start'
  },
  header:{
    justifySelf:'Start',
    paddingBottom:theme.spacing(3)
  },
  confirmBtn:{
    background:theme.palette.primary.lightDark,
    width:'80%',
    height:theme.spacing(7),
    padding:'0px',
    color:"white",
    paddingRight:theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
  },
  cleanerHeader:{
    paddingBottom:theme.spacing(2)
  },
  dot:{
    height: '8px',
    width: '8px',
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight:'1rem'
  },
  datewrapper:{
    display:'grid',
    gridTemplateAreas:
    `"day month year"`,
  },
  dayChip:{
    marginTop:theme.spacing(3),
    marginBottom:theme.spacing(3),
    color:"white",
    background:theme.palette.primary.dark,
    width:"7rem",
    padding:theme.spacing(0.5),
    textAlign:'center',
    borderRadius:theme.spacing(2)
  },
  field:{
    marginBottom:"1rem",
    [theme.breakpoints.down('sm')]: {
      width:'80vw'
    }
  },
  addressField:{
    width:'66%',
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
  },
  rightFeild:{
    marginRight:"10rem"
  },
  fontLight:{
    color:"#004A6B"
  }
}));

export const types = [
  {label:'Vacation Rental Service',
  value:1.2,
  body:'Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.'},
  {label:'COVID -19 Disinfectant',
  value:1.5,
  body:'Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.'},
  {label:'Standard cleaning',
  value:1,
  body:'Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.'},
  {label:'Deep cleaning',
  value:1.3,
  body:'Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.'},
]


const FORM_VALIDATION = Yup.object({
  // bathroomCount: Yup.number()
  //   .integer()
  //   .typeError('Only number/digit allowed').required(),
	// kitchenCount: Yup.number()
  //   .integer()
  //   .typeError('Only number/digit allowed').required(),
  // bedroomCount:  Yup.number()
  // .integer()
  // .typeError('Only number/digit allowed').required(),
  // address: Yup.string()
  //   .required('Required'),
  // pets: Yup.string()
  //   .required('Required'),
  instructions:Yup.string()
    .required(),
  type:Yup.string()
    .required(),
});

const CompanyInfo = ({NEW_ORDER,FETCH_CLEANER,type,customer,edit,history}) => {
  const classes = useStyles();
  React.useEffect(()=>{
    // if(type==='customer'){
    //   FETCH_CLEANER()
    // }else if(type==='premium' || type==='Authenticated'){
    //   history.push('/orders');
    //   toast.warn('only customers can create Bookings')
    // }


    // eslint-disable-next-line
  },[])

  const pets={
    true:'Yes',
    false:'No',
  }

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      bathroomCount: '4',
      kitchenCount: '4',
      bedroomCount: '4',
      address:'',
      pets: false,
      date:null,
      time:null,
      instructions:"",
			type:'',
    };

    const EDIT_FORM_STATE={
      bathroomCount:customer?.firstName || '',
      kitchenCount:customer?.lastName || '',
      bedroomCount:customer?.email || '',
      pets:customer?.contactNo1 || '',
    }

    if(!edit){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

  return (
    <Layout>
            <Formik
              initialValues={ formState()}
              validationSchema={ FORM_VALIDATION }
              onSubmit={values => {
                // console.log(values);
                // if(edit) {
                //   CUSTOMER_UPDATE(values);
                // }else{

                  NEW_ORDER({values,history})
                  // }
              }}
              enableReinitialize
            >
              {({ values, setFieldValue }) => (
              <Form>
                <div className={classes.gridWrapper}>
                  <Typography variant='h4' style={{gridArea:'heading'}} className={classes.header}>
                    <span className={classes.bold}> Create a Booking - </span>
                    {/* <br/> */}
                    Personal Details
                  </Typography>
                    {/* <NavLink to="/bookingPayment" variant="body2" className={classes.font}> */}
                    <Button style={{gridArea:'confirmBtn'}}
                      className={classes.confirmBtn}
                      type='submit'
                      variant='contained'
                      endIcon={<ArrowRightAltIcon style={{fill:'white'}}/>}
                    >
                      Proceed to Payment
                    </Button>  
                  {/* </NavLink> */}
                  <div style={{gridArea:"serviceDetial"}} className={classes.card}>
                      <Typography variant='body1' className={classes.cardHeading}>
                        Give us some info about house
                      </Typography>
                  <Test />
                      {/* <div className={classes.flex}>
												<div className={classes.field}>
													<Field
														name="bathroomCount" placeholder="bathroomCount" as={Input}
													/>
													<ErrorMessage component='div' style={{color:"red"}} name="bathroomCount" />
												</div> 
												<div className={clsx(classes.field,classes.rightFeild)}>
													<Field
														name="kitchenCount" placeholder="kitchenCount" as={Input}
													/>
													<ErrorMessage component='div' style={{color:"red"}} name="kitchenCount" />
												</div> 
                      </div>
                      <div className={classes.field}>
													<Field
														name="bedroomCount" placeholder="bedroomCount" as={Input}
													/>
													<ErrorMessage component='div' style={{color:"red"}} name="bedroomCount" />
                      </div>
                      <div className={classes.field}>
													<Field className={classes.addressField}
														name="address" placeholder="Address" as={Input}
													/>
													<ErrorMessage component='div' style={{color:"red"}} name="address" />
                      </div>
                      <div className={classes.flex}>
                        <Select
                          name="pets"
                          label="Pets"
                          options={pets}
                        />
											</div>  */}
                  </div>

                  <div style={{gridArea:"dateTime"}} className={classes.card}>
                    <Typography variant='body1' className={classes.cardHeading}>
                      When should the cleaner come
                    </Typography>
                    
                    <Typography variant='body1' className={clsx(classes.cardHeading, classes.timeHeading)}>
                      <span className={classes.dot}></span>
                      PICK A DATE
                    </Typography>
                    {/* <Moment date={values.time} format={'MMM'}/> */}
                    <div className={classes.datewrapper}>
                      <DatePicker
                        inputClass="day-input"
                        value={values.date}
                        format="DD"
                        onChange={value => {
                          
                          setFieldValue("date", value)}}
                      />
                      <DatePicker
                        inputClass="month-input"
                        value={values.date}
                        format="MMM"
                        onChange={value => {
                          setFieldValue("date", value)}}
                      />
                      <DatePicker
                        inputClass="year-input"
                        value={values.date}
                        format="YYYY"
                        onChange={value => {
                          setFieldValue("date", value)}}
                      />
                    </div>
                    <Typography variant='body1' className={classes.dayChip}>
                      <Moment date={values.time} format="dddd"/>
                    </Typography>
                    <Typography variant='body1' className={clsx(classes.cardHeading, classes.timeHeading)}>
                      <span className={classes.dot}></span>
                      PICK A TIME
                    </Typography>
                    <DatePicker
                      inputClass="month-input"
                      disableDayPicker
                      format="HH"
                      value={values.time}
                      onChange={value => {
                        setFieldValue("time", value)}}
                      plugins={[
                        <TimePicker hideSeconds />
                      ]} 
                    />
                    <DatePicker
                      inputClass="month-input"
                      disableDayPicker
                      format="mm"
                      value={values.time}
                      onChange={value => {
                        setFieldValue("time", value)}}
                      plugins={[
                        <TimePicker hideSeconds />
                      ]} 
                    />
                  </div>
                  <div style={{gridArea:"comment"}} className={classes.card}>
                    <Typography variant='body1' className={classes.cardHeading}>Any extra comments you’d like to add?</Typography>
                    <Typography variant='subtitle2'>Write your comments or any additional Notes here</Typography>
                    <div className={classes.field}>
                      <Field
                        name="instructions" placeholder="instructions" as={Input}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="instructions" />
                    </div> 
                  </div>
                  <div style={{gridArea:"type"}} className={classes.card}>
                    <Typography variant='body1' className={classes.cardHeading}>What type of cleaning would  you like</Typography>

                    <FormControl component="fieldset">
                      <RadioGroup name='type' value={values.selectedOption} onChange={(event) => {
                        setFieldValue('type', event.currentTarget.value)
                        console.log(event.currentTarget.label);
                      }}>
                        <div style={{display:'grid',gridTemplateColumns:`repeat(auto-fit,minmax(300px,1fr))`}}>
                          {
                            types.map((val,i)=>{
                              return <div>
                              <FormControlLabel value={val.label} control={<Radio />} label={val.label} />
                              <Typography variant='body2'>
                                {val.body}
                              </Typography>
                            </div>
                            })
                          }
                        </div>
                      </RadioGroup>
										</FormControl>
                  </div>

                </div>
                {/* address  */}
              </Form>
              )}
            </Formik>
    </Layout>
  );
};

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading,
  type:state.auth.user.role.name
});

export default connect(
  mapStateToProps,
  { NEW_ORDER,FETCH_CLEANER }
)(CompanyInfo);
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
import { toast } from "react-toastify";

import Test from '../test'

import clsx from 'clsx'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
      gridTemplateRows:'0fr',
      gridTemplateColumns:'1.2fr 1fr',
      gridTemplateAreas:
      `"heading confirmBtn" 
      "serviceDetial serviceDetial"
      "type type"
      "dateTime dateTime" 
      "comment comment"`,
    }
  },
  bold:{
    fontWeight:"bold"
  },

  cardHeading:{
    color:theme.palette.primary.lightDark,
    paddingBottom:theme.spacing(1),
    fontSize:"1.05vw",
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize:"15px",
    },
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
    alignSelf:'center',
    justifySelf:'Start',
    fontSize:'3.2vw',
    color:theme.palette.primary.lightDark,
    [theme.breakpoints.down('sm')]: {
      fontSize:"4vw",
      textAlign:'left',
      marginTop:"1rem",
      paddingBottom:'0.8rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize:"4.8vw",
    },
  },
  headerFirst:{
    fontWeight:"bold",
    [theme.breakpoints.down('sm')]: {
      display:'block'
    },
  },
  confirmBtn:{
    alignSelf:'center',
    background:theme.palette.primary.lightDark,
    width:'70%',
    padding:'0px',
    color:"white",
    [theme.breakpoints.up('md')]: {
      height:'2.8vw',
      fontSize:'0.7vw',
    },
    [theme.breakpoints.down('md')]: {
      width:'70%',
      height:'35px',
      display:'flex',
      justifyContent:'space-between',
      padding:'0px 20px'
    },
    [theme.breakpoints.down('xs')]: {
      width:'100%',
      fontSize:'2.4vw',
      padding:'0px 10px'
    }
  },
  confirmBtnIcon:{
    fill:'white',
    [theme.breakpoints.down('md')]: {
      fontSize:'2rem',
    },
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
  dateTimeInput:{
    [theme.breakpoints.up('md')]: {
      fontSize:'4vw'
    }
  },
  labelInput:{
    '& .MuiInputBase-input':{
      [theme.breakpoints.up('md')]: {
        fontSize:'0.75vw',
      }
    }
  },
  typeBody:{
    [theme.breakpoints.up('md')]: {
      fontSize:'0.77vw',
      display:'inline-block'
    }
  },
  typeHeading:{
    "& .MuiTypography-body1":{
      fontWeight:'600',
      fontSize:'13px',
      color:theme.palette.primary.lightDark,
      [theme.breakpoints.up('md')]: {
        fontSize:'0.85vw',
        display:'inline-block'
      }
    }
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
  },
  desktopView:{
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
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
  instructions:Yup.string()
    .required(),
  type:Yup.string()
    .required(),
});

const CompanyInfo = ({NEW_ORDER,FETCH_CLEANER,type,customer,edit,history}) => {
  const classes = useStyles();
  React.useEffect(()=>{
    if(type==='customer'){
      FETCH_CLEANER()
    }else if(type==='premium' || type==='Authenticated'){
      history.push('/orders');
      toast.warn('only customers can create Bookings')
    }
    // eslint-disable-next-line
  },[])


  const formState=()=>{
    const INITIAL_FORM_STATE = {
      bathroomCount: '4',
      kitchenCount: '4',
      bedroomCount: '4',
      address:'911 Washington Ave, St. Louise, MO 61101, USA',
      pets: false,
      date:null,
      time:null,
      instructions:"",
			type:'Vacation Rental Service',
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
                    <span className={classes.headerFirst}> Create a Booking</span>
                    <span className={classes.desktopView}>{" - "}</span>
                    Personal Details
                  </Typography>
                    <Button style={{gridArea:'confirmBtn'}}
                      className={classes.confirmBtn}
                      type='submit'
                      variant='contained'
                      endIcon={<ArrowRightAltIcon className={classes.confirmBtnIcon}/>}
                    >
                      Proceed to Payment
                    </Button>  
                  <div style={{gridArea:"serviceDetial"}} className={classes.card}>
                      <Typography variant='body1' className={classes.cardHeading}>
                        What home would you like to be cleaned?
                      </Typography>
                  <Test />
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
                          
                          setFieldValue("date", value.toDate())}}
                      />
                      <DatePicker
                        inputClass="month-input"
                        value={values.date}
                        format="MMM"
                        onChange={value => {
                          setFieldValue("date", value.toDate())}}
                      />
                      <DatePicker
                        inputClass="year-input"
                        value={values.date}
                        format="YYYY"
                        onChange={value => {
                          setFieldValue("date", value.toDate())}
                        }
                      />
                    </div>
                    <Typography variant='body1' className={classes.dayChip}>
                      <Moment date={values.date} format="dddd"/>
                    </Typography>
                    <Typography variant='body1' className={clsx(classes.cardHeading, classes.timeHeading)}>
                      <span className={classes.dot}></span>
                      PICK A TIME
                    </Typography>
                    <DatePicker
                      inputClass="month-input"
                      disableDayPicker
                      format="HH"
                      className={classes.dateTimeInput}
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
                      className={classes.dateTimeInput}
                      value={values.time}
                      onChange={value => {
                        setFieldValue("time", value)}}
                      plugins={[
                        <TimePicker hideSeconds />
                      ]} 
                    />
                  </div>

                  {/* comment  */}
                  <div style={{gridArea:"comment"}} className={classes.card}>
                    <Typography variant='body1' className={classes.cardHeading}>Any extra comments you’d like to add?</Typography>
                    <Typography variant='subtitle2'>Write your comments or any additional Notes here</Typography>
                    <div className={classes.field}>
                      <Field
                        name="instructions" placeholder="instructions" as={Input} className={classes.labelInput}
                      />
                      <ErrorMessage component='div' style={{color:"red"}} name="instructions" />
                    </div> 
                  </div>

                  {/* type section */}
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
                              return <div key={i}>
                              <FormControlLabel value={val.label} className={classes.typeHeading} control={<Radio />} label={val.label} />
                              <Typography variant='body2' className={classes.typeBody}>
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
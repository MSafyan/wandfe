import React from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  Button,
  Typography,
	Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

import clsx from 'clsx'
import { NavLink } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Select from '../../components/FormsUI/Selects'

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_ORDER } from "../../actions/orderAction";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridWrapper:{
    display:'grid',
    gridTemplateAreas:`"heading heading confirmBtn" "serviceDetial serviceDetial dateTime" "type type comment"`,
    gridTemplateColumns:'5fr 4fr 3fr',
    gridTemplateRows:'0.4fr 1fr 1fr',
    gridColumnGap:theme.spacing(2),
    gridColumnRow:theme.spacing(2),
  },
  bold:{
    fontWeight:"bold"
  },
  cardHeading:{
    fontSize:"18px",
    fontWeight:'bold'
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
    justifyContent:"space-between"
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
    fontSize:"1.3rem",
    color:"white",
  },
  cleanerHeader:{
    paddingBottom:theme.spacing(2)
  },
  field:{
    marginBottom:"1rem"
  },
  rightFeild:{
    marginRight:"10rem"
  },
  fontLight:{
    color:"#004A6B"
  }
}));


const FORM_VALIDATION = Yup.object({
  date: new Date('12-12-2022'),
  bathroomCount: Yup.number()
    .integer()
    .typeError('Only number/digit allowed').required(),
	kitchenCount: Yup.number()
    .integer()
    .typeError('Only number/digit allowed').required(),
  bedroomCount:  Yup.number()
  .integer()
  .typeError('Only number/digit allowed').required(),
  address: Yup.string()
    .required('Required'),
  pets: Yup.string()
    .required('Required'),
  instructions:Yup.string()
    .required(),
  type:Yup.string()
    .required(),
});

const CompanyInfo = ({NEW_ORDER,CUSTOMER_UPDATE,customer,edit,history}) => {
  const classes = useStyles();
  React.useEffect(()=>{

    // eslint-disable-next-line
  },[])

  const pets={
    true:'Yes',
    false:'No',
  }

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      bathroomCount: '',
      kitchenCount: '',
      bedroomCount: '',
      address:'',
      pets: '',
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
                console.log(values);
                if(edit) {
                  CUSTOMER_UPDATE(values);
                }else{

                  NEW_ORDER({values,history})
                  }
              }}
              enableReinitialize
            >
              {({ values, setFieldValue }) => (
              <Form>
                <div className={classes.gridWrapper}>
                  <Typography variant='h4' style={{gridArea:'heading'}} className={classes.header}>
                    <span className={classes.bold}> Create a Booking - </span>
                    Personal Details
                  </Typography>
                    {/* <NavLink to="/bookingPayment" variant="body2" className={classes.font}> */}
                    <Button style={{gridArea:'confirmBtn'}}
                      className={classes.confirmBtn}
                      type='submit'
                      variant='contained'
                      endIcon={<ArrowRightAltIcon style={{fill:'white'}}/>}
                    >
                      Confirm Booking  
                    </Button>  
                  {/* </NavLink> */}
                  <div style={{gridArea:"serviceDetial"}} className={classes.card}>
                      <Typography variant='body1' className={classes.cardHeading}>
                        Give us some info about house
                      </Typography>
                      <div className={classes.flex}>
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
													<Field style={{width:"66%"}}
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
											</div> 
                  </div>

                  <div style={{gridArea:"dateTime"}} className={classes.card}>
                    <Typography variant='body1' className={classes.cardHeading}>
                      When should the cleaner come
                    </Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        name='date'
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={values.date}
                        onChange={value => setFieldValue("date", value)}
                        label="Date picker"
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <KeyboardTimePicker
                        name='time'
                        margin="normal"
                        id="time-picker"
                        value={values.time}
                        onChange={value => setFieldValue("time", value)}
                        label="Time picker"
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                    </MuiPickersUtilsProvider>
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
                        console.log(values);
                      }}>
                        <div style={{display:'grid',gridTemplateColumns:`repeat(auto-fit,minmax(350px,1fr))`}}>
                          <div>
                            <FormControlLabel value={"Vacation Rental Service"} control={<Radio />} label="Vacation Rental Service" />
                            <Typography variant='body2'>
                              Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.
                            </Typography>
                          </div>
                          <div>
                            <FormControlLabel value={"COVID -19 Disinfectant"} control={<Radio />} label="COVID -19 Disinfectant" />
                            <Typography variant='body2'>
                              Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.
                            </Typography>
                          </div>
                          <div>
                            <FormControlLabel value={"Standard cleaning"} control={<Radio />} label="Standard cleaning" />
                            <Typography variant='body2'>
                              Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.
                            </Typography>
                          </div>
                          <div>
                            <FormControlLabel value={"Deep cleaning"} control={<Radio />} label="Deep cleaning" />
                            <Typography variant='body2'>
                              Lorem ipsum dolor sit amet, pellentesque quam dolor aenean ullamcorper lorem, auctor accumsan magna nam nunc.
                            </Typography>
                          </div>
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
  success:state.customer.success,
});

export default connect(
  mapStateToProps,
  { NEW_ORDER }
)(CompanyInfo);
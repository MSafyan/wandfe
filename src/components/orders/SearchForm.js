import React from 'react';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
  Button,
} from '@material-ui/core';
import Select from '../../components/FormsUI/Selects';
// import Button from '../../components/FormsUI/Buttons';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom'

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { connect } from "react-redux";
import { ORDER_FIND } from "../../actions/orderAction";
const useStyles = makeStyles((theme) => ({
  formWrapper1: {
    background:'white',
    padding:theme.spacing(2),
    borderTopLeftRadius:'13%',
    borderTopRightRadius:'13%',
    display:"grid",
    gridTemplateAreas:
    `"status duration date breakdown confirmBtn"`,
    gridTemplateColumns:'1fr 1fr 1fr 1fr 1.2fr',
    gridColumnGap:theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas:
    `"status duration"
      "date confirmBtn"
      "breakdown no"`,
    gridTemplateColumns:'1fr 1fr',
    gridGap:theme.spacing(2)
    }

  },
  select:{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    },
  },
  confirmBtn:{
    background:theme.palette.primary.lightDark,
    width:'70%',
    height:theme.spacing(7),
    padding:'0px',
    color:"white",
    gridArea:'confirmBtn',
    textAlign:'right',
    fontSize:theme.spacing(1.8),
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
  },
  dateField:{
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 4px 12px',
    height:"-webkit-fill-available",
    paddingTop:theme.spacing(1.2),
    '& .MuiFormControl-marginNormal':{
      margin:'0px'
    },
    '& .MuiInputLabel-animated':{
      top:'-40%',
      paddingLeft:'5px'
    },
    '& .MuiInput-formControl':{
      marginTop:'0px'
    },
    "& .MuiInput-underline::before":{
      border: "none",
    }
  },
  breakdownBtn:{
    gridArea:'breakdown',
    fontSize:theme.spacing(1.7),
    bottom:'-20%',
    textDecoration:'underline',
  },
  font:{
    textDecoration:'none'
  },
  flexEnd:{
    alignItems:'flex-end'
  }
}));

const allStatus={
  'ACTIVE':'ACTIVE',
  'COMPLETED':'COMPLETED'
}
const allDurations={
  '60mints':'60mints',
  '120mints':'120mints',
}


const FORM_VALIDATION = Yup.object().shape({
  allStatus: Yup.string()
    .required('Required'),
  allDurations:Yup.string().required('enter state name'),
});

const SearchForm = ({ORDER_FIND,loading}) => {

  const classes = useStyles();

    const INITIAL_FORM_STATE = {
      allStatus: '',
      allDurations: '',
      date:null
    };

  return (
    <>
            <Formik
              initialValues={ INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
                ORDER_FIND(values);
              }}
            >
              {({ values, errors, handleSubmit, setFieldValue }) => (
                <Form>
                <div className={classes.formWrapper1}>
                  <div style={{gridArea:"status"}}>
                    <Select
                      name="allStatus"
                      label="All Status"
                      options={allStatus}
                      className={classes.select}
                    />
                  </div>
                
                  <div style={{gridArea:"duration"}}>
                    <Select
                      name="allDurations"
                      label="All Durations"
                      options={allDurations}
                      className={classes.select}
                    />
                  </div>
                  <div style={{gridArea:"date"}} className={classes.dateField}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        label="Select Date"
                        name='date'
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        // label="Date picker inline"
                        value={values.date}
                        onChange={value => setFieldValue("date", value)}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>

                  <div style={{gridArea:"breakdown",textAlign:'start'}} >
                      <Button
                        disabled={loading}
                        type="submit"
                        className={classes.breakdownBtn}
                        startIcon={
                          loading ? (
                            <CircularProgress size="1rem" />
                          ) : null
                        }
                      >
                      {loading ? 'Searching' : 'see Breakdown'}
                    </Button>
                  </div>
                  <div>
                    <NavLink to="/createBooking" variant="body2" className={classes.font}>
                      <Button
                        variant="contained"
                        className={classes.confirmBtn}
                        color="primary"
                        endIcon={<AddIcon style={{fill:'white'}}/>}
                      >
                        Add Appointment
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </Form>
              )}
            </Formik>
    </>
  );
};

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading
});

export default connect(
  mapStateToProps,
  { ORDER_FIND  }
)(SearchForm);
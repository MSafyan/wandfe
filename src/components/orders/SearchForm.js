import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  CircularProgress,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
  formWrapper: {
    background:'white',
    padding:theme.spacing(2),
    borderTopLeftRadius:'13%',
    borderTopRightRadius:'13%',
    alignItems:'flex-end'
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
      <Grid container className={classes.formWrapper}>
        {/* <Grid item container md={9}> */}
            <Formik
              initialValues={ INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
                ORDER_FIND(values);
              }}
            >
              {({ values, errors, handleSubmit, setFieldValue }) => (
              // <Form>
                <Grid container item md={9} spacing={3} className={classes.flexEnd}>

                  <Grid item xs={6} md={3}>
                    <Select
                      name="allStatus"
                      label="All Status"
                      options={allStatus}
                    />
                  </Grid>
                
                  <Grid item xs={6} md={3}>
                    <Select
                      name="allDurations"
                      label="All Durations"
                      options={allDurations}
                    />
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
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
                  </Grid>

                  <Grid item xs={6} md={3}>
                      <Button
                        disabled={loading}
                        type="submit"
                        variant="outlined"
                        onClick={()=>{handleSubmit()}}
                        startIcon={
                          loading ? (
                            <CircularProgress size="1rem" />
                          ) : (<SearchIcon  size="1rem"/>)
                        }
                      >
                      {loading ? 'Searching' : 'Search'}
                    </Button>
                  </Grid>
                </Grid>
              // </Form>
              )}
            </Formik>
        {/* </Grid> */}
        <Grid item md={3}>
          <NavLink to="/createBooking" variant="body2" className={classes.font}>
            <Button
              variant="contained"
              className={classes.confirmBtn}
              color="primary"
              endIcon={<AddIcon />}
            >
              Add Appointment
            </Button>
          </NavLink>
        </Grid>
      </Grid>

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
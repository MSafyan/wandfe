import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  CircularProgress,
  Button,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Select from '../../components/FormsUI/Selects';
// import Button from '../../components/FormsUI/Buttons';
import AddIcon from '@material-ui/icons/Add';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
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
  appointBtn:{
    color:'white'
  },
  flexEnd:{
    alignItems:'flex-end'
  }
}));

const allStatus={
  'OrderId':'OrderId',
  'customerId':'customerId',
  'vehicleRegNo':'vehicleRegNo'
}
const allDurations={
  'OrderId':'OrderId',
  'customerId':'customerId',
  'vehicleRegNo':'vehicleRegNo'
}


const FORM_VALIDATION = Yup.object().shape({
  searchTerm: Yup.string()
    .required('Required'),
  searchBy:Yup.string().required('enter state name'),
});

const SearchForm = ({ORDER_FIND,loading}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

    const INITIAL_FORM_STATE = {
      searchTerm: '',
      searchBy: '',
    };

  return (
    <>
      <Grid container className={classes.formWrapper}>
        {/* <Grid item container md={9}> */}
            <Formik
              initialValues={ INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                ORDER_FIND(values);
              }}
            >
              {({ values, errors, isSubmitting, isValid }) => (
              // <Form>
                <Grid container item md={9} spacing={3} className={classes.flexEnd}>

                  <Grid item xs={12} md={3}>
                    <Select
                      name="allStatus"
                      label="All Status"
                      options={allStatus}
                    />
                  </Grid>
                
                  <Grid item xs={12} md={3}>
                    <Select
                      name="allDurations"
                      label="All Durations"
                      options={allDurations}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        // label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>

                  <Grid item xs={12} md={3}>
                      <Button
                      disabled={loading}
                      type="submit"
                      variant="outlined"
                      
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
          <Button
            variant="contained"
            className={classes.appointBtn}
            color="primary"
            endIcon={<AddIcon />}
          >
            Add Appointment
          </Button>
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
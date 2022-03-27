import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/_dashboard/Header';
import HeroSection from '../components/_dashboard/HeroSection';
import HowWork from '../components/_dashboard/HowWork';
import BluishOverlay from '../components/_dashboard/BluishOverlay';
import Payment from '../components/_dashboard/payment';
import SuperEasy from '../components/_dashboard/SuperEasy';
import GetInApp from '../components/_dashboard/GetInApp';
import Footer from '../components/_dashboard/Footer';
import {connect} from 'react-redux';



const useStyles = makeStyles((theme) => ({
  homepageContainer: {
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (<div className={classes.homepageContainer}>
    <Header/>
    <HeroSection/>
    <HowWork/>
    <BluishOverlay/>
    <Payment/>
    <SuperEasy/>
    <GetInApp/>
    <Footer/>
  </div>
  );
}

const mapStateToProps = state => ({
  loading:state.order.loading
});


export default connect(
  mapStateToProps,
  {}
)(Dashboard);
import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import HowWork from '../components/Home/HowWork';
import BluishOverlay from '../components/Home/BluishOverlay';
import Payment from '../components/Home/payment';
import SuperEasy from '../components/Home/SuperEasy';
import GetInApp from '../components/Home/GetInApp';
import Footer from '../components/Home/Footer';
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
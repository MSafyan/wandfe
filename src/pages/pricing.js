import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import HeroSection  from '../components/pricing/HeroSection';
import Plans from '../components/pricing/Plans'
import SuperEasy from '../components/_dashboard/SuperEasy'
import Footer from '../components/_dashboard/Footer';

const Pricing = () => {

  return (
    <div>
      <HeroSection/>
      <Plans/>
      <SuperEasy/>
      <Footer/>
    </div>
  )
}

export default Pricing
import React from 'react'

import HeroSection  from '../components/pricing/HeroSection';
import Plans from '../components/pricing/Plans'
import SuperEasy from '../components/Home/SuperEasy'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer';

const Pricing = ({history}) => {

  return (
    <div>
      <Header history={history}/>
      <HeroSection/>
      <Plans/>
      <SuperEasy/>
      <Footer/>
    </div>
  )
}

export default Pricing
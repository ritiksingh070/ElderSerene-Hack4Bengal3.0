import React from 'react'
import Hero from '../../components/hero/Hero'
import WhyChooseUs from '../../components/why-choose-us/WhyChooseUs'
import Service from '../../components/services/Service'
import Appointment from '../appointment/Appointment'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Appointment/>
      <WhyChooseUs/>
      <Service/>

    </div>
  )
}

export default Home

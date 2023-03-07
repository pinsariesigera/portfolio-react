import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroall from '../components/Heroall';
import Myself from '../components/Myself';


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroall heading="ABOUT ME" text="I am currently studying Information Systems at University of Colombo school of computing. This portfolio was made for the assigment."/>
      <Myself />
      <Footer />
    </div>
  )
}

export default About
import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroall from '../components/Heroall';
import Price from '../components/Price';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroall heading="My PROJECTS" text="LOL.These are not my work." />
      <Price />
      <Footer />
    </div>
    
  )
}

export default Project
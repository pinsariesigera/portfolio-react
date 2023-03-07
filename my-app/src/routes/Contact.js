import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroall from '../components/Heroall';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroall heading="CONTACT ME" text="Please do reach out to me." />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
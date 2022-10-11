import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import Hero from './../components/Hero';
import Work from './../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Footer/>
      </div>
  )
}

export default Home
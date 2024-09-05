/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eye from './Components/Eye'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' lg:min-h-screen w-full bg-[#F1F1F1] overflow-hidden text-black'>
      <NavBar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
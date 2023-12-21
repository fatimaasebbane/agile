import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Footer from '../components/footer'
import Collaboration from '../components/Collaboration'
import Topics from '../components/Topics'

function home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Collaboration/>
        <Topics/>
        <br/><br/><br/><br/>
        <Footer/>
    </div>
  )
}

export default home
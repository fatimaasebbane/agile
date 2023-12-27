import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Footer from '../components/footer'
import Collaboration from '../components/Collaboration'
import Topics from '../components/Topics'
import About from '../components/About'
import Livre from '../components/Livre'
import Speakers from '../components/Speakers'

function home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <About/>
        <Livre/>
        <Speakers/>
        <Collaboration/>
        <Topics/>
        <br/><br/><br/><br/>
        <Footer/>
    </div>
  )
}

export default home
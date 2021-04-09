import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Carrusel'
import HeroHome from '../components/Hero'
import ContentHome from '../components/ContentHome'

class Home extends React.Component {
  
  render() {
 
    return (
    <div>
            <Header />
            <HeroHome />
            <Slider /> 
            <Footer />
    </div>
    )
  }
}

export default Home
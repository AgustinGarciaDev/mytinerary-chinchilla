import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Carrusel'
import HeroHome from '../components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentHome from '../components/ContentHome'

class Home extends React.Component {
  
  render() {
 
    return (
    <>
            <Header />
            <HeroHome />
            <Slider /> 
            <Footer />
    </>
    )
  }
}

export default Home
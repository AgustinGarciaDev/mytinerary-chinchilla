import React from 'react'
import Slider from '../components/Carrusel'
import HeroHome from '../components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
  
  render() {
 
    return (
    <>
            <HeroHome />
            <Slider /> 
    </>
    )
  }
}

export default Home
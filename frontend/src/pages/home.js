import React from 'react'
import Slider from '../components/Carrusel'
import HeroHome from '../components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
  
  componentDidMount() {
          window.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
  }
  
    /* Hola */
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
import React from 'react'
import Slider from '../components/Carrusel'
import HeroHome from '../components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
  
  componentDidMount() {
          window.scroll({
           top: 0,
           behavior: 'smooth'
          });
  }
  
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

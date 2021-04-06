import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Slider from '../components/carrusel'

class Home extends React.Component {
  
  render() {
     /*  const { items } = this.state; */
    return (
    <div>
            <Header />
            <Slider />
            <Footer />
    </div>
    )
  }
}

export default Home
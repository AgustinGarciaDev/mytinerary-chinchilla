import React from 'react'
import Carousel from 'react-elastic-carousel';


class Slider extends React.Component {
  
  render() {

    return (
  
       <Carousel>
                <div className="bloquePrincipal">
                     <div className="cuadro"></div>
                     <div className="cuadro2">2</div>
                     <div className="cuadro3">3</div>
                     <div className="cuadro4">4</div>
                </div>
                <div className="bloquePrincipal">
                        <div className="cuadro">5</div>
                        <div className="cuadro">6</div>
                        <div className="cuadro">7</div>
                        <div className="cuadro">8</div>
                 </div>
      </Carousel>
     
    )
  }
}

export default Slider
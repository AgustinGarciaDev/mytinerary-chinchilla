import React from 'react'
import Carousel from 'react-elastic-carousel';
 import Slide from './Slide' 

class Slider extends React.Component {
  
  /* Array de arrray de objetos */
  ciudades = [
    
     [
           {id: 1, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 2, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 3, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 4, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
      ]
    ,
    
    [
         {id: 5, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 6, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 7, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 8, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
      ]
    ,

     [
          {id: 9, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 10, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 11, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 12, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
      ],
    
       [
           {id: 1, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 2, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 3, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
           {id: 4, url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-david-geib-3220846-scaled.jpg'},
      ]

  ]
     
  render() {


    return (
  
      <main>
        <Carousel enableAutoPlay autoPlaySpeed={4000} >
          {this.ciudades.map(item => <div className="bloquePrincipal"> <Slide ciudades={item} /></div> )}
        </Carousel> 
        
       </main>
     
    )
  }
}

export default Slider
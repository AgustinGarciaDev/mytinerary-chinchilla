import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import City from '../components/City';

const Cities = () => {

 const ciudades = [
    
           { id: 1, nombre: "Paris", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-thorsten-technoman-338515-scaled.jpg', slide:"A"},
           {id: 2,nombre:"Queenstown" ,url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-ketan-kumawat-724963-scaled.jpg'},
           {id: 3, nombre:"Rio de Janeiro" , url: 'http://baravdg.com/wp-content/uploads/2021/04/rio-de-janeiro-1963744_1920.jpg'},
           {id: 4, nombre:"San Francisco" , url: 'http://baravdg.com/wp-content/uploads/2021/04/san-francisco-1116316_1280.jpg'},
   
    
           {id: 5, nombre:"Osaka", url: 'http://baravdg.com/wp-content/uploads/2021/04/Paisaje_-9.png' ,slide:"B"},
           {id: 6, nombre:"Bruges", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-barb-duggan-3633115-scaled.jpg'},
           {id: 7, nombre:"Florence", url: 'http://baravdg.com/wp-content/uploads/2021/04/Paisaje_-6.png'},
           {id: 8, nombre:"Istanbul", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-caner-cankisi-3999943-scaled.jpg'},
    
    
           {id: 9, nombre:"Rome", url: 'http://baravdg.com/wp-content/uploads/2021/04/rome-4087275_1920.jpg', slide:"C"},
           {id: 10, nombre:"Seville", url: 'http://baravdg.com/wp-content/uploads/2021/04/Diseno-sin-titulo-2.png'},
           {id: 11, nombre:"Amsterdam", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-harvey-1790573-scaled.jpg'},
             { id: 12, nombre: "London", url: 'http://baravdg.com/wp-content/uploads/2021/04/pexels-pixabay-460672.jpg' },
     
  ]
 

    
    return (

     <>
            <h1>Cities</h1>
            <label htmlFor="">
                 <input type="text"/>
            </label>

            {ciudades.map(ciudad => <div className="ciudad"> <City ciudad={ciudad} /> </div>)}

        
             
            
    </>

    )
}

export default Cities
import React, { useEffect, useState } from 'react'
import CardCities from '../components/CardCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/cities.css';
import axios from 'axios';


const Cities = () => {

  const [listaCiudades, setListaCiudades] = useState ([]) //Trae por api
  const [ciudades, setCiudades] = useState([]) // Guardo el filtrado
  

  /* LLamo a la API */
  useEffect(() => {
        
    axios.get('http://localhost:5000/api/ciudades')
    .then(response => setListaCiudades([...response.data.respuesta]))  
  },[])



  useEffect(() => {
      
    setCiudades([...listaCiudades])
  } ,[listaCiudades])


  const buscandoCiudad = (e) => {
  
    const valorInput = e.target.value.trim()
    const ciudadBuscada = listaCiudades.filter(ciudad => valorInput.toLowerCase() === ciudad.nombre.slice(0,valorInput.length).toLowerCase())
  
   setCiudades([...ciudadBuscada])

  }

  

    return (

     <>
            <h1>Cities</h1>
            <label htmlFor="">
                <input  onChange={buscandoCiudad} type="text"/>
            </label>

        { 
         
       ciudades.length === 0
       ? <h1>No existe</h1>
       : ciudades.map(ciudad => <div className="ciudad"> <CardCities ciudad={ciudad} /> </div>)
       
          
        }
        

          
    </>

    )
}

export default Cities
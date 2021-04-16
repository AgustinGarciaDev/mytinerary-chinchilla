import React, { useEffect, useState } from 'react'
import CardCities from '../components/CardCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/cities.css';
import axios from 'axios';


const Cities = () => {


  const [loading, setLoading] = useState (true)
  const [listaCiudades, setListaCiudades] = useState ([]) //Trae por api
  const [ciudades, setCiudades] = useState([]) // Guardo el filtrado
  

  /* LLamo a la API */
  useEffect(() => {
        
    axios.get('http://localhost:5000/api/ciudades')
      .then(response => setListaCiudades([...response.data.respuesta]))
      .catch(error => this.props.history.push('/error'))
    
  
    
  },[])



  useEffect(() => {
      
    setCiudades([...listaCiudades])
      setLoading(false)
  } ,[listaCiudades])


  const buscandoCiudad = (e) => {
  
    const valorInput = e.target.value.trim()
    const ciudadBuscada = listaCiudades.filter(ciudad => valorInput.toLowerCase() === ciudad.nombre.slice(0,valorInput.length).toLowerCase())

    setCiudades([...ciudadBuscada])

  }


  
   return (
      <>
        <section className="heroSearch">
          <h1 className="tituloBuscador" >Search cities</h1>
          <form className="formBuscador" action="">
            <label htmlFor="">
              <input className="inputSearch" onChange={buscandoCiudad} type="text" />
            </label>
          </form>
          <video id="video_hero" loop autoPlay muted>
            <source src="http://baravdg.com/wp-content/uploads/2021/04/Pexels-Videos-2252797-1.mp4" type="video/mp4" />
          </video>

        </section>
        {
          <main>
            
           {
             
              listaCiudades.length === 0
              ? <h1>Cargando</h1>
              : ciudades.length === 0 
              ? <h1>No se encontro la ciudad</h1>
              : ciudades.map(ciudad => <div className="ciudad" key={ciudad._id} > <CardCities ciudad={ciudad} /> </div>) 
           
           }
          </main>
        }
          
      </>
    )

    
}

export default Cities
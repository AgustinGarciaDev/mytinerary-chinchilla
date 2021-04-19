import React, { useEffect, useState } from 'react'
import CardCities from '../components/CardCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/cities.css';
import axios from 'axios';
import { Link } from "react-router-dom";


const Cities = (props) => {



  const [listaCiudades, setListaCiudades] = useState ([]) //Trae por api
  const [ciudades, setCiudades] = useState([]) // Guardo el filtrado
  

  /* LLamo a la API */
  useEffect(() => {
        
    axios.get('http://localhost:4000/api/ciudades')
      .then(response =>  setListaCiudades([...response.data.respuesta]))
      .catch(error => props.history.push('/errorserver'))
      
    
  }, [])
  

  useEffect(() => {
        setCiudades([...listaCiudades])
        window.scroll({
         top: 400,
         left: 100,
         behavior: 'smooth'
});
  },[listaCiudades])
  


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
                    <div id="search-wrapper">
                          <label htmlFor="">
                              <i className="fa fa-search"></i>
                              <input  type="search"  placeholder=" Search..."  className="inputSearch" onChange={buscandoCiudad} />
                        </label>
                      </div>
                </form>
                <video id="video_hero" loop autoPlay muted>
                     <source src="https://myhadministracionedificios.com/wp-content/uploads/2021/04/production-ID_4507988-1-1.mp4" type="video/mp4" />
                </video>
        </section>
        <main className="contenedorImagenes">
           {
                  listaCiudades.length === 0
                  ? <div className="pageLoader">
                        <lottie-player className="loader" style={{ width: "40vw" , margin:"5vw" }} src="https://assets1.lottiefiles.com/packages/lf20_tVT3vG.json"  speed="1"  loop  autoplay></lottie-player>
                    </div>
                  :ciudades.length === 0 
                  ? <div className="errorBusqueda">
                        <h2>The city you were looking for was not found</h2>
                        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_fyqtse3p.json" style={{ width: "20vw" }}  speed="1" loop  autoplay></lottie-player>   
                    </div>
                  : ciudades.map(ciudad => <div className="ciudad" key={ciudad._id} > <CardCities ciudad={ciudad} /> </div>)  
         }

       </main>
          <div className="contenedorBotones">
           
         <Link to="/">
            <div className="btn-cities spaceBtn">
               <i className="fas fa-home"></i>
               <p>Go back home</p>
           </div>
         </Link>
         
        </div>

          
      </>
    )

    
}

export default Cities
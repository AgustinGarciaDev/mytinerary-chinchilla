import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const City = (props) => {
    
    /* Falta colocar el useEstate para setear  */

    const [idCiudad, setIdCiudad ] = useState([])

    useEffect(() => {
        
        window.scroll(0,0)
        const idCiudadRuta = props.match.params.id

        axios.get('http://localhost:5000/api/ciudad/' + idCiudadRuta)
            .then(response => setIdCiudad([response.data.respuesta]))
            .catch(error => props.history.push('/errorServer'))
    }, [])
    
    return (  
     <>
    
          
            <main>
                <div className="contenedorHeroImg">
                        {idCiudad.map(ciudad =>{ 
               
                    return (
                          <div key={ciudad.nombre} className="imgCity" style={{ backgroundImage: `url("${ciudad.url}")` }}>
                        
                            <div className="ContenedortextoCiudad">
                                <h1 className="textoCiudad" >{ciudad.nombre}</h1>
                                <div className="contenedorBotones">
                                    <Link to="/">
                                        <div className="btn-city spaceBtn">
                                            <i className="fas fa-home"></i>
                                            <p>Go back home</p>
                                        </div>
                                    </Link>
                                    <Link to="/Cities">
                                         <div className="btn-city">
                                           <i className="fas fa-map"></i>
                                            <p>Go back cities</p>
                                        </div>
                                    </Link>
                                    
                               </div>
                            </div>
                          </div>
                   )
             })
            }
             </div>
            </main>
    </>        
    )
}

export default City
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const City = (props) => {

    
    
    const [idCiudad, setIdCiudad] = useState({ ciudades: null, loading: true })
    
    useEffect(() => {   
        window.scroll(0,0)
        const idCiudadRuta = props.match.params.id

        axios.get('http://localhost:4000/api/ciudad/' + idCiudadRuta)
            .then(response => setIdCiudad({ ciudades: response.data.respuesta, loading: false}))
            .catch(error => props.history.push('/errorserver'))
    }, [props])
    
    const {  loading } = idCiudad

    if (loading) {
        
        return <h1>Loading</h1>
    }

    const { ciudades: { nombre, url } } = idCiudad
    

    return (
     <>
        <main className= "contenedorCities">
                
         <div className="contenedorHeroImg">        
               <div className="imgCity" style={{ backgroundImage: `url("${url}")` }}>
                        
                  <div className="ContenedortextoCiudad">
                                <h1 className="textoCiudad" >{nombre}</h1>
                                <div className="contenedorBotones">
                                    <Link to="/Cities">
                                         <div className="btn-city spaceBtn">
                                           <i className="fas fa-map"></i>
                                            <p>Go back cities</p>
                                        </div>
                                    </Link>
                                      <Link to="/">
                                        <div className="btn-city ">
                                            <i className="fas fa-home"></i>
                                            <p>Go back home</p>
                                        </div>
                                    </Link>      
                               </div>
                            </div>
                          </div>         
                </div>

        </main>
    </>        
    )
}

export default City
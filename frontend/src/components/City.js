import axios from "axios"
import React, { useEffect, useState } from 'react'

const City = (props) => {
    
    /* Falta colocar el useEstate para setear  */

    const [idCiudad, setIdCiudad ] = useState([])

    useEffect(() => {
        
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
                        
                            <h1 className="textoCiudad" >{ciudad.nombre}</h1>
                
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
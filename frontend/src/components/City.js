import axios from "axios"
import React, { useEffect, useState } from 'react'

const City = (props) => {
    
    /* Falta colocar el useEstate para setear  */

    const [idCiudad, setIdCiudad ] = useState([])

    useEffect(() => {
        
        const idCiudadRuta = props.match.params.id

        axios.get('http://localhost:5000/api/ciudad/' + idCiudadRuta)
            .then(response => setIdCiudad([...response.data.respuesta]))
    }, [])
    
    return (  
     <>
            <h1>hola </h1>
           {idCiudad.map(ciudad => <h1>{ciudad.nombre}</h1>)}  
    </>        
    )
}

export default City
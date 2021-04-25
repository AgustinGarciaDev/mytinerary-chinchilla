import React, { useEffect , useState} from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import citiesActions from '../Redux/Action/citiesActions'
import itineraryActions from '../Redux/Action/itineraryActions'
import CardItinerary from '../components/CardItinerary'
import ItineryNotFound from '../components/ItineraryNotFound'


import '../style/city.css'

const City = (props) => {

    const [idCiudad, setIdCiudad] = useState({ ciudad: null, loading: true })
  
    useEffect(() => {   
        window.scroll(0,0)
        const idCiudadRuta = props.match.params.id
        
        if (!(props.buscarCiudad.length === 0)) {
             let ciudadEncontrada = props.buscarCiudad.find(ciudad => ciudad._id === idCiudadRuta)
        setIdCiudad({ ciudad: ciudadEncontrada, loading: false })
        } else {
            
           props.history.push('/cities')
            /* props.encontrarCiudad(idCiudadRuta) */
           /*  setIdCiudad({ ciudad: props.ciudadBuscada,  loading: false }) */
        }

    
     
       props.obtenerItineraries(idCiudadRuta)
       
              
    }, [])


     const { loading, ciudad } = idCiudad

    if (loading) {
        
        return <h1>Loading</h1>
    }

    return (
     <>
      <main className="contenedorCities">        
      <div className="contenedorHeroImg">        
               <div className="imgCity" style={{ backgroundImage:`url("${ciudad.url}")` }}>
                        
                  <div className="ContenedortextoCiudad">
                                <h1 className="textoCiudad" >{ciudad.nombre}</h1>
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
                <div className="grupoItineraries">
                    {
                         props.mostrarItineraries.length === 0
                        ? <ItineryNotFound />
                        : props.mostrarItineraries.map(itinerary => <CardItinerary key={itinerary._id} itinerary={itinerary}/> )
                    
                    }
             </div> 
        </main>
    </>        
    )
}


const mapStateToProps = state => {


    return {
        buscarCiudad: state.cities.todasCiudades,
        mostrarItineraries: state.itinerary.itinerary,
        ciudadBuscada: state.cities.ciudadBuscada
    }

}

const mapDispatchToProps = {

    obtenerItineraries: itineraryActions.obtenerItineraries,
    cargarCiudades: citiesActions.cargarCiudad,
    encontrarCiudad: citiesActions.encontrarCiudad
}



export default connect (mapStateToProps, mapDispatchToProps)(City)
import React, { useEffect} from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import citiesActions from '../Redux/Action/citiesActions'

const City = (props) => {

    
/*     const [idCiudad, setIdCiudad] = useState({ ciudades: null, loading: true }) */
    
    useEffect(() => {   
        window.scroll(0,0)
        const idCiudadRuta = props.match.params.id

        console.log(idCiudadRuta)

         props.encontrarCiudad(idCiudadRuta)
     /*    let ciudadEncontrada = props.ciudadBuscada.find(ciudad => ciudad._id === idCiudadRuta) */

    }, [] )
    
/*     const {  loading } = idCiudad

    if (loading) {
        
        return <h1>Loading</h1>
    }
 */
     
     console.log( props.ciudadBuscada ) 
    return (
     <>
            <main className="contenedorCities">
                
             <h1>{props.ciudadBuscada.nombre}</h1> 
                
       {/*   <div className="contenedorHeroImg">        
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
                </div> */}

        </main>
    </>        
    )
}


const mapStateToProps = state => {

    return {
       ciudadBuscada: state.cities.ciudadBuscada
    }
}

const mapDispatchToProps = {

    encontrarCiudad: citiesActions.encontrarCiudad
}

export default connect (mapStateToProps, mapDispatchToProps)(City)
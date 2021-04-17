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
      .catch(error => this.props.history.push('/error'))
    

    
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
        <section className="heroSearch">
          <h1 className="tituloBuscador" >Search cities</h1>
          <form className="formBuscador" action="">
        
             <div id="search-wrapper">
                   <label htmlFor="">
              <i class="fa fa-search"></i>
              <input  type="search"  placeholder=" Search..."  className="inputSearch" onChange={buscandoCiudad} />
             </label>
                    </div>
    
          </form>
          <video id="video_hero" loop autoPlay muted>
            <source src="http://baravdg.com/wp-content/uploads/2021/04/pexels-francesco-navarro-6216472.mp4" type="video/mp4" />
          </video>

        </section>
      
        <main>
           {
                  listaCiudades.length === 0
                  ? <div className="pageLoader">
                        <lottie-player className="loader" style={{ width: "20vw" }} src="https://assets1.lottiefiles.com/packages/lf20_tVT3vG.json"  speed="1"  loop  autoplay></lottie-player>
                    </div>
                  :ciudades.length === 0 
                  ? <div>
                        <h2>No se encontro la ciudad que buscadabas</h2>
                        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_fyqtse3p.json" speed="1" loop  autoplay></lottie-player>   
                    </div>
                  : ciudades.map(ciudad => <div className="ciudad" key={ciudad._id} > <CardCities ciudad={ciudad} /> </div>) 
              
           }
      </main>

          
      </>
    )

    
}

export default Cities
import '../style/cities.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import CardCities from '../components/CardCities';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import citiesActions from '../Redux/Action/citiesActions'


const Cities = (props) => {

  /* LLamo a la API */
  useEffect(() => {

    props.cargarCiudades()

    window.scroll({
      top: 400,
      left: 100,
      behavior: 'smooth'
    });

  }, [])


  if (props.errorServer) {
    props.history.push('/errorserver')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <section className="heroSearch">
        <h1 className="tituloBuscador" >Search cities</h1>
        <form className="formBuscador" action="">
          <div id="search-wrapper">
            <label htmlFor="">
              <i className="fa fa-search"></i>
              <input type="search" placeholder=" Search..." className="inputSearch" onChange={(e) => props.filtrarCiudades(e)} />
            </label>
          </div>
        </form>
        <video id="video_hero" loop autoPlay muted>
          <source src="https://myhadministracionedificios.com/wp-content/uploads/2021/04/production-ID_4507988-1-1.mp4" type="video/mp4" />
        </video>
      </section>
      <main className="contenedorImagenes">
        {
          props.ciudades.length === 0
            ? <div className="pageLoader">
              <lottie-player className="loader" style={{ width: "40vw", margin: "5vw" }} src="https://assets1.lottiefiles.com/packages/lf20_tVT3vG.json" speed="1" loop autoplay></lottie-player>
            </div>
            : props.copiaCiudades.length === 0
              ? <div className="errorBusqueda">
                <h2>The city you were looking for was not found</h2>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_fyqtse3p.json" style={{ width: "20vw" }} speed="1" loop autoplay></lottie-player>
              </div>
              : props.copiaCiudades.map(ciudad => <div className="ciudad" key={ciudad._id} > <CardCities ciudad={ciudad} /> </div>)

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

const mapStateToProps = state => {
  return {
    ciudades: state.cities.todasCiudades,
    copiaCiudades: state.cities.copiaCiudades,
    errorServer: state.cities.errorServer
  }
}

const mapDispatchToProps = {

  cargarCiudades: citiesActions.cargarCiudad,
  filtrarCiudades: citiesActions.filtrarCiudades

}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
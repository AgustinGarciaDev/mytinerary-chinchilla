import { Link } from "react-router-dom";

const CardCities = ({ ciudad: { nombre, _id, url } }) => {


    return (
  <>

            
 <Link  to={`/city/${_id}`}>
     
    <div /* key={nombre} */ className="bannerCiudad" style={{ backgroundImage: `url("${url}")` }} >
            <div className="contenedorTextBanner">
              
              <h2 className="textoBanner btn-one">{nombre}</h2>
      </div>
    </div>
 </Link>


  </>   
   ) 

}

export default CardCities
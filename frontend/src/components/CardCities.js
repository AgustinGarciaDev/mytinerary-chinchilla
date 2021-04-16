import { Link } from "react-router-dom";

const CardCities = ({ ciudad: { nombre, _id, url } }) => {

 

    return (
  <>

            
 <Link to={`/city/${_id}`}>
     
    <div key={nombre} className="bannerCiudad" style={{ backgroundImage: `url("${url}")` }} >
      <h1>{nombre}</h1>
    </div>
 </Link>


  </>   
   ) 

}

export default CardCities
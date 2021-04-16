import { Link } from "react-router-dom";

const CardCities = ({ ciudad: { nombre, id, url } }) => {

 

    return (
  <>

            
 <Link to={`/city/${id}`}>
     <h1>{nombre}</h1>
    <div key={nombre} className="cuadro " style={{ backgroundImage: `url("${url}")` }} ></div>
 </Link>


  </>   
   ) 

}

export default CardCities
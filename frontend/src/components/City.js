const City = ({ ciudad: { nombre,id , url}}) => {
    
    return (
        <>
            <h1>{nombre}</h1>

            <div key={nombre} className="cuadro " style={{ backgroundImage: `url("${url}")` }} ></div>


        </>   
   ) 

}

export default City
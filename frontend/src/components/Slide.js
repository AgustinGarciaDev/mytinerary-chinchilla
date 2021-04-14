import  '../style/style.css'
 
const Slide = (props) => {
    
    const { ciudades } = props
    return (
       <>
        { ciudades.map(ciudad =>  {
        return  ( <div key={ciudad.nombre} className="cuadro " style={{ backgroundImage: `url("${ciudad.url}")` }}>
            <div className="textImg">
                <h2>{ciudad.nombre}</h2>
            </div>
          </div>)
      
        })}
      </>
    )
    
}

export default Slide

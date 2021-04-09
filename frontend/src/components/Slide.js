import  '../style/style.css'
 
const Slide = (props) => {
    
    const { ciudades } = props
    return (
       <>
            { ciudades.map(ciudad => <div className="cuadro "  style={{backgroundImage:`url("${ciudad.url}")`}}   key={ciudad.id}>{ ciudad.id}</div>)}
      </>
    )
    
}

export default Slide

/* 




*/
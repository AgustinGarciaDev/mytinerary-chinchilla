import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"


const SingUp = (props) => {

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        urlFoto: "",
        pais: "",

    })
   
    useEffect(() => {

        props.fetchearPaises()

    }, [])

    const cambioValor = (e) => {
    
        const campo = e.target.name
        const valor = e.target.value

        console.log(campo)
        console.log(valor)
        
        setDatosUsuario({

            ...datosUsuario,
            [campo]: valor

        })
    
    }
    
    console.log(datosUsuario)

    return (
        <>
            <form >
                <label >
                    Nombre:<input onChange={cambioValor} name="nombre" value={datosUsuario.nombre} type="text"/>
                </label>
                 <label >
                     Apellido:<input onChange={cambioValor}  name="apellido"  value={ datosUsuario.apellido}  type="text"/>
                </label>
                 <label >
                    Email:<input onChange={cambioValor} name="email"  value={datosUsuario.email} type="email"  id=""/>
                </label>
                <label >
                    Password:<input onChange={cambioValor} name="password"  value ={datosUsuario.password} type="password" id=""/>
                </label>
                  <label >
                    Url foto:<input  onChange={cambioValor} name="urlFoto"   value={datosUsuario.urlFoto} type="text" id=""/>
                </label>
                <label >
                    <select name="pais" value={datosUsuario.pais}  onChange={cambioValor}  id="">
                        <option value="">Pais</option>
                        {props.paises.map(paises => <option value={paises.name} id={paises.id}  >{paises.name}</option> )}
                    </select>
                </label>
            
             </form>
        </>    
    )
}

const mapStateToProps = state => {
 
   return {
         paises: state.user.paises
    } 
}

const mapDispatchToProps = {
 
    fetchearPaises: userActions.fetchearPaises
}

export default connect (mapStateToProps, mapDispatchToProps)(SingUp)
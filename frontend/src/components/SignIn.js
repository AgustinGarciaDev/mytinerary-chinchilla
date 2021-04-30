import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"
import { Link } from "react-router-dom";


const SingIn = (props) => {



    const [datosUsuario, setDatosUsuario] = useState({
        email: "",
        password: "",
    })

    const cambioValor = (e) => {

        const campo = e.target.name
        const valor = e.target.value
        setDatosUsuario({

            ...datosUsuario,
            [campo]: valor

        })

    }

    const enviarFormulario = (e) => {

        e.preventDefault()

        props.loguearUsuario(datosUsuario)

    }

    return (
        <>
            <section className="contenedorFotoyFormulario">
                <div className="imgFondo">

                </div>
                <div className="contenedorFormulario">

                    <form className="formularioRegistro formularioSignIn" >
                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">Email:</p></div>
                                <input className="inputStyle correo" onChange={cambioValor} name="email" value={datosUsuario.email} type="email" />
                            </label>
                        </div>

                        <div className="labelInfo contenedorPassword">
                            <label >
                                <div><p className="nombreInput">Password:</p></div>
                                <div className="inputStyle correo">
                                    <i className="fas fa-eye"></i>
                                    <input className="inputConIcono" onChange={cambioValor} name="password" value={datosUsuario.password} type="password" />
                                </div>
                            </label>
                        </div>
                        <button className="btnFormRegister" onClick={enviarFormulario}>Sign In</button>
                        <br />
                        <div>
                            <p>If you don't have an account  <Link to="/signup">Create count</Link></p>

                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}



const mapDispatchToProps = {

    loguearUsuario: userActions.loguearUsuario
}

export default connect(null, mapDispatchToProps)(SingIn)
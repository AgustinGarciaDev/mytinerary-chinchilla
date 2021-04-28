import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"
import { Link } from "react-router-dom";


const SingUp = (props) => {

    const [btnVisible, setBtnVisible] = useState(false)

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
    const enviarFormulario = () => {

        console.log("estas por enviar un formulario")
    }

    return (
        <>
            <section className="contenedorFotoyFormulario">
                <div className="imgFondo">

                </div>
                <div className="contenedorFormulario">

                    <form className="formularioRegistro" >
                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">First Name:</p></div>
                                <input className="inputStyle inputSeparador" onChange={cambioValor} name="nombre" value={datosUsuario.nombre} type="text" />
                            </label>
                            <label >
                                <div><p className="nombreInput">Last Name:</p></div>
                                <input className="inputStyle" onChange={cambioValor} name="apellido" value={datosUsuario.apellido} type="text" />
                            </label>
                        </div>

                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">Email:</p></div>
                                <input className="inputStyle correo" onChange={cambioValor} name="email" value={datosUsuario.email} type="email" id="" />
                            </label>
                        </div>

                        <div className="labelInfo contenedorPassword">
                            <label >
                                <div><p className="nombreInput">Password:</p></div>
                                <div className="inputStyle correo">
                                    <i placeholder="Password" onClick={() => setBtnVisible(!btnVisible)} class="fas fa-eye"></i>
                                    <input className="inputConIcono" onChange={cambioValor} name="password" value={datosUsuario.password} type={btnVisible ? 'text' : 'password'} id="" />
                                </div>
                            </label>
                        </div>

                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">Url Photo:</p></div>
                                <input required className="inputStyle correo" onChange={cambioValor} name="urlFoto" value={datosUsuario.urlFoto} type="text" id="" />
                            </label>
                        </div>
                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">Select Country:</p></div>
                                <select className="inputStyle correo" name="pais" value={datosUsuario.pais} onChange={cambioValor} id="">
                                    <option value="">Pais</option>
                                    {props.paises.map(paises => <option value={paises.name} id={paises.id} > {paises.name}</option>)}
                                </select>
                            </label>
                        </div>
                        <button className="btnFormRegister" onclick={enviarFormulario}>Sign In</button>

                        <div>
                            <p>If you already have an account: <Link to="/signin">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = state => {

    console.log(state.user.paises)

    return {
        paises: state.user.paises
    }
}

const mapDispatchToProps = {

    fetchearPaises: userActions.fetchearPaises
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)
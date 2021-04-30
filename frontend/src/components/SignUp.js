import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"
import { Link } from "react-router-dom";


const SingUp = (props) => {

    const [btnVisible, setBtnVisible] = useState(false)

    const [errores, setErrores] = useState([])

    const [datosUsuario, setDatosUsuario] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userPic: "",
        country: "",
    })

    useEffect(() => {

        props.fetchearPaises()

    }, [])

    const cambioValor = (e) => {


        const campo = e.target.name
        const valor = e.target.value

        setDatosUsuario({

            ...datosUsuario,
            [campo]: valor

        })

    }
    const enviarFormulario = async (e) => {

        e.preventDefault()

        const respuesta = await props.crearUsuario(datosUsuario)

        if (respuesta) {

            setErrores(respuesta.details)
        } else {
            props.history.push('/')
        }
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
                                <input className="inputStyle inputSeparador" onChange={cambioValor} name="firstName" value={datosUsuario.firstName} type="text" />
                            </label>
                            <label >
                                <div><p className="nombreInput">Last Name:</p></div>
                                <input className="inputStyle" onChange={cambioValor} name="lastName" value={datosUsuario.lastName} type="text" />
                            </label>
                        </div>

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
                                    <i placeholder="Password" onClick={() => setBtnVisible(!btnVisible)} className="fas fa-eye"></i>
                                    <input className="inputConIcono" onChange={cambioValor} name="password" value={datosUsuario.password} type={btnVisible ? 'text' : 'password'} />
                                </div>
                            </label>
                        </div>

                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">Url Photo:</p></div>
                                <input required className="inputStyle correo" onChange={cambioValor} name="userPic" value={datosUsuario.userPic} type="text" />
                            </label>
                        </div>
                        <div className="labelInfo">
                            <label >
                                <div><p className="nombreInput">Select Country:</p></div>
                                <select className="inputStyle correo" name="country" value={datosUsuario.country} onChange={cambioValor} >
                                    <option value="">Pais</option>
                                    {props.paises.map(paises => <option value={paises.name} key={paises.id} > {paises.name}</option>)}
                                </select>
                            </label>
                        </div>
                        <button className="btnFormRegister" onClick={enviarFormulario}>Sign In</button>

                        <div>
                            <p>If you already have an account: <Link to="/signin">Sign In</Link></p>
                        </div>
                    </form>
                    {errores.map(error => <h1>{error.message}</h1>)}
                </div>
            </section>
        </>
    )
}

const mapStateToProps = state => {


    return {
        paises: state.user.paises
    }
}

const mapDispatchToProps = {

    fetchearPaises: userActions.fetchearPaises,
    crearUsuario: userActions.crearUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)
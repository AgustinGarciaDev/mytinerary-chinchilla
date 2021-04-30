import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SingIn = (props) => {


    const [errores, setErrores] = useState([])
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

    const enviarFormulario = async (e = null, googleUser = null) => {

        console.log(googleUser)
        e && e.preventDefault()

        let usuario = e ? datosUsuario : googleUser

        const respuesta = await props.loguearUsuario(usuario)
        console.log(respuesta)
        if (respuesta) {
            setErrores(respuesta.details)
        } else {
            toast.success("bienvenido", {
                onClose: () => {
                    props.history.push('/')
                }
            })
        }

    }
    const responseGoogle = (response) => {

        console.log(response.profileObj)
        const { givenName, familyName, email, imageUrl } = response.profileObj

        enviarFormulario(null, { firstName: givenName, lastName: familyName, email: email, password: "hola1235", userPic: imageUrl, country: "Argentina" })
    }


    return (
        <>
            <section className="contenedorFotoyFormulario">
                <div className="imgFondo">

                </div>
                <div className="contenedorFormulario">
                    <GoogleLogin
                        clientId="780474747059-kjbfva78hf1ar7gfssbr3bj67pdc6e44.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />,

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
                    < ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                </div>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    loguearUsuario: userActions.loguearUsuario
}
export default connect(null, mapDispatchToProps)(SingIn)
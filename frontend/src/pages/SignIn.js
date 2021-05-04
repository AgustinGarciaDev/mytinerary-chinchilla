import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

    const enviarFormulario = async (e = null, googleUser = null) => {

        e && e.preventDefault()
        let usuario = e ? datosUsuario : googleUser

        //Falta hacer validaciones!

        if (usuario.email === "" || usuario.password === "") {
            toast.error("😬 All fields must be completed", {
                toastId: "errorFields"
            })
        } else {
            const respuesta = await props.loguearUsuario(usuario)
            respuesta
                ? toast.error(respuesta, {
                    toastId: respuesta
                })
                : toast.success("👋 Welcome", {
                    onClose: () => {
                        props.history.push('/')
                    },

                })
        }

    }
    const responseGoogle = (response) => {
        const { email } = response.profileObj
        enviarFormulario(null, { email: email, password: "Hola1235!" })
    }
    return (

        <section className="contenedorFormularioyTexto contenedorSignIn">

            <form className="formularioRegistro formularioSignIn" >
                <div className="contenedorTextoSign contenedorTextoSignIn">
                    <p>No account? <Link to="/signup">Sign Up</Link></p>

                </div>
                <h1 className="SignInText">Sign In</h1>
                <GoogleLogin
                    clientId="780474747059-kjbfva78hf1ar7gfssbr3bj67pdc6e44.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className="btnGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google"></i>Sign in with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <div className="labelInfo">
                    <label >
                        <div><p className="nombreInput">Email:</p></div>
                        <input placeholder="Email" className="inputStyle correo" onChange={cambioValor} name="email" value={datosUsuario.email} type="email" />
                    </label>
                </div>

                <div className="labelInfo contenedorPassword">
                    <label >
                        <div><p className="nombreInput">Password:</p></div>
                        <div className="inputStyle correo">
                            <i className="fas fa-eye"></i>
                            <input placeholder="Password" className="inputConIcono" onChange={cambioValor} name="password" value={datosUsuario.password} type="password" />
                        </div>
                    </label>
                </div>
                <button className="btnFormRegister" onClick={enviarFormulario}>Sign In</button>
            </form>
            < ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </section>
    )
}

const mapDispatchToProps = {
    loguearUsuario: userActions.loguearUsuario
}
export default connect(null, mapDispatchToProps)(SingIn)
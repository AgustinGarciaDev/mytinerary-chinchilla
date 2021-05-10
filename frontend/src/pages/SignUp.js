import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userActions"
import { Link } from "react-router-dom"
import { GoogleLogin } from 'react-google-login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        window.scroll({
            top: 400,
            left: 100,
            behavior: 'smooth'
        });

    }, [])

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
        if (usuario.firstName === "" || usuario.lastName === "" || usuario.email === "" || usuario.password === "" || usuario.userPic === "" || usuario.country === "") {
            toast.error("😬 All fields must be completed")

        } else {
            const respuesta = await props.crearUsuario(usuario)

            if (respuesta) {
                setErrores(respuesta.details)
            } else {
                toast.success("👋 Welcome", {
                    onClose: () => {
                        props.history.push('/')
                    },

                })
            }
        }


    }
    const responseGoogle = (response) => {
        const { givenName, familyName, email, imageUrl } = response.profileObj
        enviarFormulario(null, { firstName: givenName, lastName: familyName, email: email, password: "Hola1235!", userPic: imageUrl, country: "Argentina" })
    }

    useEffect(() => {
        notificacionesToast()
    }, [errores])

    const notificacionesToast = () => {
        errores.map(error => {
            toast.error(error.message, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: error.message

            });
        })
    }
    return (
        <section className="contenedorFormularioyTexto sectionSignUp">
            <form className="formularioRegistro formularioSignUp" >
                <h1 className="SignInText">Sign Up</h1>
                <GoogleLogin
                    clientId="780474747059-kjbfva78hf1ar7gfssbr3bj67pdc6e44.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className="btnGoogle btnGoogleSignUp" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google"></i>Sign in with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <div className="labelInfo">
                    <label >
                        <div><p className="nombreInput">First Name:</p></div>
                        <input placeholder="First Name" className="inputStyle correo" onChange={cambioValor} name="firstName" value={datosUsuario.firstName} type="text" />
                    </label>
                    <label >
                        <div><p className="nombreInput">Last Name:</p></div>
                        <input placeholder="Last Name" className="inputStyle correo" onChange={cambioValor} name="lastName" value={datosUsuario.lastName} type="text" />
                    </label>
                </div>

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
                            <i placeholder="Password" onClick={() => setBtnVisible(!btnVisible)} className="fas fa-eye"></i>
                            <input placeholder="Password" className="inputConIcono" onChange={cambioValor} name="password" value={datosUsuario.password} type={btnVisible ? 'text' : 'password'} />
                        </div>
                    </label>
                </div>

                <div className="labelInfo">
                    <label >
                        <div><p className="nombreInput">Url Photo:</p></div>
                        <input placeholder="Url Photo" required className="inputStyle correo" onChange={cambioValor} name="userPic" value={datosUsuario.userPic} type="text" />
                    </label>
                </div>
                <div className="labelInfo">
                    <label >
                        <div><p className="nombreInput">Select Country:</p></div>
                        <select className="inputStyle correo" name="country" value={datosUsuario.country} onChange={cambioValor} >
                            <option selected disabled value="">Country</option>
                            {props.paises.map(paises => <option value={paises.name} key={paises.id} > {paises.name}</option>)}
                        </select>
                    </label>
                </div>
                <button className="btnFormRegister" onClick={enviarFormulario}>Sign Up</button>
                <div className="contenedorTextoSign contenedorTextoSignUp">
                    <p>Already have an account?<br /><Link to="/signin"><span className="nameBtnForm">Sign in</span></Link></p>
                </div>
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
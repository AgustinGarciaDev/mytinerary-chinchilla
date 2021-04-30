import axios from "axios";
import { toast } from 'react-toastify';

const userActions = {

    fetchearPaises: () => {

        return (dispatch, getState) => {
            axios.get("https://restcountries.eu/rest/v2/all")
                .then(response => dispatch({ type: "CARGAR_PAISES", payload: response.data }))
                .catch(error => console.log(error))
        }

    },

    crearUsuario: (datosUsuario) => {
        return async (dispatch, getState) => {

            try {
                const response = await axios.post("http://localhost:4000/api/user/signUp", datosUsuario)
                if (!response.data.success) {
                    return response.data.errores
                }
                dispatch({ type: 'LOGUEAR_USUARIO', payload: response.data.success ? response.data.respuesta : null })
            } catch (error) {
                console.log(error)
            }
        }
    },

    loguearUsuario: (datosUsuario) => {

        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post("http://localhost:4000/api/user/signIn", datosUsuario)
                if (!respuesta.data.success) {
                    console.log(respuesta)
                    return respuesta.data.errores
                }
                dispatch({ type: 'LOGUEAR_USUARIO', payload: respuesta.data.success ? respuesta.data.respuesta : null })

            } catch (error) {
                toast.warn("Usuario o Pass incorrecta intente nuevamente")
            }
        }

    },

    desloguearUsuario: () => {

        return (dispatch, getState) => {

            dispatch({ type: 'DESLOGUEAR_USUARIO' })
        }
    },

    forzarLoginLocalStore: (usuarioLoguedo) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get("http://localhost:4000/api/user/loginLocalStore", {
                    headers: {
                        'Authorization': 'Bearer ' + usuarioLoguedo.token
                    }
                })
                dispatch({
                    type: 'LOGUEAR_USUARIO', payload: {
                        ...respuesta.data.respuesta,
                        token: usuarioLoguedo.token
                    }
                })
            }
            catch (error) {
                alert("Me parece que me queres mentir")
            }


        }
    }
}

export default userActions
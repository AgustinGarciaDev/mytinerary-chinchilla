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
                const response = await axios.post("http://localhost:4000/api/user/signIn", datosUsuario)

                if (!response.data.success) {

                    return response.data.error
                }
                dispatch({ type: 'LOGUEAR_USUARIO', payload: response.data.success ? response.data.respuesta : null })

            } catch (error) {
                console.log(error)
            }
        }

    },

    desloguearUsuario: () => {

        return (dispatch, getState) => {

            dispatch({ type: 'DESLOGUEAR_USUARIO' })
            toast.success("👋Bye", {
                autoClose: 1000,
                position: "top-center",
            })
        }
    },

    forzarLoginLocalStore: (usuarioLoguedo) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get("http://localhost:4000/api/user/loginLocalStore", {
                    headers: {
                        'Authorization': 'Bearer ' + usuarioLoguedo.token
                    }
                })
                dispatch({
                    type: 'LOGUEAR_USUARIO', payload: {
                        ...response.data.respuesta,
                        token: usuarioLoguedo.token
                    }
                })
            }
            catch (error) {
                toast.error("OJO NO TE HAGAS EL PIKARO EH")
            }


        }
    }
}

export default userActions
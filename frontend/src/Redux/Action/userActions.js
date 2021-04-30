import axios from "axios";


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

                console.log(response)

                dispatch({ type: 'LOGUEAR_USUARIO', payload: response.data.success ? response.data.respuesta : null })

            } catch (error) {

                console.log(error)
            }
        }
    },

    loguearUsuario: (datosUsuario) => {
        console.log(datosUsuario)
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post("http://localhost:4000/api/user/signIn", datosUsuario)
                dispatch({ type: 'LOGUEAR_USUARIO', payload: respuesta.data.success ? respuesta.data.respuesta : null })
                console.log(respuesta)
            } catch (error) {
                alert("passIncorrecta")
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
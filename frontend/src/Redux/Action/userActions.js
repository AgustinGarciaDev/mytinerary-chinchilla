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

                console.log(response)
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

        console.log(datosUsuario)

        return (dispatch, getState) => {

            axios.post("http://localhost:4000/api/user/signIn", datosUsuario)
                .then(response => dispatch({ type: 'LOGUEAR_USUARIO', payload: response.data.success ? response.data.respuesta : null }))
                .catch(error => console.log(error))
        }

    },

    desloguearUsuario: () => {

        return (dispatch, getState) => {

            dispatch({ type: 'DESLOGUEAR_USUARIO' })
        }
    },

    forzarLoginLocalStore: (usuarioLocalStore) => {

        return (dispatch, getState) => {

            dispatch({ type: 'LOGUEAR_USUARIO', payload: usuarioLocalStore })
        }
    }
}

export default userActions
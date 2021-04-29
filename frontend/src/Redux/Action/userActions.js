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


        console.log(datosUsuario)

        return (dispatch, getState) => {

            axios.post("http://localhost:4000/api/user/signUp", datosUsuario)
                .then(response => dispatch({ type: 'LOGUEAR_USUARIO', payload: response.data.success ? response.data.respuesta : null }))
                .catch(error => console.log(error))
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

    forzarLoginLocalStore: () => {

    }
}

export default userActions
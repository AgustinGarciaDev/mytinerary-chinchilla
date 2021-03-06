import axios from 'axios';

// Dispara una accion que luego va a capturar el reduce
//Retorna 2 tipos de propiedades || Tipo action('CARGAR_CIUDADES')  y payload (ciudadesAcargar) esto se recibe del componente
//Payload recibe por parametro de la funcion
//
const citiesActions = {

    cargarCiudad: () => {

        return (dispatch, getState) => {

            axios.get('https://my-tinerary2021.herokuapp.com/api/ciudades')
                .then(response => dispatch({ type: 'CARGAR_CIUDADES', payload: response.data.respuesta }))
                .catch(error => dispatch({ type: 'ERROR_SERVER', payload: true }))
        }

    },

    filtrarCiudades: (e) => {
        const valorInput = e.target.value.trim()

        return (dispatch, getState) => {
            dispatch({ type: 'FILTRAR_CIUDADES', payload: valorInput })
        }

    },

    encontrarCiudad: (id) => {

        return (dispatch, getState) => {
            axios.get('https://my-tinerary2021.herokuapp.com/api/ciudad/' + id)
                .then(response => dispatch({ type: 'BUSCAR_CIUDADES', payload: response.data.respuesta }))
                .catch(error => console.log("Ciudad no encontrada"))

        }
    }

}

export default citiesActions

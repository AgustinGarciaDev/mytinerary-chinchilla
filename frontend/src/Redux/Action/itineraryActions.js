import axios from "axios";

const itineraryActions = {

    obtenerItineraries: (id) => {
        return (dispatch, getState) => {

            axios.get('http://localhost:4000/api/itinerary/city/' + id)
                .then(response => dispatch({ type: 'OBTENER_ITINERARIES', payload: response.data.respuesta }))
                .catch(error => console.log(error))

        }
    },
    cargarActividades: (id) => {
        return async (dispatch, getState) => {

            try {

                const response = await axios.get('http://localhost:4000/api/activity/itinerary/' + id)

                return response.data.respuesta.activities

            } catch (error) {
                console.log(error)
            }

        }
    },

    cargarComentarios: () => {

    }
}

export default itineraryActions
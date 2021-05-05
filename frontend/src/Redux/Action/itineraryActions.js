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

    cargarComentarios: (comentario, id) => {

        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/itinerary/comentario/' + id, comentario, {
                    headers: {
                        'Authorization': 'Bearer ' + comentario.token
                    }
                })

                return response.data.respuesta.comments

            } catch (error) {
                console.log(error)
            }
        }
    },

    borrarComentario: (idComentario, id) => {
        console.log("idItinerary" + id)
        console.log("idComentario" + idComentario)

        return async (dispatch, getState) => {

            try {
                const response = await axios.delete('http://localhost:4000/api/itinerary/comentario/' + id)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }


    },

    editarComentario: (id) => {
        return async (dispatch, getState) => {

        }
    }
}

export default itineraryActions
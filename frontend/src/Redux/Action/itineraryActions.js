import axios from "axios";

const itineraryActions = {

    obtenerItineraries: (id) => {

        console.log(id)
        
        return (dispatch, getState) => {
            
            axios.get('http://localhost:4000/api/itinerary/city/' + id)
                .then(response => dispatch({ type: 'OBTENER_ITINERARIES', payload: response.data.respuesta}))
                .catch(error => console.log(error))
    
        }
    }
}

export default itineraryActions
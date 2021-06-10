const inicialState = {
    itinerary: [],
    actividades: [],
    comentarios: [],
}

const itineraryReducer = (state = inicialState, action) => {

    switch (action.type) {

        case 'OBTENER_ITINERARIES':
            return {
                ...state,
                itinerary: action.payload
            }
        case 'OBTENER_ACTIVIDADES': {
            return {
                ...state,
                actividades: action.payload
            }
        }
        case 'OBTENER_COMENTARIOS': {
            return {
                ...state,
                comentarios: action.payload
            }
        }
        default:
            return state
    }
}

export default itineraryReducer
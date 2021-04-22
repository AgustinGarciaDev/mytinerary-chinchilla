const inicialState = {
    itinerary: []
}


const itineraryReducer = (state = inicialState, action) => {
     
    switch (action.type) {
        
        case 'OBTENER_ITINERARIES':
            return {
                ...state,
                itinerary: action.payload
            }
        default:
            return state
    }
}

export default itineraryReducer
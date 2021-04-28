const initialState = {

    paises: []
}

const userReducer = (state = initialState, action) => {
    
   switch (action.type) {
        
        case 'CARGAR_PAISES':
            return {
                ...state,
                paises: action.payload
            }
            break
        
        default:
            return state
     
    }
}

export default userReducer     

//Aca va a vivir mi state centralizado que luego conforma el store

// Un reducer tiene por defecto 2 parametros  un state y un action

const inicialState = {
    todasCiudades: [],
    copiaCiudades: [],
    ciudadBuscada:{},
}

const citiesReducer = (state = inicialState, action) => {

    switch (action.type) {

        case 'CARGAR_CIUDADES':
            return {
                ...state,
                todasCiudades: action.payload,
                copiaCiudades: action.payload,
               
            }
            break
        case 'FILTRAR_CIUDADES':
            return {
                ...state,
                copiaCiudades: state.todasCiudades.filter(ciudad => action.payload.toLowerCase() === ciudad.nombre.slice(0,action.payload.length).toLowerCase()) 
            }
            break
        case 'BUSCAR_CIUDADES':
           
            return {
                ...state,
                ciudadBuscada:action.payload,
            }
      
        default:
            return state
    }
    
}



export default citiesReducer


//Eso lo importamos al main Reducer
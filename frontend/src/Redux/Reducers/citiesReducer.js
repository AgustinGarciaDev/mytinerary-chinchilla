
const inicialState = {
    todasCiudades: [],
    copiaCiudades: [],
    ciudadBuscada: {},
    errorServer: false,
}

const citiesReducer = (state = inicialState, action) => {

    switch (action.type) {

        case 'CARGAR_CIUDADES':
            return {
                ...state,
                todasCiudades: action.payload,
                copiaCiudades: action.payload,

            }

        case 'FILTRAR_CIUDADES':
            return {
                ...state,
                copiaCiudades: state.todasCiudades.filter(ciudad => action.payload.toLowerCase() === ciudad.nombre.slice(0, action.payload.length).toLowerCase())
            }

        case 'BUSCAR_CIUDADES':

            return {
                ...state,
                ciudadBuscada: action.payload,
            }

        case 'ERROR_SERVER':

            return {
                ...state,
                errorServer: action.payload,
            }

        default:
            return state
    }

}



export default citiesReducer


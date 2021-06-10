
const initialState = {
    paises: [],
    usuarioStatus: null,
}
const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CARGAR_PAISES':
            return {
                ...state,
                paises: action.payload
            }
        case 'LOGUEAR_USUARIO':
            localStorage.setItem('userLogged', JSON.stringify({ foto: action.payload.foto, name: action.payload.name }))
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                usuarioStatus: action.payload
            }
        case 'DESLOGUEAR_USUARIO':
            localStorage.clear()
            return {
                ...state,
                usuarioStatus: null
            }
        default:
            return state

    }
}



export default userReducer
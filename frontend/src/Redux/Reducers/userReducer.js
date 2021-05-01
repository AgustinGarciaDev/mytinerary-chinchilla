
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
            break
        case 'LOGUEAR_USUARIO':

            localStorage.setItem('userLogged', JSON.stringify({ foto: action.payload.foto }))
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                usuarioStatus: action.payload
            }
            break
        case 'DESLOGUEAR_USUARIO':
            localStorage.clear()
            return {
                ...state,
                usuarioStatus: null
            }
            break

        default:
            return state

    }
}



export default userReducer
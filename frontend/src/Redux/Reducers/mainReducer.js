import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'

//Combina los reducers (Al store solo lo puede modificar un reducer)
const mainReducer = combineReducers({

    cities: citiesReducer
})

export default mainReducer


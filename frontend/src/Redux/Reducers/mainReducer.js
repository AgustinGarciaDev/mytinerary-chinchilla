import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'

//Combina los reducers (Al store solo lo puede modificar un reducer)
const mainReducer = combineReducers({

    cities: citiesReducer,
    itinerary: itineraryReducer,
    user: userReducer
})

export default mainReducer


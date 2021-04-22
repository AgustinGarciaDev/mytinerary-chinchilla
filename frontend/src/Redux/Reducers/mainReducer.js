import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'

//Combina los reducers (Al store solo lo puede modificar un reducer)
const mainReducer = combineReducers({

    cities: citiesReducer,
    itinerary: itineraryReducer
})

export default mainReducer


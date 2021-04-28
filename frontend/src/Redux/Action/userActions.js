import axios from "axios";

const userActions = {

    fetchearPaises: () => {
         
        return (dispatch , getState) => {
         

            axios.get("https://restcountries.eu/rest/v2/all")
                .then(response => dispatch({ type: "CARGAR_PAISES", payload: response.data }))
                .catch(error => console.log(error))

        }
        
    }
    
}

export default userActions
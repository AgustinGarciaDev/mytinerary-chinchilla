import { useEffect, useState } from "react";
import { connect } from "react-redux";
import itineraryActions from '../Redux/Action/itineraryActions'
import Activity from './Activity'


const Activities = (props) => {

    const [actividades, setActividades] = useState([])
    const [loading, setLoading] = useState(true)

    const { idItinerary } = props

    useEffect(() => {
        respuesta()
    }, [])

    const respuesta = async () => {
        const respuesta = await props.cargarActividades(idItinerary)
        setActividades(respuesta)
        setLoading(!loading)
    }

    if (loading) {
        <h1>loading</h1>
    }


    console.log(actividades)
    return (
        <div className="contenedorActividadesItinerary">
            {
                actividades.map(actividad => <Activity actividad={actividad} />)
            }
        </div>
    )
}


const mapDispatchToProps = {

    cargarActividades: itineraryActions.cargarActividades
}

export default connect(null, mapDispatchToProps)(Activities)
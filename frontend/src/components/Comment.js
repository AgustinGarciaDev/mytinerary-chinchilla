import { connect } from "react-redux"
import itineraryActions from '../Redux/Action/itineraryActions'
const Comment = (props) => {


    console.log()
    const deleteComentario = (e) => {
        e && e.preventDefault()
        const btnData = e.target.dataset.borrar
        props.borrarComentario(props.comment._id, props.id)
    }

    const editComentario = (e) => {
        e && e.preventDefault()
        const btnData = e.target.dataset.borrar
        props.editarComentario(props.comment._id, props.id)
    }


    return (
        <div>
            <h4>{props.comment.comment}</h4>
            <button data-borrar="1" onClick={deleteComentario}>Borrar</button>
            <button data-editar="2" onClick={editComentario}>Editar</button>
        </div>
    )
}

const mapDispatchToProps = {

    borrarComentario: itineraryActions.borrarComentario,
    editarComentario: itineraryActions.editarComentario
}

export default connect(null, mapDispatchToProps)(Comment)
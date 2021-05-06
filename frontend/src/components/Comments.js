import Comment from './Comment'
import { connect } from "react-redux";
import itineraryActions from '../Redux/Action/itineraryActions'
import { useEffect, useState } from 'react';
const Comments = (props) => {


    const id = props.idItinerary

    const [comentariosActualizados, setComentariosActualizados] = useState({
        comentariosNuevos: props.comments,
        loading: true
    })
    const [comentario, setComentario] = useState({
        mensaje: "",
        token: localStorage.getItem('token')
    })

    const datosInput = (e) => {
        setComentario({
            ...comentario,
            mensaje: e.target.value
        })
    }

    const enviarComentario = async (e) => {
        e.preventDefault()
        const respuesta = await props.cargarComentarios(comentario, id)
        setComentariosActualizados({ comentariosNuevos: respuesta, loading: false })
    }

    const deleteComentario = async (idComentario) => {
        const respuesta = await props.borrarComentario(idComentario, id)
        setComentariosActualizados({ comentariosNuevos: respuesta, loading: false })
    }

    const editComentario = async (idComentario, comment,) => {
        const respuesta = await props.editarComentario(id, idComentario, comment, comentario.token)
        setComentariosActualizados({ comentariosNuevos: respuesta, loading: false })

    }

    if (comentariosActualizados.loading) {
        <h1>loading</h1>
    }

    return (
        <>
            <h1>Lista de comentarios</h1>
            <div>
                {
                    !comentario.token
                        ? props.comments.map(comment => <Comment comment={comment} />)
                        : comentariosActualizados.comentariosNuevos.map(comment => <Comment key={comment._id} borrarComentario={deleteComentario} editarComentario={editComentario} comment={comment} />)
                }
            </div>
            <div>
                <form>
                    <input onChange={datosInput} value={comentario.mensaje} name="comentario" placeholder="deja tu comentario" type="text" />
                    <button className="btnFormRegister" onClick={enviarComentario} >SEND</button>
                </form>
            </div>
        </>

    )

}
const mapStateToProps = {
    cargarComentarios: itineraryActions.cargarComentarios,
    borrarComentario: itineraryActions.borrarComentario,
    editarComentario: itineraryActions.editarComentario
}


export default connect(null, mapStateToProps)(Comments)
import Comment from './Comment'
import { connect } from "react-redux";
import itineraryActions from '../Redux/Action/itineraryActions'
import { useEffect, useState } from 'react';
const Comments = (props) => {

    const { comentariosActualizados, setComentariosActualizados } = props
    const id = props.idItinerary

    console.log(comentariosActualizados)
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
        if (props.usuarioStatus) {
            const respuesta = await props.cargarComentarios(comentario, id)
            setComentariosActualizados(respuesta)
        } else {
            alert("no sos usuario")
        }

    }

    const deleteComentario = async (idComentario, email) => {

        if (props.usuarioStatus) {
            console.log(email)

            if (email === props.usuarioStatus.name) {
                const respuesta = await props.borrarComentario(idComentario, id)
                console.log(respuesta)
                setComentariosActualizados(respuesta)
            } else {
                console.log("no podes editar aka ojito")
            }

        } else {
            console.log("No podes borrar no sos usuario")
        }


    }

    const editComentario = async (idComentario, comment,) => {
        const respuesta = await props.editarComentario(id, idComentario, comment, comentario.token)
        setComentariosActualizados(respuesta)
    }




    return (
        <>
            <h1>Lista de comentarios</h1>
            <div>
                {comentariosActualizados.map(comment => <Comment key={comment._id} borrarComentario={deleteComentario} editarComentario={editComentario} comment={comment} />)}
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

const mapStateToProps = state => {
    return {
        usuarioStatus: state.user.usuarioStatus
    }
}

const mapDispatchToProps = {
    cargarComentarios: itineraryActions.cargarComentarios,
    borrarComentario: itineraryActions.borrarComentario,
    editarComentario: itineraryActions.editarComentario
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)
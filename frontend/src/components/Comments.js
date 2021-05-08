import Comment from './Comment'
import { connect } from "react-redux";
import itineraryActions from '../Redux/Action/itineraryActions'
import Picker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const Comments = (props) => {

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [emojiVisible, setEmojiVisible] = useState(false)
    const { comentariosActualizados, setComentariosActualizados } = props
    const id = props.idItinerary

    console.log(comentariosActualizados)

    const [comentario, setComentario] = useState({
        mensaje: "",
        token: localStorage.getItem('token')
    })

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);

    };


    useEffect(() => {
        if (chosenEmoji) {
            setComentario({
                ...comentario,
                mensaje: comentario.mensaje + chosenEmoji.emoji
            })
        }
    }, [chosenEmoji])

    const actualizadoBtn = (e) => {
        e.preventDefault()
        setEmojiVisible(!emojiVisible)
    }


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
            toast.error("no sos usuario", {
                toastId: "error"
            })
        }

    }

    const deleteComentario = async (idComentario, email) => {

        if (props.usuarioStatus) {
            if (email === props.usuarioStatus.name) {
                const respuesta = await props.borrarComentario(idComentario, id)
                setComentariosActualizados(respuesta)
            }

        }


    }

    const editComentario = async (idComentario, comment,) => {
        const respuesta = await props.editarComentario(id, idComentario, comment, comentario.token)
        setComentariosActualizados(respuesta)
    }


    const fotoUser = props.usuarioStatus
        ? props.usuarioStatus.foto
        : null


    return (
        <div className="contenedorComentarios">
            <div>
                {comentariosActualizados.map(comment => <Comment key={comment._id} borrarComentario={deleteComentario} editarComentario={editComentario} comment={comment} />)}
            </div>
            <div className="contenedorInputFotoUser">
                {props.usuarioStatus && <img className="fotoUserHeader" src={fotoUser} alt="" />}
                <button className="btnEmoji" onClick={actualizadoBtn} ><i class="far fa-grin-squint"></i></button>
                <form className="contenedorSendCommentForm">
                    <input className="inputSendComment"
                        onChange={datosInput}
                        value={comentario.mensaje}
                        name="comentario"
                        placeholder="deja tu comentario"
                        type="text" />
                    <button className="btnFormRegister" onClick={enviarComentario} ><i class="fas fa-paper-plane"></i></button>
                    {emojiVisible &&
                        <div className="contenedorBloqueEmoji" >
                            <Picker
                                disableAutoFocus={true}
                                onEmojiClick={onEmojiClick}
                            />
                        </div>
                    }

                </form>

            </div>
        </div>

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
import Comment from './Comment'
import { connect } from "react-redux";
import itineraryActions from '../Redux/Action/itineraryActions'
import Picker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
const Comments = (props) => {

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [loadingComment, setLoadingComment] = useState(true)
    const [emojiVisible, setEmojiVisible] = useState(false);
    const { comentariosActualizados, setComentariosActualizados } = props
    const id = props.idItinerary
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const quitarEspacios = comentario.mensaje.charAt(0)
        if (props.usuarioStatus) {
            if (quitarEspacios === " " || comentario.mensaje === "") {
                toast.error("You must be logged in to comment", {
                    toastId: "sendComment"
                })
            } else {
                setLoadingComment(false)
                const respuesta = await props.cargarComentarios(comentario, id)
                setComentariosActualizados(respuesta)
                setLoadingComment(true)
                setComentario({
                    ...comentario,
                    mensaje: ""
                })

            }
        } else {
            toast.error("You must be logged in to comment", {
                toastId: "error"
            })
        }

    }

    const deleteComentario = async (idComentario, email) => {
        if (props.usuarioStatus) {
            if (email === props.usuarioStatus.name) {
                const respuesta = await props.borrarComentario(idComentario, id)
                setComentariosActualizados(respuesta)
                toast.success("Comment deleted successfully", {
                    toastId: "delete"
                })
            }
        }
    }

    const editComentario = async (idComentario, comment, email) => {
        if (email === props.usuarioStatus.name) {
            const respuesta = await props.editarComentario(id, idComentario, comment)
            setComentariosActualizados(respuesta)
        }
    }
    const fotoUser = props.usuarioStatus
        ? props.usuarioStatus.foto
        : null

    return (
        <div className="contenedorComentarios">
            <div>
                {comentariosActualizados.map(comment => <Comment key={comment._id} borrarComentario={deleteComentario} editarComentario={editComentario} comment={comment} />)}
            </div>
            {props.usuarioStatus
                ? <div className="contenedorInputFotoUser">
                    <img className="fotoUserHeader" src={fotoUser} alt="" />
                    <button className="btnEmoji" onClick={actualizadoBtn} ><i className="far fa-grin-squint"></i></button>
                    <div className="contenedorSendCommentForm">
                        <input className="inputSendComment"
                            onChange={datosInput}
                            value={comentario.mensaje}
                            name="comentario"
                            placeholder="Write a comment..."
                            type="text" />
                        <button className="btnFormRegister" onClick={loadingComment ? enviarComentario : null} ><i className="fas fa-paper-plane"></i></button>
                        {emojiVisible &&
                            <div className="contenedorBloqueEmoji" >
                                <Picker
                                    disableAutoFocus={true}
                                    onEmojiClick={onEmojiClick}
                                />
                            </div>
                        }

                    </div>
                </div>
                : <div className="contenedorBtnSp">
                    <div className="contenedorBtnSp_SignUp"><Link to="/signin">Sign in</Link></div>
                    <div className="contenedorBtnSp_SignIp"> <Link to="/signup">Sign Up</Link></div>
                </div>
            }


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
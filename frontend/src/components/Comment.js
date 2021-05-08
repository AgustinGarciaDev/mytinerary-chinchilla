import { useEffect, useState } from 'react';
import { OverlayTrigger } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { connect } from "react-redux";

const Comment = (props) => {
    const { borrarComentario, editarComentario, comment: { userId: { email, firstName, lastName, userPic }, comment, _id } } = props
    const [comentario, setComentario] = useState({
        mensaje: comment,
    })
    const [show, setShow] = useState(false);
    const [editInput, setEditInput] = useState(false);
    const [usuarioComentario, setUsuarioComentario] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const datosInput = (e) => {
        setComentario({
            mensaje: e.target.value
        })
    }

    const changeInput = () => {
        setEditInput(!editInput)
    }


    useEffect(() => {
        if (props.usuarioStatus) {
            if (email === props.usuarioStatus.name) {
                setUsuarioComentario(!usuarioComentario)
            }
        }
    }, [props.usuarioStatus])

    const popover = (
        <Popover rootClose={true} id={_id} delay={{ show: 250, hide: 400 }}>
            <Popover.Content>
                <button className="btnOpcionED" onClick={handleShow}>delete</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this comment?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => borrarComentario(_id, props.comment.userId.email)}>
                            Delete
                 </Button>
                    </Modal.Footer>
                </Modal>
                <button className="btnOpcionED" onClick={changeInput}>Edit</button>

            </Popover.Content>
        </Popover>
    )


    return (
        <div className="contenedorComentarioUnico">
            <img className="fotoUserHeader" src={userPic} alt="" />
            <div className="textoContenedor">
                <h2>{firstName}{lastName}</h2>
                {!editInput
                    ? <h4>{comment}</h4>
                    : <div>
                        <input
                            className="inputEdit"
                            onChange={datosInput}
                            value={comentario.mensaje}
                            name="comentario" type="text"
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    editarComentario(_id, comentario.mensaje, props.comment.userId.email)
                                    changeInput()
                                }
                            }}
                        />

                    </div>
                }
            </div>
            { usuarioComentario &&
                <OverlayTrigger rootClose={true} trigger="click" placement="right" overlay={popover}>
                    <Button className="btnOpciones" id={_id} ><i class="fas fa-ellipsis-h"></i></Button>
                </OverlayTrigger>
            }

            {/*   <input onChange={datosInput} value={comentario.mensaje} name="comentario" type="text" />
            <button data-borrar="1" onClick={() => borrarComentario(_id, props.comment.userId.email)}>Borrar</button>
            <button data-editar="1" onClick={() => editarComentario(_id, comentario.mensaje, props.comment.userId.email)}>Editar</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        usuarioStatus: state.user.usuarioStatus
    }
}
export default connect(mapStateToProps)(Comment)

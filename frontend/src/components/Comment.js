import { useEffect, useState } from 'react';
import { OverlayTrigger } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { connect } from "react-redux";

const Comment = (props) => {
    const { borrarComentario, editarComentario, comment: { userId: { email, firstName, lastName, userPic }, comment, _id } } = props
    const [editInput, setEditInput] = useState(false);
    const [comentario, setComentario] = useState({
        mensaje: comment,
    })
    const [show, setShow] = useState(false);
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


    const editComentario = (e) => {
        if (e.key === "Enter") {

            if (comentario.mensaje === "") {
                alert("no ")
            } else {
                editarComentario(_id, comentario.mensaje, props.comment.userId.email)
                changeInput()
            }
        }
    }



    useEffect(() => {
        if (props.usuarioStatus) {
            if (email === props.usuarioStatus.name) {
                setUsuarioComentario(!usuarioComentario)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.usuarioStatus])

    const popover = (
        <Popover /* rootClose={true}  */ id={_id} delay={{ show: 250, hide: 400 }}>
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
                <div className="commentNameUser">
                    <h2>{firstName}</h2>
                    <h2 className="commentLastName">{lastName}</h2>
                </div>
                {!editInput
                    ? <h4>{comment}</h4>
                    : <div>
                        <input
                            className="inputEdit"
                            onChange={datosInput}
                            value={comentario.mensaje}
                            name="comentario" type="text"
                            onKeyPress={editComentario}
                        />

                    </div>
                }
            </div>
            {usuarioComentario &&
                <OverlayTrigger rootClose={true} trigger="click" placement="right" overlay={popover}>
                    <Button className="btnOpciones" id={_id} ><i className="fas fa-ellipsis-h"></i></Button>
                </OverlayTrigger>
            }


        </div>
    )
}

const mapStateToProps = state => {
    return {
        usuarioStatus: state.user.usuarioStatus
    }
}
export default connect(mapStateToProps)(Comment)

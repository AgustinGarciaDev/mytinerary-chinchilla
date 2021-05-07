import { useEffect, useState } from 'react';
const Comment = (props) => {
    const { borrarComentario, editarComentario, comment: { comment, _id, email }, cambiarElementoInput } = props
    const [comentario, setComentario] = useState({
        mensaje: comment,
    })

    const datosInput = (e) => {
        setComentario({
            mensaje: e.target.value
        })
    }

    return (
        <div>
            <h4>{comment}</h4>
            <input onChange={datosInput} value={comentario.mensaje} name="comentario" type="text" />
            <button data-borrar="1" onClick={() => borrarComentario(_id, props.comment.userId.email)}>Borrar</button>
            <button data-editar="1" onClick={() => editarComentario(_id, comentario.mensaje, props.comment.userId.email)}>Editar</button>
        </div>
    )
}


export default Comment
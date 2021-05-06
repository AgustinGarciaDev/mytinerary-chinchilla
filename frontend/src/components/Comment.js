import { useEffect, useState } from 'react';
const Comment = (props) => {
    const { borrarComentario, editarComentario, comment: { comment, _id }, cambiarElementoInput } = props
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
            <button data-borrar="1" onClick={() => borrarComentario(_id)}>Borrar</button>
            <button data-editar="1" onClick={() => editarComentario(_id, comentario.mensaje)}>Editar</button>
        </div>
    )
}


export default Comment
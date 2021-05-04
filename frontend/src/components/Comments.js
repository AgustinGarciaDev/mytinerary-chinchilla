import Comment from './Comment'
import { connect } from "react-redux";
import itineraryActions from '../Redux/Action/itineraryActions'
import { useState } from 'react';
const Comments = (props) => {

    const [comentario, setComentario] = useState("")


    const datosInput = (e) => {
        setComentario(e.target.value)
        console.log(comentario)
    }

    const enviarComentario = (e) => {
        e.preventDefault()
        props.cargarComentarios()
        console.log(comentario)
    }

    return (
        <>
            <h1>lista de comentarios</h1>
            <div>
                <Comment />
            </div>
            <div>
                <form>
                    <input onChange={datosInput} value={comentario} name="comentario" placeholder="deja tu comentario" type="text" />
                    <input type="submit" onClick={enviarComentario} />
                </form>
            </div>
        </>

    )

}
const mapStateToProps = {
    cargarComentarios: itineraryActions.cargarComentarios
}


export default connect(null, mapStateToProps)(Comments)
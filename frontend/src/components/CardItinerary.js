import { useEffect, useState } from "react"
import Carousel from 'react-elastic-carousel';
import Comments from './Comments'
import Activities from './Activities'
import itineraryActions from '../Redux/Action/itineraryActions'
import { connect } from "react-redux";

const CardItinerary = (props) => {

    const { itinerary: { comments, nombreItinerary, _id, authorName, duration, authorPic, hastag, precie, picBanner, offered, countryCoin, likes, userLiked } } = props

    console.log(comments)

    const [btnVisible, setBtn] = useState(false)
    const [user, setUser] = useState('')
    const [corazonLike, setCorazonLike] = useState(false)
    const [usersLikes, setUsersLikes] = useState(userLiked)
    const [like, setLike] = useState(likes)
    const [comentariosActualizados, setComentariosActualizados] = useState(comments)

    const actualizadoBtn = () => {
        setBtn(!btnVisible)
    }
    const likeBtn = async () => {
        if (props.usuarioStatus) {
            setUser(props.usuarioStatus.name)
            const respuesta = await props.likearCorazon(_id, props.usuarioStatus.name)
            console.log(respuesta)
            setLike(respuesta.likes)
            setUsersLikes(respuesta.usuariosLikes)
            setCorazonLike(respuesta.btnStatus)
        } else {
            alert("KAPO NO SOS USUARIO")
        }
    }

    useEffect(() => {
        if (props.usuarioStatus) {
            if (usersLikes.includes(props.usuarioStatus.name)) {
                setCorazonLike(true)
            } else {
                setCorazonLike(false)
            }
        } else {
            setCorazonLike(false)
        }
    }, [props.usuarioStatus])

    return (
        <>
            <div className="cardItinerary">
                <div className="contenedorArriba">
                    <h2 className="tituloItinerary">{nombreItinerary}</h2>
                    <div className="hastag">{hastag.map((etiqueta, index) => <p key={index}>#{etiqueta}</p>)}</div>
                </div>
                <div className="contenedorAbajo">
                    <div className="contenedorPicBanner">
                        <Carousel enableAutoPlay autoPlaySpeed={5000} >
                            {picBanner.map((foto, index) => <div key={index} className="picBanner" style={{ backgroundImage: `url("${foto}")` }}></div>)}
                        </Carousel>
                    </div>
                    <div className="contenedorPrecioActividades">
                        <div className="contenedorPrecioYMapa">
                            <div>
                                <div className="nombreFotoUsuario">
                                    <img className="fotoUser" src={authorPic} alt="fotoUsuario" />
                                    <h3 className="nombreUser">{authorName}</h3>
                                    <img className="iconoVerificado" src="http://baravdg.com/wp-content/uploads/2021/04/correcto.svg" alt="icono Verficado" />
                                </div>
                                <div className="contenedorActividades">
                                    <p>{Array(precie).fill(precie).map((billete, index) => <i key={index} className="fas fa-money-bill-wave"></i>)}</p>
                                    <p><i className="fas fa-clock"></i>{duration} hours(Approx.)</p>
                                    <div className="offeredText"><i className="fas fa-comments"></i><p>Offered in:</p><span className="contenedorOffered">{offered.map(lenguage => <p key={lenguage} className="lenguage">{lenguage} </p>)}</span> </div>

                                    <div className="contenedorCoins">
                                        <i className="fas fa-coins"></i>
                                        <p>Currency:</p>
                                        <span>{countryCoin.map((coin, index) => <img key={index} src={coin} alt="" />)}</span>
                                    </div>

                                    <button id={_id + "a"} onClick={likeBtn}> <p className="btn_heart">
                                        {corazonLike ? <i class="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                                        {like}</p></button>
                                </div>
                                <button className="btnActividades" id={_id} onClick={actualizadoBtn}> {btnVisible ? 'View less' : 'View More'}</button>
                            </div>

                        </div>
                    </div>

                </div>
                {
                    btnVisible
                    &&
                    <div className="contenedorParaActividades">
                        <Activities btnVisible={btnVisible} idItinerary={_id} />
                        <Comments comentariosActualizados={comentariosActualizados} setComentariosActualizados={setComentariosActualizados} idItinerary={_id} />
                    </div>
                }
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
    likearCorazon: itineraryActions.likearCorazon,
    deslikearCorazon: itineraryActions.deslikearCorazon
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItinerary)

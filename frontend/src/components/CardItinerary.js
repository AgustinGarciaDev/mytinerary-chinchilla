import { useEffect, useState } from "react"
import Carousel from 'react-elastic-carousel';
import Comments from './Comments'
import Activities from './Activities'
import itineraryActions from '../Redux/Action/itineraryActions'
import { connect } from "react-redux";
import { toast } from 'react-toastify';

const CardItinerary = (props) => {

    const { itinerary: { comments, nombreItinerary, _id, authorName, duration, authorPic, hastag, precie, picBanner, offered, countryCoin, likes, userLiked } } = props
    const [btnVisible, setBtn] = useState(false)
    const [corazonLike, setCorazonLike] = useState(false)
    const [usersLikes, setUsersLikes] = useState(userLiked)
    const [like, setLike] = useState(likes)
    const [loadingCorazon, setLoadingCorazon] = useState(true)
    const [comentariosActualizados, setComentariosActualizados] = useState(comments)

    const actualizadoBtn = () => {
        setBtn(!btnVisible)
        setComentariosActualizados(comments)
    }

    const likeBtn = async () => {
        if (props.usuarioStatus) {
            setLoadingCorazon(false)
            const respuesta = await props.likearCorazon(_id, props.usuarioStatus.name)
            setLike(respuesta.likes)
            setUsersLikes(respuesta.usuariosLikes)
            setCorazonLike(respuesta.btnStatus)
            setLoadingCorazon(true)
        } else {
            toast.error("You must be logged in to  like an itinerary", {
                toastId: "noLogued"
            })
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.usuarioStatus])



    return (
        <>
            <div className="cardItinerary">
                <div className="contenedorArriba">
                    <h2 id={nombreItinerary} className="tituloItinerary">{nombreItinerary}</h2>
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

                                    <button className="btnLikeHeart" id={_id + "a"} onClick={loadingCorazon ? likeBtn : null}> <p className="btn_heart">
                                        {corazonLike ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                                        {like}</p></button>
                                </div>
                                {!btnVisible && <button className="btnActividades" id={_id} onClick={actualizadoBtn}> {btnVisible ? 'View less' : 'View More'}</button>}

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
                        <button className="btnActividades" id={_id} onClick={actualizadoBtn}> {btnVisible ? 'View less' : 'View More'}</button>
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

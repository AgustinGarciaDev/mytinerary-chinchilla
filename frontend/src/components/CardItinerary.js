import { useState } from "react"
import Carousel from 'react-elastic-carousel';


const CardItinerary = ({ itinerary:{nombreItinerary, _id, authorName , duration ,  authorPic , hastag , precie, picBanner ,  likes}}) => {

   
    const [btnVisible, setBtn] = useState(false)
    
    return (
        <>
                <div className="cardItinerary">
                    <div classname="contenedorArriba">
                        <h2 className="tituloItinerary">{nombreItinerary}</h2>
                        <div className="hastag">{hastag.map(etiqueta => <p>#{etiqueta}</p> )}</div>
                    </div>
                    <div className="contenedorAbajo">
                        <div className="contenedorPicBanner">
                        {/*   <div className="picBanner" style={{ backgroundImage: `url("${picBanner}")` }}></div> */}
                         <Carousel   enableAutoPlay autoPlaySpeed={5000} >
                             <div className="picBanner" style={{ backgroundImage: `url("${picBanner}")` }}></div> 
                            <div className="picBanner" style={{ backgroundImage: `url("${picBanner}")` }}></div> 
                        </Carousel>
                        </div>
                        <div className="contenedorPrecioActividades">
                            <div className="contenedorPrecioYMapa">
                        <div>
                             <div className="nombreFotoUsuario">
                                        <img className="fotoUser" src={authorPic}  alt="fotoUsuario" />
                                    <h3 className="nombreUser">{authorName}</h3>
                                    <img className="iconoVerificado" src="http://baravdg.com/wp-content/uploads/2021/04/correcto.svg" alt="icono Verficado"/>
                                  </div>
                                <div className="contenedorActividades">
                                <p>{Array(precie).fill(precie).map((billete, index) => <i key={index} className="fas fa-money-bill-wave"></i> )}</p>
                                <p><i className="fas fa-clock"></i>{duration} hours(Approx.)</p>       
                                <p><i className="fas fa-comments"></i>Offered in: English</p>
                                <p><i className="fas fa-coins"></i>Currency: euros</p>
                                <p className="btn_heart"><i className="far fa-heart"></i>{likes}</p>
                             </div> 
                                <button className="btnActividades" id={_id} onClick={() => setBtn(!btnVisible)}>{btnVisible?'View Lees': 'View More' }</button>
                        </div>
                         
                            </div>   
                        </div>

                </div>
                 {
                                btnVisible
                                &&
                                <div className="contenedorActividades">
                                    <h2>Under Construccion</h2>
                                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_8uHQ7s.json"  style={{ width: "30vw" }} loop  autoplay></lottie-player>
                               </div>
                            }
                </div>

       </>     
    )
}

export default CardItinerary

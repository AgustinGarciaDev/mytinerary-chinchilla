import { useState } from "react"

const CardItinerary = ({ itinerary:{nombreItinerary, _id, authorName , duration ,  authorPic , hastag , precie, picBanner}}) => {

   
    const [btnVisible , setBtn] = useState(false)


    const cambiarStadoBtn = (e) => {
        !btnVisible // true --- TRUE 
            ? setBtn(true)
            : setBtn(false)

    }


console.log(btnVisible)

    return (
        <>
                <div className="cardItinerary">
                    <div classname="contenedorArriba">
                        <h2>{nombreItinerary}</h2>
                        <div className="hastag">{hastag.map(etiqueta => <p>#{etiqueta}</p> )}</div>
                    </div>
                    <div className="contenedorAbajo">
                        <div className="contenedorPicBanner">
                             <div className="picBanner" style={{ backgroundImage: `url("${picBanner}")` }}></div>
                        </div>
                        <div className="contenedorPrecioActividades">
                            <div className="contenedorPrecioYMapa">
                                <div>
                                  <div className="nombreFotoUsuario">
                                        <img className="fotoUser" src={authorPic}  alt="fotoUsuario" />
                                        <h3>{ authorName }</h3>
                                  </div>
                             <div>
                               {Array(precie).fill(precie).map((billete, index) => <i key={index} class="fas fa-money-bill-wave"></i> )}
                            </div>
                                
                            <div>
                                    <p><i class="fas fa-clock"></i>{duration}hours(Approx.)</p>
                                    
                            </div>
                                
                             <div>
                                <p><i class="fas fa-comments"></i>Offered in: English</p>
                                    <p><i class="fas fa-coins"></i>currency:euros</p>
                                <p><i class="far fa-heart"></i>Save to Wishlist</p>
                             </div> 
                                 
                                <button id={_id} onClick={cambiarStadoBtn}>Yo soy el boton </button>
                                </div>
                            <div>
                                <iframe src="https://www.google.com/maps/d/embed?mid=1Qdj_XSl4_XJpShqpgaHcNGux2kY&hl=es-419" width="340" height="280"></iframe>
                                </div>
                            </div>
                            <div>
                            {
                                btnVisible && <h2>Aca van las actividades</h2>
                            }
                
                            </div>
                        
                            
                        </div>

                    </div>
                </div>

       </>     
    )
}

export default CardItinerary

const CardItinerary = ({ itinerary:{nombreItinerary, authorName , authorPic , hastag , precie, picBanner}}) => {


    return (
        <>
                <div className="cardItinerary">
                    <div classname="contenedorArriba">
                    <h2>{nombreItinerary}</h2>
                    
                    <div className="hastag">

                        {hastag.map(etiqueta => <p>#{etiqueta}</p> )}

                    </div>
                    
                    </div>
                    <div className="contenedorAbajo">
                        <div>
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
                                        <p>Lista de iconos informativos del itinerary</p>
                                        <p>Lista de iconos informativos del itinerary</p>
                                        <p>Lista de iconos informativos del itinerary</p>
                                     </div> 
                                 
                                    <button>Yo soy el boton </button>
                                </div>
                                <div><p>Mapa</p></div>
                            </div>
                            <div>
                                <h2>Aca van las actividades</h2>
                
                            </div>
                        
                            
                        </div>

                    </div>
                </div>

       </>     
    )
}

export default CardItinerary

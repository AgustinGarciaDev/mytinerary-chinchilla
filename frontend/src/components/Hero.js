import {Link} from 'react-router-dom'
const HeroHome = () => {
    
    return (
        
        <div className="contenedor">
            <video  id="video_hero"  loop autoPlay muted>
          <source src="http://baravdg.com/wp-content/uploads/2021/04/heroVideo.mp4" type="video/mp4" />
            </video>
            <div className ="contenido">
                <h1>myTinerary</h1>
                <h4>Find your perfect trip, 
                designed by insiders <br/> who know and love their cities!
                </h4>
                <Link  exact to="/Cities" className="btn-hero">
                Choose destination now!
                </Link>
            </div>
        </div>
      
    )

}

export default HeroHome
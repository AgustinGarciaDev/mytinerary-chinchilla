import {Link} from 'react-router-dom'
const Footer = () => {
    
    return (
        <footer className="footer">
        <div>
                <Link  exact to="/"><h5>Home</h5></Link>
                <Link  exact to="/Cities"><h5>Cities</h5></Link>      
        </div>
            
           
                <div className="redes">
                 <h3>Socials</h3>
                <ul className="redesSociales">
                <li><a href=""><i className="fab fa-facebook"></i></a></li>
                <li><a href=""><i className="fab fa-instagram"></i></a></li>
                <li><a href=""><i className="fab fa-twitter"></i></a></li>

             </ul>
            </div>
        </footer>
      
    )

}

export default Footer
import {Link} from 'react-router-dom'
const Footer = () => {
    
    return (
        <footer className="footer" style={{ backgroundImage: `url("http://baravdg.com/wp-content/uploads/2021/04/avion_De.png")` }}  >
        <div className= "nav_footer">
                <Link   className="btn_footer" exact to="/"><h5>Home</h5></Link>
                <Link   className="btn_footer" exact to="/Cities"><h5>Cities</h5></Link>
                <Link    className="btn_footer" exact to="/Cities"><h5>Sign in</h5></Link>
                <Link  className="btn_footer" exact to="/Cities"><h5>Sign up</h5></Link>  
        </div>
            
            <div>
                <form  className="formulario_position" >

                    <label>
                        <input className="contenedorForm" placeholder="Enter email for monthly newsletter" type="text" name="" id=""/>
                    </label>
                
                    <Link exact to="/" className="btn_send">
                        send
                     </Link>
        
                </form>
           </div>
     <div className="redes">
        <ul className="redesSociales">
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.facebook.com/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/"><i className="fab fa-twitter"></i></a></li>
        </ul>
            </div>
        </footer>
      
    )

}

export default Footer

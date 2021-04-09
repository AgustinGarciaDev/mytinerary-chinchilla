// no se importa con componentes funcionales
const Header = () => {
    
    return (
        <header>
            <img src="./assets/logo.png" alt=""/>
            <nav>
                 <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Cities</a></li>
                </ul>
                <a href="" className="btn-login" ><i className="fas fa-user"></i>Login</a>
            </nav>
          
        </header>
      
    )

}

export default Header
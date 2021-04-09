// no se importa con componentes funcionales
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    
    return (
        <header>
          <Navbar bg="light" expand="lg">
                <Navbar.Brand to="/"> <img src="./assets/logo.png" alt=""/></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
              <LinkContainer  exact to="/">
              <Nav.Link >Home</Nav.Link>
              </LinkContainer>
               <LinkContainer  exact to="/Cities">
              <Nav.Link  >Cities</Nav.Link>
              </LinkContainer>
               <LinkContainer  exact to="/Cities">
               <Nav.Link >Sign in</Nav.Link>
              </LinkContainer>
               <LinkContainer  exact to="/Cities">
               <Nav.Link >Sign up</Nav.Link>
              </LinkContainer>
        </Nav>
    <i className="fas fa-user"></i>    
  </Navbar.Collapse>
  </Navbar>
    </header>
      
    )

}

export default Header
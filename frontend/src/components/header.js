// no se importa con componentes funcionales
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    
    return (
        <header>
        <Navbar sticky="top" bg="light" expand="lg">
            <LinkContainer to="/">
               <Navbar.Brand > <img className="logo" src="./assets/logo.png" alt=""/></Navbar.Brand>
               </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

            <LinkContainer exact  to="/">
              <Nav.Link >Home</Nav.Link>
              </LinkContainer>
               <LinkContainer  to="/Cities">
              <Nav.Link  >Cities</Nav.Link>
              </LinkContainer>
               <LinkContainer  to="/Cities">
               <Nav.Link >Sign in</Nav.Link>
              </LinkContainer>
               <LinkContainer to="/Cities">
               <Nav.Link >Sign up</Nav.Link>
              </LinkContainer>
              <LinkContainer  to="/Cities">
               <Nav.Link ><i className="fas fa-user"></i></Nav.Link>
              </LinkContainer> 
        </Nav>
 
  </Navbar.Collapse>
  </Navbar>
    </header>
      
    )

}

export default Header
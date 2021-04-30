// no se importa con componentes funcionales
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import userActions from '../Redux/Action/userActions';


const Header = (props) => {
  const fotoUser = props.usuarioStatus
    ? props.usuarioStatus.foto
    : null
  const desloguear = () => {
    props.desloguearUsuario()
  }

  return (
    <header>
      <Navbar sticky="top" bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand > <img className="logo" src="http://baravdg.com/wp-content/uploads/2021/04/logo.png" alt="" /></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <LinkContainer exact to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cities">
              <Nav.Link  >Cities</Nav.Link>
            </LinkContainer>
            {
              !props.usuarioStatus &&
              <>
                <LinkContainer to="/signin">
                  <Nav.Link >Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link >Sign up</Nav.Link>
                </LinkContainer>
              </>
            }
            {
              fotoUser
                ? <img src={fotoUser} style={{ width: "5vw" }} alt="" />
                : <i className="fas fa-user"></i>
            }
            {

              props.usuarioStatus && <h2 onClick={desloguear}>Desloguear</h2>

            }
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </header>

  )

}

const mapStateToProps = state => {

  return {
    usuarioStatus: state.user.usuarioStatus
  }
}

const mapDispatchToProps = {

  desloguearUsuario: userActions.desloguearUsuario
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)

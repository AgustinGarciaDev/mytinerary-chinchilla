// no se importa con componentes funcionales
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import userActions from '../Redux/Action/userActions';


const Header = (props) => {

  console.log(props.usuarioStatus)
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
          <Navbar.Brand > <img className="logo" src="http://baravdg.com/wp-content/uploads/2021/05/logo-removebg-preview-1.png" alt="" /></Navbar.Brand>
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
                ? <>
                  <div className="contenedorLogout" >
                    <img className="fotoUserHeader" src={fotoUser} alt="" />
                    <p onClick={desloguear} className="logout">SIGN OUT</p>
                    <i onClick={desloguear} className="fas fa-sign-out-alt"></i>
                  </div>
                </>
                : <i className="fas fa-user"></i>
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

import './style/style.css'
import './style/formularioSign.css'
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import City from './pages/City'
import Error from './pages/Error'
import ErrorServer from './pages/ErrorServer'
import Footer from './components/Footer'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { connect } from 'react-redux';
import userActions from './Redux/Action/userActions'
import { ToastContainer } from 'react-toastify';

class App extends React.Component {

  render() {

    if (!this.props.usuarioStatus && localStorage.getItem('token')) {

      const datosUsuario = JSON.parse(localStorage.getItem('userLogged'))

      const usuarioLoguedo = {
        token: localStorage.getItem('token'),
        ...datosUsuario
      }

      this.props.forzarLoginLocalStore(usuarioLoguedo)
      //Mientras esta procesando no me muestres nada
      return null

    }


    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route exact path="/city/:id" component={City} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/errorserver" component={ErrorServer} />
          <Redirect to="/Error" />
        </Switch>
        < ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    usuarioStatus: state.user.usuarioStatus
  }
}

const mapDispatchToProps = {

  forzarLoginLocalStore: userActions.forzarLoginLocalStore
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'
import Slider from '../components/Carrusel'
import HeroHome from '../components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
class Home extends React.Component {

  componentDidMount() {
    window.scroll({
      top: 0,
      behavior: 'smooth'

    });
  }

  render() {
    return (
      <>
        <ToastContainer autoClose={2000} />
        <HeroHome />
        <Slider />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    usuarioStatus: state.user.usuarioStatus
  }

}

export default connect(mapStateToProps)(Home)

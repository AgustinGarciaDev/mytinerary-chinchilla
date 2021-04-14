import React from 'react'
import { BrowserRouter, Route , Switch , Redirect } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import Error from './pages/Error'
import './style/style.css'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends React.Component {
  
  render() {
    
    return (
    <BrowserRouter>
         <Header />
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/Error" component={Error} />
          <Redirect to="/Error" />
      </Switch>
          <Footer />   
     </BrowserRouter>
    )
  }
}

export default App
import React from 'react'
import './style/style.css'
import { BrowserRouter, Route , Switch , Redirect } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import City from './components/City'
import Error from './pages/Error'

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
          <Route path="/city/:id"  component={ City}  />
          <Route path="/Error" component={Error} />
          <Redirect to="/Error" />
      </Switch>
          <Footer />   
     </BrowserRouter>
    )
  }
}

export default App
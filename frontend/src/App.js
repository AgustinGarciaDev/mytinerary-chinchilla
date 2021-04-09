import React from 'react'
import { BrowserRouter, Route , Switch , Redirect } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import Error from './pages/Error'
import './style/style.css'

class App extends React.Component {
  
  render() {
    
    return (
    <BrowserRouter>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cities" component={Cities} />
          <Route path="/Error" component={Error} />
          <Redirect to="/Error" />
      </Switch>
        
     </BrowserRouter>
    )
  }
}

export default App
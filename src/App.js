import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
const App = () =>{
  return (
  <BrowserRouter>
      <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path='/' component={SignIn}></Route>
              <Route path='/signup' component={SignUp}></Route>
              <Route path ='/home' component={Home}></Route>
            </Switch>
      </div>
  </BrowserRouter>
  )
}

export default App;

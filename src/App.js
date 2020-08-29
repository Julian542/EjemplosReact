import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import Home from './components/Home';
import NuestrosAutos from './components/NuestrosAutos';
import Contacto from './components/Contacto';
import DetalleAuto from './components/DetalleAuto';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/NuestrosAutos/:clave" component={NuestrosAutos}></Route>
        <Route exact path="/Contacto" component={Contacto}></Route>
        <Route exact path="/DetalleAuto/:id" component={DetalleAuto}></Route>
      </Switch>
    );
  }
}

export default App;

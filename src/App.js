import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Detalle from './components/Detalle';
import Agrupados from './components/Agrupados';

class App extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/home/:id" component={Home}></Route>
        <Route exact path="/detalle/:id" component={Detalle}></Route>
        <Route exact path="/agrupados" component={Agrupados}></Route>
      </Switch>
    );
  }
}

export default App;

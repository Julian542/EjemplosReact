import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DetallePlaneta from './components/DetallePlaneta';
import Ordenados from './components/Ordenados';

function App() {
  return (
    <Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/home/:buscar" component={Home}></Route>
      <Route exact path="/detalle/:id" component={DetallePlaneta}></Route>
      <Route exact path="/ordenados" component={Ordenados}></Route>
    </Switch>
  );
}

export default App;

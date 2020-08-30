import React from 'react';
import './assets/App.css';
import { Switch, Route } from 'react-router-dom';
import Grilla from './components/Grilla';
import DetalleAlumno from './components/DetalleAlumno';

function App() {
  return (
    <Switch>
      <Route exact path="/todos" component={Grilla}></Route>
      <Route exact path="/legajo/:busqueda" component={Grilla}></Route>
      <Route exact path="/nombre/:busqueda" component={Grilla}></Route>
       <Route exact path="/detalle/:legajo" component={DetalleAlumno}></Route>
    </Switch>
  );
}

export default App;

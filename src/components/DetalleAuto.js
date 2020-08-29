import React, { Component } from 'react';
import MenuOpciones from './MenuOpciones';
import autos from '../data/autos.json';
import Button from 'react-bootstrap/Button';

 class DetalleAuto extends Component{ //Detalle Auto

    constructor(){
        super();
        this.state = autos;
    }

    render(){

        let parametro = this.props.match.params.id;
        let array = this.state.filter(auto => auto.localidad == parametro);
        console.log('objeto', array[0]);
        let ternaria = (array[0].precio == 0) ? 'Consultar con el vendedor' : array[0].precio;
        return(
            <React.Fragment>
                 <MenuOpciones></MenuOpciones>
                 <div key={array[0].localidad}>
                 <h1> Detalle {array[0].marca} {array[0].modelo} </h1>
                 <img src={require(`../assets/img/${array[0].imagen}`)}></img>
                 <h1> Precio: ${ternaria}</h1>
                 <h2>Año: {array[0].anio}</h2>
                 <a href="/"> <Button variant="success">Volver a la pagina principal</Button> </a>
                 </div>
            </React.Fragment>
        );
    }
}
export default DetalleAuto;
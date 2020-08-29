import React, { Component } from 'react';
import MenuOpciones from './MenuOpciones';
import Auto from './Auto';
import autos from '../data/autos.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Home extends Component {

    constructor(){
        super();
        this.state = autos;
    }

    render() {
        let arreglo = this.state.filter(auto => auto.destacado == "Y");
        let autitos = arreglo.map(auto =>{
            return(
                <Col sm={3} key={auto.modelo}>
                    <Auto
                        marca={auto.marca}
                        modelo={auto.modelo}
                        precio={auto.precio}
                        imagen={auto.imagen}
                        localidad={auto.localidad}
                    ></Auto>
                </Col>
            );
        });
        console.log('AUTOS', this.state);
        console.log('DESTACADOS', arreglo);
        return (
            <React.Fragment>
                <MenuOpciones></MenuOpciones>
                <h1 className="titulo">A TODO MOTOR AUTOS</h1>
                <h2 className="descripcion">
                Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? 
                Recibí ofertas en Efectivo de concesionarios registrados. ¡Súper!
                </h2>
                <Row>
                    <Col sm={12} className="destacados">
                        <h2 className="destacadosLetra">Destacados.</h2>
                    </Col>
                </Row>
                <Row>
                    {autitos}
                </Row>
            </React.Fragment>
        );
    }
}
export default Home;
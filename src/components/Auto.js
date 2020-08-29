import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Auto extends Component { //Menu de Opciones
    render() {

        const {marca,modelo,precio,imagen, localidad} = this.props;
        let preciomostrado = (precio == 0) ? 'Consultar Precio' : ('$' + precio);
         

        return (
            <React.Fragment>
                <div style={{ width: '150px' }}>
                    <Card >
                        <a href={(`/DetalleAuto/${localidad}`)}>
                        <Card.Img variant="top" src={require(`../assets/img/${imagen}`)} />
                        </a>
                        <Card.Body>
                            <Card.Title>{marca}</Card.Title>
                            <Card.Text>
                                <h2>{modelo}</h2>
                                <h3 className="precioMostrado">{preciomostrado}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </React.Fragment>
        );
    }
}
export default Auto;
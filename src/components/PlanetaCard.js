import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class PlanetaCard extends Component{

    render(){
        return(
            <React.Fragment>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require(`../assets/img/${this.props.imagen}`)} />
                    <Card.Body>
                        <Card.Title>{this.props.nombre}</Card.Title>
                        <Button variant="primary" href={`/detalle/${this.props.codigo}`}>Ver Detalle</Button>
                    </Card.Body>
                </Card>   
            </React.Fragment>
        );
    }
}
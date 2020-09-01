import React,{ Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class SignoCard extends Component{
    
    render(){

        const {imagen,signo,id} = this.props;

        return(
            <React.Fragment>
                <Card key={id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require(`../assets/img/${imagen}`)} />
                    <Card.Body>
                        <Card.Title>{signo}</Card.Title>
                        <Button  href={`/detalle/${id}`} variant="primary">Ver Detalle</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}
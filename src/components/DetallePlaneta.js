import React,{Component} from 'react';
import MenuSuperiorOpciones from './MenuSuperiorOpciones';
import sistema_solar from '../data/sistema_solar.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class DetallePlaneta extends Component{
    constructor(){
        super();
        this.state = sistema_solar;
    }

    render(){
        let id = this.props.match.params.id;
        let planeta = this.state.filter(planeta => planeta.codigo == id);
        let sat = planeta[0].satelites.map(satelites => {
            return(
                <ul>
                    <li>{satelites}</li>
                </ul>
            );
        });
        let satelites = (planeta[0].satelites.length == 0) ? 'NO tiene' : sat;
        console.log(planeta);

        return(
            <React.Fragment>
                <MenuSuperiorOpciones></MenuSuperiorOpciones>
                <Container className="cardCon">
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    <img atl="imagen" src={require(`../assets/img/${planeta[0].img}`)}></img>
                                </Row>
                                <Row>
                                    <h1>{planeta[0].nombre}</h1>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                    <Col sm={6}>
                                        <h4>Diametro Km: </h4>       
                                    </Col>
                                    <Col sm={6}>
                                        <p>{planeta[0].diametro}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <h4>Rotación: </h4>
                                    </Col>
                                    <Col sm={6}>
                                        <p>{planeta[0].rotacionDias}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <h4>Temperatura: </h4>
                                    </Col>
                                    <Col sm={6}>
                                        <p>{planeta[0].temperatura}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <h4>Satelites:</h4> 
                                    </Col>
                                    <Col sm={6}>
                                        {satelites}
                                    </Col>
                                </Row>
                                <Row> <h4>Descripción: </h4></Row>
                                <Row> {planeta[0].descripcion}</Row>
                            </Col>
                        </Row>
                </Container>
            </React.Fragment>
        );
    }
}
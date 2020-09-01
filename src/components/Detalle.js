import React,{Component} from 'react';
import Navigator from './Navigator';
import { Row, Col, Container } from 'react-bootstrap';
import zodiaco from '../data/zodiaco.json';

export default class Detalle extends Component{

    constructor(){
        super();
        this.state = zodiaco;
    }

    consultarMeses(array){
        let nuevoArray = [];
        for(let i = 0 ; i < array.length ; i++){
            if(array[i] == 1){
                nuevoArray.push('Enero');
            }
            if(array[i] == 2){
                nuevoArray.push('Febrero');
            }
            if(array[i] == 3){
                nuevoArray.push('Marzo');
            }
            if(array[i] == 4){
                nuevoArray.push('Abril');
            }
            if(array[i] == 5){
                nuevoArray.push('Mayo');
            }
            if(array[i] == 6){
                nuevoArray.push('Junio');
            }
            if(array[i] == 7){
                nuevoArray.push('Julio');
            }
            if(array[i] == 8){
                nuevoArray.push('Agosto');
            }
            if(array[i] == 9){
                nuevoArray.push('Septiembre');
            }
            if(array[i] == 10){
                nuevoArray.push('Octubre');
            }
            if(array[i] == 11){
                nuevoArray.push('Noviembre');
            }
            if(array[i] == 12){
                nuevoArray.push('Diciembre');
            }
        }

        return nuevoArray;
    }
    render(){

        let parametro = this.props.match.params.id;
        let signo = this.state.find(ref => ref.id == parametro);
        let meses = this.consultarMeses(signo.meses).map(mes=>{
            return(
            <h5>{mes}</h5>
            );
        });
        console.log(meses);
        return(
            <React.Fragment>
                <Navigator></Navigator>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Row>
                                <img alt="planet" src={require(`../assets/img/${signo.imagen}`)}></img>
                            </Row>
                            <Row>
                                <h1>{signo.signo}</h1>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col sm={6}> <h3>Elemento: </h3></Col>
                                <Col sm={6}> <h5>{signo.elemento}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={6}> <h3>Simbolo: </h3></Col>
                                <Col sm={6}> <h5>{signo.simbolo}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={6}> <h3>Meses: </h3></Col>
                                <Col sm={6}> {meses}</Col>
                            </Row>
                            <Row>
                                <Col sm={6}> <h3>Descripcion:</h3></Col>
                                <Col sm={6}> <h5>{signo.descripcion}</h5></Col>
                            </Row>
                        </Col>
                    </Row>   
                </Container>
            </React.Fragment>
        );
    }
}
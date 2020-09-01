import React, { Component } from 'react';
import Navigator from './Navigator';
import { Row, Col } from 'react-bootstrap';
import zodiaco from '../data/zodiaco.json';
import SignoCard from './SignoCard';

export default class Home extends Component{

    constructor(){
        super();
        this.state = zodiaco;
    }

    checkFilter(meses, parametro){
        let bandera = false;
        for (let i = 0; i < meses.length; i++) {
           if(meses[i] == parametro){
               bandera = true;
           }
        }
        return bandera;
    }

    render(){
        let parametro = this.props.match.params.id; 
        let signos = this.state.map(signo =>{
            if(parametro == 'todos'){
                return(
                    <Col sm={3}>
                        <SignoCard key={signo.id} imagen={signo.imagen} signo={signo.signo} id={signo.id}></SignoCard>
                    </Col>
                )
            }else{
                if(this.checkFilter(signo.meses, parametro)){
                    return(
                        <Col sm={3}>
                            <SignoCard key={signo.id} imagen={signo.imagen} signo={signo.signo} id={signo.id}></SignoCard>
                        </Col>
                    )
                }
            }
        });

        return(
            <React.Fragment>
                <Navigator></Navigator>
                <Row>
                  {signos}
                </Row>
            </React.Fragment>
        );
    }
}
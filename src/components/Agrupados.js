import React,{ Component } from "react";
import zodiaco from '../data/zodiaco.json';
import { Table } from "react-bootstrap";
import Navigator from "./Navigator";

export default class Agrupados extends Component{
    constructor(){
        super();
        this.state = zodiaco;
    }

    render(){

        let consultaAgua = this.state.map(signo => {
            if(signo.elemento == 'Agua'){
                return(
                    <td>{signo.signo}</td>    
                )
            }
        });
        let consultaTierra = this.state.map(signo => {
            if(signo.elemento == 'Tierra'){
                return(
                    <td>{signo.signo}</td>    
                )
            }
        });
        let consultaFuego = this.state.map(signo => {
            if(signo.elemento == 'Fuego'){
                return(
                    <td>{signo.signo}</td>    
                )
            }
        });
        let consultaAire = this.state.map(signo => {
            if(signo.elemento == 'Aire'){
                return(
                    <td>{signo.signo}</td>    
                )
            }
        });
        console.log('Elementos Aire', this.state);
        return(
            <React.Fragment>
                <Navigator></Navigator>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Simbolo</th>
                        <th>Elementos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agua</td>
                            <td>{consultaAgua}</td>
                        </tr>
                        <tr>
                            <td>Tierra</td>
                            <td>{consultaTierra}</td>
                        </tr>
                        <tr>
                            <td>Fuego</td>
                            <td>{consultaFuego}</td>
                        </tr>
                        <tr>
                            <td>Aire</td>
                            <td>{consultaAire}</td>
                        </tr>
                    </tbody>
                    </Table>
            </React.Fragment>
        );
    }
}
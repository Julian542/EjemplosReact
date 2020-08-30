import React,{ Component } from "react";
import MenuSuperiorOpciones from './MenuSuperiorOpciones';
import sistema_solar from '../data/sistema_solar.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export default class Ordenados extends Component{
    constructor(){
        super();
        this.state = sistema_solar;
    }

    ordenaPlanetas(){
        let diametros = this.state;
        diametros.sort(function(a,b){
            return (b.diametro - a.diametro);
        });
        return diametros;
    }
    render(){

        let planetas = this.ordenaPlanetas();
        console.log('planetas ',planetas)
        let retorno = planetas.map(planeta =>{
            return(
                <tr>
                    <td>
                     {planeta.nombre}
                    </td>
                     <td>
                     {planeta.diametro}
                    </td>
                </tr>
            );
        });

        return(
            <React.Fragment>
                <MenuSuperiorOpciones></MenuSuperiorOpciones>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Diametro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {retorno}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    };
}
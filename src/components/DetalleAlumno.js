import React, { Component } from 'react';
import MenuSuperiorOpciones from './MenuSuperiorOpciones';
import alumnos from '../data/alumnos.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class DetalleAlumno extends Component{

    constructor(){
        super();
        this.state = alumnos;
    }

    encuentraElMayor(){
        let notas = [];
        let notaSola = [];
        this.state.map(ref=>{
            let objeto = {};
            let subtotal = 0;
            let notaFinal; 
            ref.notas.forEach(nota => subtotal += nota);
            notaFinal = subtotal / ref.notas.length;
            objeto = {
                nombre: ref.alumno,
                nota: notaFinal
            }
            notas.push(objeto);
            notaSola.push(notaFinal);
        });
        let mayor = Math.max.apply(null, notaSola);
        
         let mejorPromedio = notas.filter( nota => nota.nota == mayor)
         return mejorPromedio[0].nombre; 
    }

    render(){
        
        let parametro = this.props.match.params.legajo;  
        let nombreDelMejor = this.encuentraElMayor();
        let mejorAlumno = this.state.filter(alumno => alumno.alumno == nombreDelMejor);
        let alumnoComun = this.state.filter(alumno => alumno.legajo == parametro); 
        let alumno = (parametro == 'mejoralumno') ? mejorAlumno : alumnoComun;

        let estado = (alumno[0].estaActivo == true) ? 'Si' : 'No';
        let subnota = 0;
        let notas = alumno[0].notas.map(notas =>{
            subnota += notas;
            return(
                <ul>
                    <li>
                        {notas}
                    </li>
                </ul>
            );
        });
        let promedio = subnota / alumno[0].notas.length;
        let nombreColor = (alumno[0].estaActivo == true ) ? 'nombreAlumno' : 'alumnoDesactivo';

        return(
            <React.Fragment>
                <MenuSuperiorOpciones></MenuSuperiorOpciones>
                <Container className="container">
                <Row>
                    <Col sm={6}>
                        <img alt="foto" src={require(`../assets/img/${alumno[0].foto}`)} />
                    </Col>
                    <Col sm={6}>
                        <h1 className={nombreColor}>
                          {alumno[0].alumno}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p>Legajo:</p>
                    </Col>
                    <Col sm={6}>
                        <p>{alumno[0].legajo}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p>Carrera:</p>
                    </Col>
                    <Col sm={6}>
                        <p>{alumno[0].carrera}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p>Estado Activo:</p>
                    </Col>
                    <Col sm={6}>
                        <p>{estado}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p>Notas:</p>
                    </Col>
                    <Col sm={6}>
                        <p>{notas}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p>Promedio:</p>
                    </Col>
                    <Col sm={6}>
                        <p>{promedio}</p>
                    </Col>
                </Row>
                </Container>
                
            </React.Fragment>
        );
    }
}
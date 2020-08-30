import React, { Component } from 'react';
import MenuSuperiorOpciones from './MenuSuperiorOpciones';
import PlanetaCard from './PlanetaCard';
import sistema_solar from '../data/sistema_solar.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component{

    constructor(){
        super();
        this.state = sistema_solar;
    }

    buscaPlaneta(planeta,campo){
        const planet = planeta.toLowerCase();
        const field = campo.toLowerCase();
        if(planet.includes(field)){
            return true;
        }else{
            return false;
        }
    }

    render(){
        let parametro = this.props.match.params.buscar;
        let planetas = this.state.map(planeta =>{
            if(parametro == undefined){
                return(
                
                    <Col sm={4}>
                    <PlanetaCard key={planeta.codigo} 
                                 codigo={planeta.codigo}
                                 nombre={planeta.nombre} 
                                 imagen={planeta.img}
                                 ></PlanetaCard>
                                 </Col>
                                 
                );
            }else{
                if(this.buscaPlaneta(planeta.descripcion,parametro)){
                    return(
                
                        <Col sm={4}>
                        <PlanetaCard key={planeta.codigo} 
                                     codigo={planeta.codigo}
                                     nombre={planeta.nombre} 
                                     imagen={planeta.img}
                                     ></PlanetaCard>
                                     </Col>
                                     
                    );
                }
            }
        });
        
        // let planetas = this.state.map(planeta => {
        //     return(
                
        //         <Col sm={4}>
        //         <PlanetaCard key={planeta.codigo} 
        //                      codigo={planeta.codigo}
        //                      nombre={planeta.nombre} 
        //                      imagen={planeta.img}
        //                      ></PlanetaCard>
        //                      </Col>
                             
        //     );
        // });
        return(
            <React.Fragment>
                <MenuSuperiorOpciones></MenuSuperiorOpciones>
                    <Row>
                        {planetas}
                    </Row>
            </React.Fragment>
        );
    }
}
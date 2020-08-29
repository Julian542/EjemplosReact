import React, { Component } from 'react';
import autos from '../data/autos.json';
import Auto from './Auto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MenuOpciones from './MenuOpciones';

 class NuestrosAutos extends Component{ //Menu de Opciones
    
    constructor(){
        super();
        this.state = autos;
    }

    checkInclude(propiedad, palabra){
        const prop = propiedad.toLowerCase()
        const pal = palabra.toLowerCase()
        if(prop.includes(pal)){
          return true
        } else {
          return false
        }
      }

    render(){
        let parametro = this.props.match.params.clave ;
        

        let autito = this.state.map( (auto) =>{
            if(parametro != 'todos'){
                if(this.checkInclude(auto.marca,parametro) || this.checkInclude(auto.modelo,parametro) || this.checkInclude(auto.anio,parametro)){
                    return(
                        <Col sm={3} key={auto.localidad}>
                            <Auto
                                marca={auto.marca}
                                modelo={auto.modelo}
                                precio={auto.precio}
                                imagen={auto.imagen}
                                localidad={auto.localidad}
                            ></Auto>
                        </Col>
                    );
                }else{
                    return null;
                }
            }else{
                return(
                    <Col sm={3} key={auto.localidad}>
                        <Auto
                            marca={auto.marca}
                            modelo={auto.modelo}
                            precio={auto.precio}
                            imagen={auto.imagen}
                            localidad={auto.localidad}
                        ></Auto>
                    </Col>
                );
            }
        });
        return(
            <React.Fragment>
                <MenuOpciones></MenuOpciones>
                <Row> 
                    {autito}
                </Row>
            </React.Fragment>
        );
    }
}
export default NuestrosAutos;
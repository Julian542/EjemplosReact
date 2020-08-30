import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class MenuSuperiorOpciones extends Component{
    render(){
        let busca = "";
        let nombre = (e) =>{
            busca = e.target.value;
            console.log('busqueda de nombre' , busca);
        }
        let submitNombre = (e)=>{
            if(busca === ""){
                window.location.href = "/todos";
            }else{
                window.location.href = `/nombre/${busca}`;
            }
        }

        //buscaLegajo
        let busco = "";
        let legajo = (e) =>{
            busco = e.target.value;
            console.log('busqueda de legajo' , busco);
        }
        let submitLegajo = (e)=>{
            if(busco === ""){
                window.location.href = "/todos";
            }else{
                window.location.href = `/legajo/${busco}`;
            }
        }

        return(
            <React.Fragment>
                 <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/todos">Tema 2</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Form inline className="form1">
                        <Nav.Link>Legajo: </Nav.Link>
                        <FormControl type="text" 
                                     placeholder="Busca por Legajo" 
                                     className="mr-sm-2"
                                     name="legajo"
                                     onChange={legajo}
                                     />
                        <Button variant="outline-light" onClick={submitLegajo}>BUSCAR</Button>
                        </Form>
                        <Form inline className="form2">
                        <Nav.Link>Nombre: </Nav.Link>
                        <FormControl type="text" 
                                     placeholder="Busca por Nombre" 
                                     className="mr-sm-2"
                                     name="nombre"
                                     onChange={nombre} />
                        <Button variant="outline-light" onClick={submitNombre}>BUSCAR</Button>
                        </Form>
                        <Nav.Link href="/detalle/mejoralumno">Mejor Alumno</Nav.Link>
                    </Nav>
                        
                </Navbar>
            </React.Fragment>
        );
    }
}
export default MenuSuperiorOpciones;
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class MenuOpciones extends Component { //Menu de Opciones
    render() {

        let clave = "";
        let palabra = "";
        clave = (e) =>{
            palabra = e.target.value;
            console.log('valor de palabra', palabra);
        };

        let submitHandler = (e) =>{
            if(palabra === ""){
                window.location.href = "/NuestrosAutos/todos";
            }else{
                window.location.href = `/NuestrosAutos/${palabra}`;
            }
        };

        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Tema 1</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/NuestrosAutos/todos">Nuestros Autos</Nav.Link>
                            <Nav.Link href="/Contacto">Contacto</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" 
                                         placeholder="Busca un auto" 
                                         className="mr-sm-2"
                                         name="clave"
                                         onChange={clave}
                                         />
                            <Button variant="outline-success" onClick={submitHandler}>Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default MenuOpciones;
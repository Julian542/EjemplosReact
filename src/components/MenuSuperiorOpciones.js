import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class MenuSuperiorOpciones extends Component{
    render(){

        let buscar = "";
        let planeta = (e) =>{
            buscar = e.target.value;
            console.log('buscar ', buscar);
        };

         let submitPlaneta = (e) =>{
            if(buscar === ""){
                window.location.href = "/home";
            }else{
                console.log('else')
                window.location.href = `/home/${buscar}`;
            }
         };   
        return(
            <React.Fragment>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/home">Home</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="/ordenados">Ordenados por Diametro</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" 
                                     placeholder="Busca un planeta" 
                                     className="mr-sm-2"
                                     name="planeta"
                                     onChange={planeta} />
                        <Button variant="outline-info" onClick={submitPlaneta}>Buscar</Button>
                        </Form>
                    </Navbar>
            </React.Fragment>
        );
    }
}
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export default class Navigator extends Component{
    render(){

        let meses = [{numero:1,mes:'Enero'},{numero:2,mes:'Febrero'},{numero:3,mes:'Marzo'},{numero:4,mes:'Abril'},{numero:5,mes:'Mayo'},{numero:6,mes:'Junio'},{numero:7,mes:'Julio'},{numero:8,mes:'Agosto'},{numero:9,mes:'Septiembre'},{numero:10,mes:'Octubre'},{numero:11,mes:'Noviembre'},{numero:12,mes:'Diciembre'}];
        let mes = meses.map(mes =>{
            return(
            <React.Fragment>
                <NavDropdown.Item href={`/home/${mes.numero}`}>{mes.mes}</NavDropdown.Item>
                <NavDropdown.Divider />
            </React.Fragment>
            );
        });

        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home/todos">React-Zodiaco</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/agrupados">Agrupados</Nav.Link>
                    <NavDropdown title="Seleccione un Mes" id="basic-nav-dropdown">
                        {mes}
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    };
}
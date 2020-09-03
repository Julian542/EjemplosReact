import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

class Navegador extends Component{
    render(){
        let regiones = [{clave:'eu',name:'European Union'},
                     {clave:'efta',name:'European Free Trade Association'},
                     {clave:'caricom',name:'Caribbean Community'},
                     {clave:'pa',name:'Pacific Alliance'},
                     {clave:'au',name:'African Union'},
                     {clave:'usan',name:'Union of South American Nations'},
                     {clave:'eeu',name:'Eurasian Economic Union'},
                     {clave:'al',name:'Arab League)'},
                     {clave:'asean',name:'Association of Southeast Asian Nations'},
                     {clave:'cais',name:'Central American Integration System'},
                     {clave:'cefta',name:'Central European Free Trade Agreement'},
                     {clave:'nafta',name:'North American Free Trade Agreement'},
                     {clave:'saarc',name:'South Asian Association for Regional Cooperation'}];
        let region = regiones.map(region =>{
            return(
            <React.Fragment>
                <NavDropdown.Item href={`/home/${region.clave}`}>{region.name}</NavDropdown.Item>
                <NavDropdown.Divider />
            </React.Fragment>
            );
        });

        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/home/todos">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/ordenados">Ordenados por Diametro</Nav.Link>
                            <NavDropdown title="-- Seleccione una región --" id="basic-nav-dropdown">
                        {region}
                    </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Navegador;
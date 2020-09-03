import React,{ Component } from "react";
import { Table } from "react-bootstrap";
import Navegador from "./Navegador";

export default class OrdenadosDiametro extends Component{
    _isMounted = false;

    constructor(){
        super();
        this.state = {
            region:[]
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.fetchRegiones();
    }

    fetchRegiones(){
        fetch(`https://restcountries.eu/rest/v2/`)
        .then((response)=>response.json())
        .then((data)=>{
            data.sort(function(a,b){
                return (b.area - a.area);
            });
            this.setState({region:data})
            console.log('PAIS',data);
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        const filtrados = this.state.region.map(pais=>{
            return(
                <tr>
                    <td>{pais.name}</td>
                    <td> {pais.capital}</td>
                    <td> {pais.subregion}</td>
                    <td> {pais.population}</td>
                    <td> {pais.area}</td>
                    <td><a href={(`/detalle/${pais.alpha2Code}`)}>VER DETALLE</a></td>
                </tr>
            );
        });
        
        return(
            <React.Fragment>
                <Navegador></Navegador>
                <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Pais</th>
                    <th>Capital</th>
                    <th>Subregion</th>
                    <th>Poblacion</th>
                    <th>Superficie</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {filtrados}
            </tbody>
        </Table>
            </React.Fragment>
        );
    }
}
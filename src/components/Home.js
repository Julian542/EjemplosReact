import React,{ Component } from "react";
import Navegador from "./Navegador";
import { Table } from "react-bootstrap";

export default class Home extends Component{

    _isMounted = false;

    constructor(){
        super();
        this.state = {
            region:[]
        }
    }

    componentDidMount(){
        this._isMounted = true;
        let param = this.props.match.params.id;
        if(param != 'todos'){
            this.fetchRegiones(param);
        }
        
    }
    fetchRegiones(param){
        fetch(`https://restcountries.eu/rest/v2/regionalbloc/${param}`)
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({region:data})
            console.log('PAIS',data);
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        let param = this.props.match.params.id;
        let mensaje = <h1>Seleccione una opcion del combo de opciones</h1>;
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
        const tabla = 
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
        ;
        let paises = (param == 'todos') ? mensaje : tabla;
        return(
            <React.Fragment>
                <Navegador></Navegador>
                {paises}
            </React.Fragment>
        );
    }
}
import React,{Component} from 'react';
import MenuSuperiorOpciones from './MenuSuperiorOpciones';
import Table from 'react-bootstrap/Table';
import alumnos from '../data/alumnos.json';

export default class Grilla extends Component{

    constructor(){
        super();
        this.state = alumnos;
    }
    
    buscarPorNombre(alumno, nombre){
        const a = alumno.toLowerCase();
        const n = nombre.toLowerCase();
        if(a.includes(n)){
            return true;
        }else{
            return false;
        }
    }
 
    render(){

        let parametro = this.props.match.params.busqueda;
        let path = this.props.location.pathname;
      
    
        let alumnos = this.state.map(ref => {
            if( parametro == undefined){
                let subtotal = 0;
                        let notaFinal; 
                        ref.notas.forEach(nota => subtotal += nota);
                        notaFinal = subtotal / ref.notas.length;
                        return(
                            <tr>
                                <td>{ref.alumno}</td>
                                <td> {ref.legajo}</td>
                                <td> {ref.fechaNacimiento}</td>
                                <td> {notaFinal}</td>
                                <td><a href={(`/detalle/${ref.legajo}`)}>VER DETALLE</a></td>
                            </tr>
                        );
            }else{
                if( path.includes('nombre')){
                    if(this.buscarPorNombre(ref.alumno, parametro)){
                        let subtotal = 0;
                        let notaFinal; 
                        ref.notas.forEach(nota => subtotal += nota);
                        notaFinal = subtotal / ref.notas.length;
                        return(
                            <tr>
                                <td>{ref.alumno}</td>
                                <td> {ref.legajo}</td>
                                <td> {ref.fechaNacimiento}</td>
                                <td> {notaFinal}</td>
                                <td><a href={(`/detalle/${ref.legajo}`)}>VER DETALLE</a></td>
                            </tr>
                        );
                    }
                }else if(path.includes('legajo')){
                    if(ref.legajo == parametro){
                        let subtotal = 0;
                        let notaFinal; 
                        ref.notas.forEach(nota => subtotal += nota);
                        notaFinal = subtotal / ref.notas.length;
                        return(
                            <tr>
                                <td>{ref.alumno}</td>
                                <td> {ref.legajo}</td>
                                <td> {ref.fechaNacimiento}</td>
                                <td> {notaFinal}</td>
                                <td><a href={(`/detalle/${ref.legajo}`)}>VER DETALLE</a></td>
                            </tr>
                        );    
                    }else{
                        return null;
                    }
                }
            }
        });
        

        return(
            <React.Fragment>
                <MenuSuperiorOpciones></MenuSuperiorOpciones>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Alumno</th>
                            <th>Legajo</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Promedio Notas</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}
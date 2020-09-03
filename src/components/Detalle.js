import React,{Component} from 'react';
import Navegador from "./Navegador";
import { Container, Col, Row } from 'react-bootstrap';

export default class Detalle extends Component{
    _isMounted = false;

    constructor(){
        super();
        this.state = {
            pais:{},
            timezone:[],
            idiomas:[],
            money:[]
        }
    }

    componentDidMount(){
        this._isMounted = true;
        let param = this.props.match.params.id;
        if(param != 'todos'){
            this.fetchPais(param);
        }
        
    }

    fetchPais(param){
        console.log(param);
        fetch(`https://restcountries.eu/rest/v2/alpha/${param}`)
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({pais:data})
            this.setState({timezone:data.timezones})
            this.setState({idiomas:data.languages})
            this.setState({money:data.currencies})
            console.log('PAIS',data);
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    
    render(){
        const pais = this.state.pais;
        const timezones = this.state.timezone.map(t=>{
            return(
                <li>{t}</li>
            );
        });
        const idiomas = this.state.idiomas.map(i=>{
            return(
                <li>{i.name}</li>
            );
        });

        const monedas = this.state.money.map(moneda =>{
            return(
                <li>
                    <p>{moneda.code} - {moneda.name} -{moneda.symbol} </p>
                </li>
            )
        });
        console.log('TIME', idiomas);
        
        return(
            <React.Fragment>
                <Navegador></Navegador>
                <Container className="container">
                <Row>
                    <Col sm={6}>
                        <h1>PAIS:</h1>
                    </Col>
                    <Col sm={6}>
                        <h2 className="nombreColor">
                          {pais.name}
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <b>Capital: </b> <p>{pais.capital}</p>
                     </Col>
                     <Col sm={6}>
                         <b>Region:</b> <p>{pais.region}</p>
                     </Col>
                </Row>
                <Row>
                        <Col sm={6}>
                        <b>Subregion: </b> <p>{pais.subregion}</p>
                        </Col>
                        <Col sm={6}>
                          <b>Poblacion</b> <p>{pais.population} habitantes</p>
                        </Col>
                </Row>
                <Row>   
                         <Col sm={6}>
                        <b>Superficie:</b> <p>{pais.area}</p>
                        </Col>
                        <Col sm={6}>
                            <b>Monedas: </b> <p>{monedas}</p>
                        </Col>
                </Row>
                <Row>
                        <b>Zonas Horarias:</b>
                        <ul>{timezones}</ul>
                </Row>
                <Row>
                        <b>Idiomas:</b>
                        <ul>{idiomas}</ul>
                </Row>
                </Container>
            </React.Fragment>
        )
    }
}
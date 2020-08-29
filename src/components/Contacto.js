import React, { Component } from 'react';
import MenuOpciones from './MenuOpciones';

 class Contacto extends Component{ //Contacto
    render(){
        return(
            <React.Fragment>
                <MenuOpciones></MenuOpciones>
                <h1 className="contactoTitulo"> 
                ¿Necesitas ayuda o tenes alguna consulta?
                </h1>
                <p>
                Es importante que sepas que sólo somos un sitio web de clasificados. <span className="negrita"> No nos hagas consultas
                respecto a información de los vehículos que se publican en el portal.</span> Éstas son responsabilidad
                exclusiva de sus anunciantes, y debes contactarlos desde la ficha de cada vehículo.
                ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o sugerencias a
                <span className="correo"> consultas@atodomotor.com.ar</span>, te responderemos a la brevedad. 
                </p>
            </React.Fragment>
        );
    }
}
export default Contacto;
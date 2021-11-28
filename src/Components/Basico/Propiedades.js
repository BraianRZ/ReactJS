import React from "react";


export default function Propiedades (props) {
    return (
        <div>
        <h2>Bienvenidos al mundo de ReactJS</h2>
        <div/>
        <h3>{props.porDefecto}</h3>
        </div>
       
    );
}

//Agregando propiedad por defecto, de manera interna, independientemente del componente patern//

Propiedades.defaultProps = {
    porDefecto:"Lo de arriba es una propiedad"
    };
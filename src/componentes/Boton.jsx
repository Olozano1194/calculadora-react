import React from "react";
import '../style/Boton.css'

function Boton(props) {
    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trim()}
            onClick={() => props.manejarClic(props.children)}
            >
            <button onClick={props.manejarClic}>
                {props.children}
            </button>
        </div>
    );
}

export default Boton;
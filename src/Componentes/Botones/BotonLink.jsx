import React from 'react';
import './EstilosBotones.css';


const BotonLink = (props) => {
    return (
        <button
            className="btnGeneral"
            onClick={props.funcion}
        >
            <a
                href={props.anclaLinkTo}>{props.contenidobtn}
            </a>            
        </button>
    );
};
export default BotonLink;

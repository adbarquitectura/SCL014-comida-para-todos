import React from 'react';
import { Link } from 'react-router-dom';
import './EstilosBotones.css';


const BotonLink = (props) => {
    return (
        <button
            className="btnGeneral"
            onClick={props.funcion}
        >
            <Link to={props.enlaceLinkTo}>{props.contenidobtn}
            <a class="sr-only sr-only-focusable" href={props.anclaLinkTo}></a>
            </Link>
            
        </button>
    );
};
export default BotonLink;


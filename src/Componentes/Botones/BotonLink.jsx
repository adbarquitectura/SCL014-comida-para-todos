import React from 'react';
import { Link } from 'react-router-dom';
import './EstilosBotones.css';


const BotonLink = (props) => {
    return (
        <button
            className="btnGeneral"
        >
            <a
                href={props.anclaLinkTo}>{props.contenidobtn}
            </a>
            
        </button>




    );
};
export default BotonLink;

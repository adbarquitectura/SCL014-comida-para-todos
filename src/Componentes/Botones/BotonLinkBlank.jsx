import React from 'react';
import './EstilosBotones.css';


const BotonLinkBlank = (props) => {
    return (
        <button
            className="btnGeneral"
        >
            <a
                href={props.anclaLinkTo}
                target='_blank'
                rel='noopener noreferrer'
                >{props.contenidobtn}
            </a>            
        </button>
    );
};
export default BotonLinkBlank;
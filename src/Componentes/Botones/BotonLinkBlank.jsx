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
                >{props.contenidobtn}
            </a>            
        </button>
    );
};
export default BotonLinkBlank;
import React, { useEffect, useState } from 'react';
import './EstilosBotones.css';
import { HashLink as Link } from 'react-router-hash-link';

const BotonLink = (props) => {
    
    const [active, setActive] = useState('');

    const setEstadoActivoBoton = () => {
        if (props.estiloBoton !== undefined) {           
            if (props.estiloBoton.backgroundColor==="transparent") {
                setActive('active');
            }else{
                setActive('');
            }
        };
    };

    useEffect(() => {
        setEstadoActivoBoton();
    }, [props.estiloBoton]);

    return (
        <button
            className={"btnGeneral " + active}
            onClick={props.funcion}
            style={props.estiloBoton}
        >
            {/*  <a
                href={props.anclaLinkTo}>{props.contenidobtn}
            </a>  */}

            <Link to={props.anclaLinkTo}>{props.contenidobtn}</Link>
        </button>
    );
};

export default BotonLink;
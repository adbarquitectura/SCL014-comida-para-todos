import React, { useState } from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import Chile from './chile.json';
import './MapaChile.css'
import * as DondeEstan from './DondeEstan.js';

const MapaChile = () => {

    /* Definición del Estado de select Comunas*/
    const [comunas, setcomunas] = useState([]);

    const onClick = ({ target }) => {
        const name = target.attributes.name.value;
        console.log(name);
        if (name === 'Biobío') {
            return setcomunas(DondeEstan.Biobío)
        } else if (name === 'Antofagasta') {
            return setcomunas(DondeEstan.Antofagasta)
        } else if (name === 'Valparaíso') {
            return setcomunas(DondeEstan.Valparaíso)
        }
        else if (name === 'Metropolitana') {
            return setcomunas(DondeEstan.Metropolitana)
        }
    };


    return (

        <div className="contenedorMapa">
            <div className="contenedorTexto">
                {comunas.map((comuna, index) => {
                    return (<h5 key={index} value={comuna}>{comuna}</h5>)
                })}
            </div>
            <div className="contenedor-chile">
                < VectorMap classname="chile-map" {...Chile} layerProps={{ onClick }} />
            </div>




        </div>
    )
}

export default MapaChile



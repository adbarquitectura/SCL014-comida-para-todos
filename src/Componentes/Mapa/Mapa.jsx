import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import './Mapa.css';

 
// You'll need to download the json file from the docs site or you can create your own.
import world from './world.json';
// import { Alert } from 'react-bootstrap';
// import chile from './chile.json';
 
const Mapa = () => {

    const onClick = ({ target }) => {
        const name = target.attributes.name.value;
       if (name === 'Chile'){
         return window.open(`https://www.comidaparatodos.cl/`)     
       } else if ( name === 'Spain') {
           return window.open(`https://www.comidaparatodos.es/`)
       } else {
           return console.log('Acá no estamos todavía')
       }
      };

    return (
            <VectorMap className="mapa" {...world} layerProps={{ onClick }} />
    )
};
    
export default Mapa;
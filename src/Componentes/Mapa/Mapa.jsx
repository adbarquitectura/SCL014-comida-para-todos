import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import './Mapa.css';
 
// You'll need to download the json file from the docs site or you can create your own.
import world from './world.json';
// import chile from './chile.json';
 
const Mapa = () => {
    return (
        <div className="mapa-container">
            <VectorMap {...world} />;
        </div>
    )
};
    
export default Mapa;
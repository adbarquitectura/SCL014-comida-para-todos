import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import Chile from './chile.json';
import './MapaChile.css'

const MapaChile = () => {
    return (
        <div>
            < VectorMap classname= "chile-map" {...Chile} />
        </div>
    )
}

export default MapaChile



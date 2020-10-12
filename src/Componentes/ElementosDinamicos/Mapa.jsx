import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
 
// You'll need to download the json file from the docs site or you can create your own.
import world from './world.json';
import chile from './chile.json';
 
const Mapa = () => <VectorMap {...chile} />;

export default Mapa;
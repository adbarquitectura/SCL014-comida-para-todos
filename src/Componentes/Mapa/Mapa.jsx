import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import './Mapa.css';
import ModalGeneral from '../Modales/ModalGeneral';
import MapaChile from './MapaChile';

// You'll need to download the json file from the docs site or you can create your own.
import world from './world.json';


const Mapa = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const clickBton = () => {
        return setModalShow(false)
    };

    const onClick = ({ target }) => {
        const name = target.attributes.name.value;
        if (name === 'Chile') {
            return setModalShow(true);
        } else if (name === 'Spain') {
            return window.open(`https://www.comidaparatodos.es/`)
        } else {
            return console.log('Acá no estamos todavía')
        }
    };

    return (
        <div>
            <VectorMap className="mapa" {...world} layerProps={{ onClick }} />
            
            <ModalGeneral
            show={modalShow}
            onHide={() => setModalShow(false)}
            tituloModal={'Nos encontramos en las siguientes regiones, participando en distintas comunas'}
            contenidoModal={<MapaChile/>}
            contenidoBotonModal={'Cerrar'}
            funcionBotonModal={clickBton}
            />

        
            
        </div>

    )
};

export default Mapa;
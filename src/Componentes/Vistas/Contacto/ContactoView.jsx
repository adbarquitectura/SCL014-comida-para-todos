import React from 'react';
import Mapa from '../../Mapa/Mapa';
import ModuloContacto from '../../ElementosDinamicos/ModuloContacto';
import './ContactoView.css';

const ContactoView = () => {
    return (
        <div className="containerContactoView">
            <div className="MapaContacto">
                <Mapa />
            </div >
            <div className="ContainerContacto">
                <ModuloContacto />

            </div >

        </div>
    );
};

export default ContactoView;
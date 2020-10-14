import React from 'react';
import Mapa from '../../Mapa/Mapa';
import ModuloContacto from '../../ElementosDinamicos/ModuloContacto';
import './ContactoView.css';

const ContactoView = () => {
    return (


        <div className="MapaContacto">
            Estas en el módulo de “Contacto”
            <Mapa/>

        <div className="ContainerContacto">
            <ModuloContacto />

        </div >
    );
};

export default ContactoView;
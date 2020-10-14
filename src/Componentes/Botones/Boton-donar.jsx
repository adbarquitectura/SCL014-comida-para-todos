import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Boton-donar.css';


const BotonDonar = () => {
    return (
        <div>

            <Dropdown>
                {/* Botón que se despliega*/}
                <DropdownToggle size="lg" className="sePartedrop">
                    Sé Parte    <FontAwesomeIcon icon={faHeart} size="xs" />
                </DropdownToggle>

                {/* Información del Botón */}
                <DropdownMenu>
                    <DropdownItem href="/comoAportar#Regala un Almuerzo"> Regala un almuerzo </DropdownItem>
                    <DropdownItem href="/comoAportar#Regala un Almuerzo"> Regala talento </DropdownItem>
                    <DropdownItem href="/comoAportar#Regala un Almuerzo"> Regala un espacio de cultivo </DropdownItem>
                    <DropdownItem href="/comoAportar#Regala un Almuerzo"> Regala Capacitación </DropdownItem>
                    <DropdownItem href="/comoAportar#Regala un Almuerzo"> Regala Alimentos </DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>


    )
}

export default BotonDonar;
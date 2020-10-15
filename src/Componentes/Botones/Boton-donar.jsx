import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Boton-donar.css';
import { HashLink as Link } from 'react-router-hash-link';

const BotonDonar = () => {
    return (
        <div className="botonDonarDrop">

            <Dropdown>
                {/* Botón que se despliega*/}
                <DropdownToggle size="lg" className="sePartedrop">
                    Sé Parte    <FontAwesomeIcon icon={faHeart} size="xs" />
                </DropdownToggle>

                {/* Información del Botón */}
                <DropdownMenu>
                    <DropdownItem><Link to="comoAportar#manerasDeAportar">Regala un almuerzo</Link></DropdownItem>
                    <DropdownItem><Link to="comoAportar#manerasDeAportar"> Regala talento </Link></DropdownItem>
                    <DropdownItem><Link to="comoAportar#manerasDeAportar"> Regala un espacio de cultivo </Link></DropdownItem>
                    <DropdownItem><Link to="comoAportar#manerasDeAportar"> Regala Capacitación </Link></DropdownItem>
                    <DropdownItem><Link to="comoAportar#manerasDeAportar"> Regala Alimentos </Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>


    )
}

export default BotonDonar;
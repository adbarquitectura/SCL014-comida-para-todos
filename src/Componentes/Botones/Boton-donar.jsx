import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import './Boton-donar.css';
import ModalDonar from '../Botones/ModalDonar';

const BotonDonar = () => {
    return (
        <div>
           
            <Dropdown>
          {/* Botón que se despliega*/ }
          <DropdownToggle size= "lg" className="sePartedrop">
              Se Parte    <FontAwesomeIcon icon= {faHeart} size= "0.5x" />
          </DropdownToggle>

         {/* Información del Botón */ }
          <DropdownMenu>
              <DropdownItem href="https://yodono.cl/proyecto/207/CultivaComidaparaTods"> Regala un almuerzo </DropdownItem>
              <DropdownItem href= "/comoAportar"> Regala talento </DropdownItem>
              <DropdownItem href= "/comoAportar"> Regala un espacio de cultivo </DropdownItem>
              <DropdownItem href= "/comoAportar"> Regala Capacitación </DropdownItem>
              <DropdownItem href= "/comoAportar"> Regala Alimentos </DropdownItem>
          </DropdownMenu>
      </Dropdown>
      <br/> <br/> <br/> <br/> <br/>
      <ModalDonar/>
        </div>
      

    )
}

export default BotonDonar;
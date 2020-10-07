import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

const BotonDonar = () => {
    return (
        
      <Dropdown>
          {/* Botón que se despliega*/ }
          <DropdownToggle size= "lg" className="sePartedrop">
              Se Parte    <FontAwesomeIcon icon = {faHeart} size= "0.5x" />
          </DropdownToggle>

         {/* Información del Botón */ }
          <DropdownMenu>
              <DropdownItem> Regala un almuerzo </DropdownItem>
              <DropdownItem> Regala talento </DropdownItem>
              <DropdownItem> Regala un espacio de cultivo </DropdownItem>
              <DropdownItem> Regala Capacitación </DropdownItem>
              <DropdownItem> Regala Alimentos </DropdownItem>
          </DropdownMenu>
      </Dropdown>
        // <div>
        //     <button className='btn btn-primary'>
        //         <a href='https://yodono.cl/proyecto/207/CultivaComidaparaTods'>
        //             Se parte
        //     </a>
        //     </button>

        // </div >

    )
}

export default BotonDonar;
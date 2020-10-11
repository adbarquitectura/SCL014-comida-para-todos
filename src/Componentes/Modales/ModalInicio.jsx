import React from 'react';
import Modal from 'react-bootstrap/Modal'
import BotonCloseModal from '../Botones/BotonCloseModal';
import BotonGeneral from '../Botones/BotonGeneral';

import './ModalInicio.css';


function ModalCargadoInicial(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BotonCloseModal
        funcion={props.onHide}
      />
      <Modal.Header>

        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Modal heading</h1>

        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          </p>
      </Modal.Body>
      <Modal.Footer>

        < BotonGeneral
          contenidobtn={'Close'}
          funcion={props.onHide}
        />

      </Modal.Footer>
    </Modal>
  );
}

export default ModalCargadoInicial;
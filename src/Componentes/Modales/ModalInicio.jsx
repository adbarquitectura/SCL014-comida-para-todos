import React from 'react';
import Modal from 'react-bootstrap/Modal'
import BotonCloseModal from '../Botones/BotonCloseModal';
import BotonGeneral from '../Botones/BotonGeneral';
import './ModalInicio.css';
import imgcarrusel2 from '../../img/images.jpg';

function ModalCargadoInicial(props) {
  return (
    <div className="boxModalInicio">
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
            <h1>{props.tituloModal}</h1>

          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <h4>{props.subtituloModal}</h4>
          <p>
            {props.contenidoModal}
          </p>
          <img
            className="boxImagenModalInicio"
            src={imgcarrusel2}
            alt="First slide"
          />
        </Modal.Body>
        <Modal.Footer>

          < BotonGeneral
            contenidobtn={props.contenidoBotonModal}
            funcion={props.funcionBotonModal}
          />

        </Modal.Footer>
      </Modal>
    </div>


  );
};

export default ModalCargadoInicial;
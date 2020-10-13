import React, { useEffect } from "react";

import "./Home.css";
import Whatsapp from "./Componentes/ElementosFijos/Whatsapp";
import MenuNavegacion from "./Componentes/ElementosFijos/MenuNavegacion";
import Footer from "./Componentes/ElementosFijos/Footer";
import ModalCargadoInicial from '../src/Componentes/Modales/ModalInicio';

function Home() {

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setModalShow(true)
  }, []);

  return (
    <div className="ContenedorPadre">
      <MenuNavegacion />
      <Whatsapp />
      <Footer /> 
      <ModalCargadoInicial
        show={modalShow}
        onHide={() => setModalShow(false)}
        tituloModal={'Nuestras Campañas'}
        subtituloModal={'Inaguración de nuestra primera escuela'}
        contenidoModal={' La Junta de Vecinos de Villa Arauco (La Pintana) y a @cultiva_reforestacion dimos inicio a las clases y capacitaciones del Huerto Comunitario.'}
        contenidoBotonModal={'Conoce más'}
        funcionBotonModal={() => setModalShow(false)}
      />
    </div>
  );
};

export default Home;

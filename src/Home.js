import React, { useEffect, useState } from "react";
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
      />
    </div>
  );
};

export default Home;

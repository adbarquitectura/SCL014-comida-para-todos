import React, {useEffect} from "react";
import "./Home.css";
import Whatsapp from "./Componentes/ElementosFijos/Whatsapp";
import MenuNavegacion from "./Componentes/ElementosFijos/MenuNavegacion";
import Footer from "./Componentes/ElementosFijos/Footer";
import ModalCargadoInicial from '../src/Componentes/Modales/ModalInicio';
import Correo from './Componentes/ElementosDinamicos/Correo';
function Home() {

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(()=>{
    setModalShow(true)
  },[]);

  return (
    <div className="ContenedorPadre">      
      <MenuNavegacion />
      <Whatsapp />
      <Correo/>
      <Footer />
  

      <ModalCargadoInicial
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Whatsapp from "./Componentes/ElementosFijos/Whatsapp";
import MenuNavegacion from "./Componentes/ElementosFijos/MenuNavegacion";
import Footer from "./Componentes/ElementosFijos/Footer";


function Home() {
  return (
    <div className="ContenedorPadre">
      
      <MenuNavegacion />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Home;

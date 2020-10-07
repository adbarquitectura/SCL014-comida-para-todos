import React from 'react';
import './Home.css';
import MenuNavegacion from './Componentes/ElementosFijos/MenuNavegacion';
import Footer from './Componentes/ElementosFijos/Footer';
import RedesSociales from './Componentes/ElementosFijos/RedesSociales';


function Home() {
  
  return (
    <div className="App">
      <MenuNavegacion />
      <Footer />
      <RedesSociales />
    </div >
  );
}

export default Home;

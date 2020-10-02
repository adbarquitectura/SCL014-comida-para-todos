import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Elements/NavBar';
import LaReceta from './Components/Video/LaReceta.mp4';
// import videoFondo  from './Components/Elements/video2fondo';
// // import BackgroundVideo from './Components/Elements/BackgroundVideo';

const BlueVioletBtn =(props) => {
  return (
    <button className= "btn mybtn"> {props.contenidobtn} </button> 
  )
} 

const RedesSociales =() => {
  return(
    <div >
      Redes Sociales
    </div>
  )
}

const MenuNavegacion = () => {
  return (
    <div>
      Menu de Navegación
    </div>
  )
}

const ContainerMultimediaHome = () => {
  return (
    <div>
      Menu Video Ppal 
    </div>
  )
}


function Home() {
  return (
    <div className="App">
      <RedesSociales />
      <MenuNavegacion />
      <ContainerMultimediaHome />
      {/* <header className="App-header">
        <Navbar />
      </header>
      <video className ="video"
        autoPlay
        muted loop >
        <source src={LaReceta} type="video/mp4" />
      </video>
      <BlueVioletBtn
      contenidobtn= {'Hola'}
      /> */}
      {/* <button className= "btn mybtn"> Prueba bootstrap </button> */}
    </div >
  );
}

export default Home;

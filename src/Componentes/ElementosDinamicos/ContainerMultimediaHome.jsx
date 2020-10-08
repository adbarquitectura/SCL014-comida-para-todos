import React from 'react';
import LaReceta from '../MultimediaComponents/LaReceta.mp4';
import BotonGeneral from '../Botones/BotonGenrales';
import './ContainerMultimediaHome.css';

/* Función Botón 'Regala un almuerzo' */
const clickBton = () => {
  console.log('estoy escuchando');
  alert('Para realizar la donación te redireccionaremos a www.yodono.cl')
  window.open('https://yodono.cl/proyecto/207/CultivaComidaparaTods')

}

const ContainerMultimediaHome = () => {
  return (
    <div >
      <section className='SectionMultimedia'>
      <div className="Overlay Text">
          <h2> Ayúdanos a sumar más platos de comida en las mesas de los chilenos </h2>
          < BotonGeneral
            contenidobtn={'Regala un almuerzo'}
            funcion={clickBton}
          />
        </div>
        {/* <div className="video"> */}
          <video className="video"
            autoPlay muted
            loop >
            <source src={LaReceta} type="video/mp4" />
          </video>
        {/* </div> */}
      </section>
        
    </div>
  )
}

export default ContainerMultimediaHome;
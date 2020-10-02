import React from 'react';
import LaReceta from '../MultimediaComponents/LaReceta.mp4';

const ContainerMultimediaHome = () => {
  return (
    <div>
      <video className="video"
        autoPlay
        muted loop >
        <source src={LaReceta} type="video/mp4" />
      </video>
    </div>
  )
}

export default ContainerMultimediaHome;
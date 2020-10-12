import React, { useState } from 'react';
import './FormularioTalento.css';
import {aricaparinacota, tarapaca, antofagasta,atacama,coquimbo,valparaiso,
    ohiggins, maule, ñuble, biobio, araucania, losrios, loslagos, aysen, magallanes, metropolitana} from './comunas.js';



const FormularioTalento = () => {

/* Información de comunas */
    // console.log(aricaparinacota, tarapaca, antofagasta,atacama,coquimbo,valparaiso,
    //     ohiggins, maule, ñuble, biobio, araucania, losrios, loslagos, aysen, magallanes, metropolitana);

        /* Asociar opción de select */
 const ComunasSelect = (e) =>{
     console.log(e.target.value);
    // console.log('estoy escuchando ');
    //  const regionSeleccionada = e.target.value;
    //  console.log(regionSeleccionada);
 }

/* Definición de Estado del form */
    const [formTalento, setformTalento] = useState();

/* Función para manejar cambio de input*/

const HandleInputChange = (e) =>{
//   console.log(e.target.value)
    const {name, value} = e.target;
    // console.log(name,value);
    setformTalento({...formTalento, [name]:value})
};

/* Función para manejar Form con HandleSubmit*/
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(formTalento)
    };

    return (
        <div className="form-group form-bg">
            <div className="FormTalento">
                <div className="text">
                    <h3>Regala un poco de talento a las comunidades, ellas te lo agradecerán.</h3>
                    <p>A continuación puedes completar este formulario de inscripción.</p>
                    <p>Te enviaremos una respuesta a tu correo a la brevedad</p>
                </div>
                <form action="talento form-group" onSubmit={HandleSubmit}>
                    <label htmlFor="NombreCompleto"> Nombre Completo </label>
                    <input type="text" name="NombreCompleto" id="Nombre" placeholder=" Nombre y Apellido" onChange={HandleInputChange} />
                    <label htmlFor="CorreoElectronico"> Correo Eléctronico </label>
                    <input type="email" name="CorreoElectronico" id="Correo" placeholder="correo@electronico.com" onChange={HandleInputChange} />
                    <label htmlFor="Telefono"> Teléfono </label>
                    <input type="text" name="Telefono" id="Telefono" placeholder="1 2345789" onChange={HandleInputChange} />
                    <label htmlFor="Region"> Región </label>
                    <select name="Region" id="Region" onChange={HandleInputChange}>
                        <option value="tarapaca">Región de Tarapacá</option>
                        <option value="antofagasta"> Región de Antofagasta </option>
                        <option value="atacama"> Región de Atacama </option>
                        <option value="coquimbo"> Región de Coquimbo </option>
                        <option value="valparaiso">Región de Valparaíso </option>
                        <option value="ohiggins"> Región del Libertador General Bernardo O'Higgins</option>
                        <option value="maule"> Región del Maule </option>
                        <option value="biobio"> Región del Biobío</option>
                        <option value="araucania"> Región de La Araucanía </option>
                        <option value="loslagos"> Región de Los Lagos </option>
                        <option value="aysen">Región Aysén del General Carlos Ibáñez del Campo</option>
                        <option value="magallanes"> Región de Magallanes y Antártica Chilena </option>
                        <option value="metropolitana"> Región Metropolitana de Santiago </option>
                        <option value="losríos"> Región de Los Ríos </option>
                        <option value="aricaparinacota"> Región de Arica y Parinacota </option>
                        <option value="ñuble"> Región de Ñuble </option>
                    </select>
                    <label htmlFor="Comuna"> Comuna </label>
                    <select name="Comuna" id="Comuna" onChange={ComunasSelect}>
                        <option value="">Comunas según elección de Select anterior</option>
                    </select>
                    <label htmlFor="Talento"> Cuentanos con que talento quieres aportar </label>
                    <textarea name="Talento" id="talento" cols="40" rows="4" onChange={HandleInputChange}></textarea>
                    <input type="submit" value="enviar" placeholder="Enviar" className="btn mybtn" />
                </form>

            </div>


        </div>
    )
}

export default FormularioTalento;

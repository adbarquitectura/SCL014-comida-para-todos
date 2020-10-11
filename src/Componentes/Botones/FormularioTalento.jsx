import React, { useState } from 'react';
// import Cerrar from '../../img/Cerrar.png';
import './FormularioTalento.css';


/* Definición de estado inicial del form */
// const initialformTalento = {
//     nombre: '',
//     correo: '',
//     telefono: '',
//     region: '',
//     comuna: '',
//     talento: '',
// }

const FormularioTalento = () => {

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
        <div className="form-bg">
            <div className="FormTalento">
                <div className="text">
                    <h3>Regala un poco de talento a las comunidades, ellas te lo agradecerán.</h3>
                    <p>A continuación puedes completar este formulario de inscripción.</p>
                    <p>Te enviaremos una respuesta a tu correo a la brevedad</p>
                </div>
                <form action="talento" onSubmit={HandleSubmit}>
                    <label for="NombreCompleto"> Nombre Completo </label>
                    <input type="text" name="NombreCompleto" id="Nombre" placeholder=" Nombre y Apellido" onChange={HandleInputChange} />
                    <label for="CorreoElectronico"> Correo Eléctronico </label>
                    <input type="email" name="CorreoElectronico" id="Correo" placeholder="correo@electronico.com" onChange={HandleInputChange} />
                    <label for="Telefono"> Teléfono </label>
                    <input type="text" name="Telefono" id="Telefono" placeholder="1 2345789" onChange={HandleInputChange} />
                    <label for="Region"> Región </label>
                    <select name="Region" id="Region">
                        <option value="Tarapaca">Región de Tarapacá</option>
                        <option value="Antofagasta"> Región de Antofagasta </option>
                        <option value="Atacama"> Región de Atacama </option>
                        <option value="Coquimbo"> Región de Coquimbo </option>
                        <option value="Valparaiso">Región de Valparaíso </option>
                        <option value="O'Higgins"> Región del Libertador General Bernardo O'Higgins</option>
                        <option value="Maule"> Región del Maule </option>
                        <option value="Biobio"> Región del Biobío</option>
                        <option value="Araucania"> Región de La Araucanía </option>
                        <option value="Los Lagos"> Región de Los Lagos </option>
                        <option value="Aysen">Región Aysén del General Carlos Ibáñez del Campo</option>
                        <option value="Magallanes"> Región de Magallanes y Antártica Chilena </option>
                        <option value="Metropolitana"> Región Metropolitana de Santiago </option>
                        <option value="Los Ríos"> Región de Los Ríos </option>
                        <option value="AricaParinacota"> Región de Arica y Parinacota </option>
                        <option value="Ñuble"> Región de Ñuble </option>
                    </select>
                    <label for="Comuna"> Comuna </label>
                    <select name="Comuna" id="Comuna">
                        <option value="">Comunas según elección de Select anterior</option>
                    </select>
                    <label for="Talento"> Cuentanos con que talento quieres aportar </label>
                    <textarea name="Talento" id="talento" cols="40" rows="4" onChange={HandleInputChange}></textarea>
                    <input type="submit" value="enviar" placeholder="Enviar" className="btn mybtn" />
                </form>

            </div>


        </div>
    )
}

export default FormularioTalento;

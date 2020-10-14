import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BotonGeneral from '../Botones/BotonGeneral';
import BotonSecundario from '../Botones/BotonSecundario';
import ModalGeneral from '../Modales/ModalGeneral';
import FotoAlmuerzo from '../../img/IMGRegalaAlmuerzo.jpg';
import './RegalaUnAlmuerzo.css';
import BotonLink from '../Botones/BotonLink';

/* Función Botón 'Regala un almuerzo' */
const clickBton = () => {
    window.open('https://yodono.cl/proyecto/207/CultivaComidaparaTods');
};

const RegalaUnAlmuerzo = (props) => {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <div className="contenedorGeneralRegalaAlmuerzo">
            <div className="boxTituloCarrusel">
                <div className="viñetaYellow"></div>
                <a name={props.contenidoInfo}><h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2></a>
            </div>
            <div className="contenedorboxRegalaAlmuerzo">
                <Container>
                    <Row>
                        <Col>
                            <div className="textoalineadoIzquierda">
                                <h3> Aseguremos un plato nutritivo y balanceado a quien no puede tenerlo.</h3>
                                <p>
                                    Con un aporte de $3.000 pesos, podemos asegurarle día a día un alimento nutritivo,
                                    de calidad y rico a muchas personas que en estos momentos los están necesitando.
                                </p>
                                <p>Un pequeño gesto le dará la energía y alegría a quien más le falta.</p>
                            </div>

                            <div className="btn-gral">
                                < BotonGeneral
                                    contenidobtn={'Regala un almuerzo'}
                                    funcion={() => setModalShow(true)}
                                />
                                < BotonLink
                                    contenidobtn={'Aporta como Restaurant'}
                                    anclaLinkTo={'#¿Cómo aportar si eres un Restaurant?'}
                                />
                            </div>
                        </Col>

                        <Col>
                            <div className="fotoAlmuerzo">
                                <img src={FotoAlmuerzo} alt="Foto" />
                            </div>
                        </Col>
                    </Row>
                </Container >

                <ModalGeneral
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    tituloModal={'Será redireccionado al sitio de yodono.cl para completar la donación.'}
                    contenidoModal={' Tu aporte generará un plato de alimento nutritivo, para alguien que no lo tiene :).'}
                    contenidoBotonModal={'Entendido'}
                    funcionBotonModal={clickBton}
                />

            </div>

        </div >
    )
}

export default RegalaUnAlmuerzo

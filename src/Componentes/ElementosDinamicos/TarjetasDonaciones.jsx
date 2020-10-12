import React from 'react';
import TarjetasConImagenes from './TarjetasConImagenes';

import donarDineroIcon from '../../img/donarDineroIcon.png';
import donarRestaurantIcon from '../../img/donarRestaurantIcon.png';

import './TarjetasDonaciones.css';
import { Col, Container, Row } from 'react-bootstrap';
import BotonGeneral from '../Botones/BotonGeneral';
import ModalGeneral from '../Modales/ModalGeneral';

/* Función Botón 'Regala un almuerzo' */
const clickBton = () => {
    window.open('https://yodono.cl/proyecto/207/CultivaComidaparaTods');
};

const TarjetasDonaciones = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="contenedorGeneralTarjetasDonarciones">            
            <Container>
                <Row>
                    <Col>
                        <div className="boxTarjetasDonacion">
                            <TarjetasConImagenes
                                imgSrc={donarDineroIcon}
                                tituloImg={'¿Quieres aportar con dinero?'}
                                parrafoImg={'Con un aporte de $3.000 pesos, podemos asegurarle día a día un alimento nutritivo, de calidad y rico a muchas personas que en estos momentos los están necesitando. Un pequeño gesto le dará la energía y alegría a quien más le falta.'}
                            />
                            < BotonGeneral
                                contenidobtn={'Dona $3.000 para un almuerzo'}
                                funcion={() => setModalShow(true)}
                            />
                        </div>
                    </Col>

                    <Col>
                        <div className="boxTarjetasDonacion">
                            <TarjetasConImagenes
                                imgSrc={donarRestaurantIcon}
                                tituloImg={'¿Quieres aportar como restaurant?'}
                                parrafoImg={'Los aportes desde los restaurantes son parte fundamental para que toda esta hermosa labor se vuelva realidad, los restaurantes colaboran, junto con nosotros a favor de las comunidades vulnerables, no solo llevándoles alimentos.'}
                            />
                            < BotonGeneral
                                contenidobtn={'Conoce más'}
                                funcion={() => setModalShow(true)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <ModalGeneral
                show={modalShow}
                onHide={() => setModalShow(false)}
                tituloModal={'Será redireccionado al sitio de yodono.cl para completar la donación.'}
                contenidoModal={' Tu aporte generará un plato de alimento nutritivo, para alguien que no lo tiene :).'}
                contenidoBotonModal={'Entendido'}
                funcionBotonModal={clickBton}
            />
        </div>
    )
};

export default TarjetasDonaciones;
import React from 'react';
import './ManerasAportarSeccionDesp.css';
import { Col, Container, Row } from 'react-bootstrap';
import BotonGeneral from '../Botones/BotonGeneral';

const ManerasAportarSeccionDesp = (props) => {
    return (
        <div className="containerSeccionDespliegue"
            style={props.imgFondoSeccion}
        >
            <Container>
                <Row>
                    <Col>

                    </Col>

                    <Col>
                        <div className="boxTextoSeccionDespliegue">
                            <h3>{props.tituloSeccionDespliegue}</h3>
                            <p>{props.parrafoSeccionDespliegue}</p>
                            < BotonGeneral
                                contenidobtn={props.contenidoBotonSeccionDespliegue}
                                funcion={props.funcionBotonSeccionDespliegue}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManerasAportarSeccionDesp;


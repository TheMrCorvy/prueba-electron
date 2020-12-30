import React, { Fragment, Component } from 'react';
import { Col, Row, Button, Modal, ModalBody } from 'reactstrap';

export default class QuienesSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalLarge: false
        };
        this.toggleModalLarge = this.toggleModalLarge.bind(this);
    }
    toggleModalLarge() {
        this.setState({
            modalLarge: !this.state.modalLarge
        });
    }
    render() {
        return (
            <Fragment>
                <div className="container-fluid pt-5 px-5" id="quienes-somos">
                    <Row>
                        <Col lg="6">
                            <div className="p-0 p-lg-5 mb-5">
                                <img
                                    src={require('../../assets/imagenes/folleto.jpeg')}
                                    alt="alt"
                                    className="img-rised rounded img-fluid"
                                />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="p-0 p-lg-5">
                                <h2 className="h2">Acerca de Nosotros</h2>
                                <p>
                                    Somos un Grupo de Profesionales con amplio conocimiento en el
                                    mercado agroveterinario Argentino y con una trayectoria de más
                                    de 30 años.
                                </p>
                                <p>
                                    LABORATORIO AGROMIX ARGENTINA se dedica a la búsqueda constante
                                    del desarrollo de formulaciones para las carencias de Vitaminas
                                    y Minerales, para mejorar la producción ganadera lechera y de
                                    carne de bovinos, ovinos, caprinos y porcinos.
                                </p>
                                <p>
                                    Hemos desarrollado una importante línea de Antiparasitarios,
                                    Antibioticos, Calcificantes, Engordadores y Vitamínicos que han
                                    demostrado su gran capacidad terapéutica y nutricional con
                                    calidad y distinción que nos caracteriza.
                                </p>
                                <p>
                                    LABORATORIO AGROMIX ARGENTINA da soluciones mediante sus
                                    productos generando rendimientos que permitan aumentar su
                                    competitividad al productor agropecuario mejorando los animales
                                    con altas exigencias nutricionales en sistemas extensivos de
                                    producción.
                                </p>
                                <h3 className="h3">Por Qué Comprarnos?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laboriosam aliquam, tempora eligendi maiores fugiat, praesentium
                                    quibusdam totam culpa expedita, quae inventore itaque pariatur
                                    est ad maxime consectetur commodi laborum illum?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                                    eum illo, tempora ab commodi error nostrum aperiam nihil
                                    molestias earum neque rem in similique perferendis accusantium
                                    fugit soluta sint reiciendis.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="container pt-5 px-5">
                    <Row>
                        <Col lg="6" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/foto-1.jpeg')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="6" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/foto-6.jpeg')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="12" className="my-5 d-flex justify-content-center">
                            <img
                                src={require('../../assets/imagenes/logos/agromix.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                                style={{ maxWidth: 200 }}
                            />
                        </Col>
                        <Col lg="6" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/foto-4.jpeg')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="6" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/foto-5.jpeg')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="12" className="text-right my-3">
                            <Button
                                color="success"
                                className="text-uppercase"
                                onClick={this.toggleModalLarge}>
                                ver más imágenes
                            </Button>
                        </Col>
                    </Row>
                </div>
                <Modal
                    isOpen={this.state.modalLarge}
                    toggle={this.toggleModalLarge}
                    size="lg"
                    style={{ marginTop: 100 }}>
                    <ModalBody>
                        <Row>
                            <Col lg="6" className="mt-3">
                                <img
                                    src={require('../../assets/imagenes/foto-7.jpeg')}
                                    alt="alt"
                                    className="img-rised rounded img-fluid"
                                />
                            </Col>
                            <Col lg="6" className="mt-3">
                                <img
                                    src={require('../../assets/imagenes/foto-8.jpeg')}
                                    alt="alt"
                                    className="img-rised rounded img-fluid"
                                />
                            </Col>
                            <Col lg="6" className="mt-3">
                                <img
                                    src={require('../../assets/imagenes/foto-9.jpeg')}
                                    alt="alt"
                                    className="img-rised rounded img-fluid"
                                />
                            </Col>
                            <Col lg="6" className="mt-3">
                                <img
                                    src={require('../../assets/imagenes/foto-10.jpeg')}
                                    alt="alt"
                                    className="img-rised rounded img-fluid"
                                />
                            </Col>
                            <Col lg="12" className="text-right my-3">
                                <Button
                                    color="first"
                                    className="mt-3 text-uppercase"
                                    onClick={this.toggleModalLarge}>
                                    volver
                                </Button>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

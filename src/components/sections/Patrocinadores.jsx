import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

export default class Patrocinadores extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-around d-flex align-items-center">
                        <Col lg="12">
                            <h2 className="h2 text-center mb-5">Nuestros Patrocinadores</h2>
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/bioinnovo.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/biscayart.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid my-auto py-auto"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/bsaf.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/descarga.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/durflex.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/providean.jpeg')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/purina.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/royalcanin.jpg')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/syntek.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                        <Col lg="2" className="mt-3">
                            <img
                                src={require('../../assets/imagenes/logos/zoovet.png')}
                                alt="alt"
                                className="img-rised rounded img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

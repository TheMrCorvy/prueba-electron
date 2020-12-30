import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import hero8 from './assets/imagenes/wallpaper.jpeg';

import { Button } from 'reactstrap';

import QuienesSomos from './components/sections/QuienesSomos';
import Patrocinadores from 'components/sections/Patrocinadores';
import NuestrosProductos from 'components/sections/NuestrosProductos';
import Contacto from 'components/sections/Contacto';

const LandingPage = () => {
    return (
        <Fragment>
            <div className="rm-padding-wrapper">
                <div className="hero-wrapper bg-composed-wrapper min-vh-100 bg-premium-dark pt-5">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                        <div
                            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
                            style={{ backgroundImage: 'url(' + hero8 + ')' }}
                        />
                        <div className="bg-composed-wrapper--bg bg-vicious-stance opacity-5" />
                        <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-lg-8 px-0 mx-auto d-flex align-items-center">
                                        <div className="text-center">
                                            <div className="px-4 px-sm-0 text-white mt-5">
                                                <h1 className="display-2 mb-5 font-weight-bold">
                                                    Agromix Buenos Aires
                                                </h1>
                                                <p className="font-size-xl text-white mb-3">
                                                    A pesar de todo seguimos apostando a nuestro
                                                    país. Más de 30 años junto al campo!!
                                                </p>
                                                <div className="pt-5">
                                                    <Button
                                                        onClick={() =>
                                                            document
                                                                .getElementById('quienes-somos')
                                                                .scrollIntoView({
                                                                    block: 'start',
                                                                    behavior: 'smooth'
                                                                })
                                                        }
                                                        color="link"
                                                        className="mt-4 btn-link-first">
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icon={['fas', 'chevron-down']}
                                                                size="4x"
                                                            />
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <QuienesSomos />
                <div className="px-0 py-5 mt-5 container-fluid">
                    <Patrocinadores />
                </div>
                <div className="mt-5 pt-5" id="nuestros-productos">
                    <div className="px-0 py-5 mt-5 container-fluid bg-secondary">
                        <NuestrosProductos />
                    </div>
                </div>
                <div className="px-0 py-5 mt-5 container-fluid" id="contacto">
                    <Contacto />
                </div>
            </div>
        </Fragment>
    );
};

export default LandingPage;

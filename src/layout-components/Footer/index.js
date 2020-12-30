import React, { Fragment, Component } from 'react';

import { Nav, NavItem, Button } from 'reactstrap';

class Footer extends Component {
    goToSection = section => {
        if (section === 'inicio') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            document.getElementById(section).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    };
    render() {
        return (
            <Fragment>
                <div className="app-footer-wrapper mt-5">
                    <div className="bg-secondary pb-5">
                        <div className="container pt-sm-0 pt-md-5">
                            <Nav className="nav-transparent justify-content-center">
                                <NavItem>
                                    <Button
                                        onClick={() => this.goToSection('inicio')}
                                        color="link"
                                        className="m-3 btn-link-warning">
                                        <span>Inicio</span>
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button
                                        onClick={() => this.goToSection('quienes-somos')}
                                        color="link"
                                        className="m-3 btn-link-warning">
                                        <span>Quiénes Somos</span>
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button
                                        onClick={() => this.goToSection('nuestros-productos')}
                                        color="link"
                                        className="m-3 btn-link-warning">
                                        <span>Nuestros Productos</span>
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button
                                        onClick={() => this.goToSection('contacto')}
                                        color="link"
                                        className="m-3 btn-link-warning">
                                        <span>Contacto</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                            <div className="px-0 mt-4 col-lg-12 col-md-8 col-sm-12 mx-auto text-center">
                                <p className="font-size-lg">
                                    © 2020 Agromix S.A. Buenos Aires. <br />{' '}
                                    <small>Este sitio web fue hecho por</small>{' '}
                                    <Button
                                        href="http://corvalangonzalo.xyz"
                                        target="_blank"
                                        color="link"
                                        className="m-3 btn-link-first">
                                        <span>Gonzalo Salvador Corvalán</span>
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;

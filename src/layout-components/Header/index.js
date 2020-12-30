import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            mouseOverTwitter: false,
            mouseOverFacebook: false,
            mouseOverInstagram: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    goToSection = (e, section) => {
        e.preventDefault();
        document.getElementById(section).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    handleMouseOver = boton => {
        switch (boton) {
            case 'mouse on facebook':
                this.setState({
                    mouseOverFacebook: true
                });
                break;
            case 'mouse on twitter':
                this.setState({
                    mouseOverTwitter: true
                });
                break;
            case 'mouse on instagram':
                this.setState({
                    mouseOverInstagram: true
                });
                break;

            default:
                break;
        }
    };

    handleMouseOut = boton => {
        switch (boton) {
            case 'mouse out of facebook':
                this.setState({
                    mouseOverFacebook: false
                });
                break;
            case 'mouse out of twitter':
                this.setState({
                    mouseOverTwitter: false
                });
                break;
            case 'mouse out of instagram':
                this.setState({
                    mouseOverInstagram: false
                });
                break;

            default:
                break;
        }
    };

    render() {
        return (
            <div>
                <Navbar
                    color="primary"
                    fixed="top"
                    light
                    expand="md"
                    className="text-white py-3"
                    style={{
                        boxShadow:
                            '0 0.22rem 0.525rem rgba(60, 68, 177, 0.4), 0 0.0625rem 0.385rem rgba(60, 68, 177, 0.54)'
                    }}>
                    <Container>
                        <NavbarBrand href="/" className="text-white">
                            Agromix SA Buenos Aires
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <a
                                        href="/"
                                        onClick={e => this.goToSection(e, 'quienes-somos')}
                                        className="nav-link text-white">
                                        Quiénes Somos
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a
                                        href="/"
                                        onClick={e => this.goToSection(e, 'nuestros-productos')}
                                        className="nav-link text-white">
                                        Nuestros Productos
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a
                                        href="/"
                                        onClick={e => this.goToSection(e, 'contacto')}
                                        className="nav-link text-white">
                                        Contacto
                                    </a>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret className="text-white">
                                        Nuestras Redes Sociales
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem
                                            className={
                                                this.state.mouseOverFacebook ? 'text-first' : ''
                                            }
                                            onMouseOver={() =>
                                                this.handleMouseOver('mouse on facebook')
                                            }
                                            onMouseOut={() =>
                                                this.handleMouseOut('mouse out of facebook')
                                            }>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                className="font-size-xxl mr-3"
                                            />
                                            Facebook
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            className={
                                                this.state.mouseOverTwitter ? 'text-first' : ''
                                            }
                                            onMouseOver={() =>
                                                this.handleMouseOver('mouse on twitter')
                                            }
                                            onMouseOut={() =>
                                                this.handleMouseOut('mouse out of twitter')
                                            }>
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                className="font-size-xxl mr-3"
                                            />
                                            Twitter
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            className={
                                                this.state.mouseOverInstagram ? 'text-first' : ''
                                            }
                                            onMouseOver={() =>
                                                this.handleMouseOver('mouse on instagram')
                                            }
                                            onMouseOut={() =>
                                                this.handleMouseOut('mouse out of instagram')
                                            }>
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                className="font-size-xxl mr-3"
                                            />
                                            Instagram
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;

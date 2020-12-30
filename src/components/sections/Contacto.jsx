import EmailForm from "components/Email/EmailForm"
import React, { Fragment, Component } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

export default class Contacto extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Fragment>
				<Container className="pt-5">
					<Row>
						<Col lg="12">
							<Card
								className="card-box bg-light"
								style={{ border: "none", boxShadow: "none" }}
							>
								<CardBody>
									<h2 className="h2 text-center mb-3">
										¿Cómo Puede Encontrarnos?
									</h2>
									<ul className="row">
										<li className="mt-5 col-md-5 offset-md-1">
											<h4 className="h4">
												Dirección: <br />{" "}
												<small className="text-first">
													Riobamba 185 (Capital
													Federal, BA, Argentina)
												</small>
											</h4>
										</li>
										<li className="mt-5 col-lg-6">
											<h4 className="h4">
												Email: <br />{" "}
												<small className="text-first">
													zoomixsrl@hotmail.com
												</small>
											</h4>
										</li>
										<li className="mt-5 col-md-5 offset-md-1">
											<h4 className="h4">
												Número de Teléfono (Primera
												Opción): <br />
												<small className="text-first">
													+54 11 4371-9398
												</small>
											</h4>
										</li>
										<li className="mt-5 col-lg-6">
											<h4 className="h4">
												Número de Teléfono (Segunda
												Opción): <br />
												<small className="text-first">
													+54 11 4372-9770
												</small>
											</h4>
										</li>
									</ul>
								</CardBody>
							</Card>
						</Col>
						<Col lg="12" className="mt-5">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6567.76346578547!2d-58.393448!3d-34.607152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac26ca7b967%3A0xd55f7254730fef3f!2sRiobamba%20185%2C%20C1025ABC%20CABA!5e0!3m2!1ses-419!2sar!4v1600175131781!5m2!1ses-419!2sar"
								width="100%"
								height="450"
								frameBorder="0"
								style={{ border: 0 }}
								allowFullScreen=""
								aria-hidden="false"
								tabIndex="0"
								title="agromix"
							></iframe>
						</Col>
						<Col lg="8" className="mt-5">
							<EmailForm />
						</Col>
						<Col lg="4" className="mt-5">
							<img
								src={require("../../assets/imagenes/catalogo.jpeg")}
								alt="alt"
								className="img-rised rounded img-fluid"
							/>
						</Col>
					</Row>
				</Container>
			</Fragment>
		)
	}
}

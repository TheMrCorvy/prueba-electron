import React from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
	faHorseHead,
	faSyringe,
	faBolt,
	faVial,
	faSeedling,
	faChevronRight,
	faTractor,
} from "@fortawesome/free-solid-svg-icons"

export default function NuestrosProductos() {
	return (
		<Container>
			<Row className="justify-content-around">
				<Col lg="12" className="text-center">
					<h2 className="h2">Nuestros Productos</h2>
				</Col>
				<Col lg="4" className="my-3">
					<Card className="bg-brand-dribbble text-white text-center">
						<CardBody>
							<h3 className="h3">Id Animales</h3>
							<FontAwesomeIcon
								icon={faHorseHead}
								size="4x"
								className="mt-3"
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" className="my-3">
					<Card className="bg-first text-white text-center">
						<CardBody>
							<h3 className="h3">Instrumental Veterinario</h3>
							<FontAwesomeIcon
								icon={faSyringe}
								size="4x"
								className="mt-3"
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" className="my-3">
					<Card className="bg-danger text-white text-center">
						<CardBody>
							<h3 className="h3">Electrificación Rural</h3>
							<FontAwesomeIcon
								icon={faBolt}
								size="4x"
								className="mt-3"
							/>
							<h5 className="h5 mt-4">
								Alambres, Cables electroplásticos,
								Energizadores.
							</h5>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" className="my-3">
					<Card className="bg-info text-white text-center">
						<CardBody>
							<h3 className="h3">Agroquímicos</h3>
							<FontAwesomeIcon
								icon={faVial}
								size="4x"
								className="mt-3"
							/>
							<h5 className="h5 mt-4">
								Herbicidas, Insecticidas, Fertilizantes,
								Curasemillas e Inoculantes Fungicidas.
							</h5>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" className="my-3">
					<Card className="bg-success text-white text-center">
						<CardBody>
							<h3 className="h3">Semillas</h3>
							<FontAwesomeIcon
								icon={faSeedling}
								size="4x"
								className="mt-3"
							/>
							<br />
							<a
								href="http://www.biscayart.com/pdf/BiscayartCatalogo2020LQ.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-link text-white h5"
							>
								<u>Ver Catálogo Completo</u>
								<FontAwesomeIcon
									icon={faChevronRight}
									size="1x"
									className="ml-3"
								/>
							</a>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" className="my-3">
					<Card className="bg-warning text-white text-center">
						<CardBody>
							<h3 className="h3">Artículos Rurales</h3>
							<FontAwesomeIcon
								icon={faTractor}
								size="4x"
								className="mt-3"
							/>
							<h5 className="h5 mt-4">
								Guantes, Aplicadores de caravanas.
							</h5>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

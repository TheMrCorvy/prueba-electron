import React, { Fragment, Component } from "react"
import {
	Card,
	CardBody,
	Col,
	Row,
	Form,
	FormGroup,
	Input,
	Label,
	Button,
	Alert,
} from "reactstrap"
import emailjs from "emailjs-com"

export default class EmailForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			success: false,
			error: false,
			loading: false,
		}
	}
	sendEmail = (e) => {
		e.preventDefault()

		this.setState({
			success: false,
			error: false,
			loading: true,
		})

		emailjs
			.sendForm(
				"service_63lapnq", //service id
				"template_t1o6o8i", //template id
				e.target, //el formulario tiene que tener los campos con los mismos nombres que los que van en la plantilla del mail
				"user_mMNITIgF6TFcu7x2W2gCo" //el user id
			)
			.then(
				(result) => {
					this.setState({
						success: true,
						loading: false,
					})
					console.log(result)
				},
				(error) => {
					this.setState({
						error: true,
						loading: false,
					})
					console.log(error)
				}
			)

		e.target.reset()
	}
	render() {
		return (
			<Fragment>
				<Card>
					<CardBody>
						<Form onSubmit={(e) => this.sendEmail(e)}>
							<Row>
								<Col lg="12">
									<h2 className="h2 text-center">
										Envíenos su Consulta
									</h2>
								</Col>
								<Col lg="6">
									<FormGroup>
										<Label>Su Nombre Completo:</Label>
										<Input
											type="text"
											name="name"
											placeholder="Ingrese su Nombre"
										/>
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<Label>Su Email:</Label>
										<Input
											type="email"
											name="email"
											placeholder="Ingrese su Email"
										/>
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<Label>Asunto de su Consulta:</Label>
										<Input
											type="text"
											name="subject"
											placeholder="Ingrese el Asunto"
										/>
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<Label>Su Teléfono:</Label>
										<Input
											type="text"
											name="phoneNumber"
											placeholder="Ingrese su Número de Teléfono"
										/>
									</FormGroup>
								</Col>
								<Col lg="12">
									<FormGroup>
										<FormGroup>
											<Label>Su Consulta: </Label>
											<Input
												type="textarea"
												name="message"
												rows="5"
												placeholder="Ingrese la consulta que desea enviar"
											/>
										</FormGroup>
									</FormGroup>
								</Col>
								<Col lg="12" className="text-right">
									<Button
										color="link"
										className="m-2 btn-link-success"
									>
										<span>ENVIAR CONSULTA</span>
									</Button>
								</Col>
							</Row>
						</Form>
						{this.state.success && (
							<Alert color="success">
								<strong>Éxito!</strong> Su consulta fue enviada
								exitosamente.
							</Alert>
						)}
						{this.state.error && (
							<Alert color="danger">
								<strong>Hubo un error...</strong> Ocurrió un
								error al enviar su consulta.
							</Alert>
						)}
						{this.state.loading && (
							<Alert color="first">
								<strong>Cargando...</strong> Por favor espere.
							</Alert>
						)}
					</CardBody>
				</Card>
			</Fragment>
		)
	}
}

import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: '',
		sent: false
	};

	handleSubmit(e) {
		e.preventDefault();
		const { email, subject, message } = this.state;

		let templateParams = {
			from_name: email,
			to_name: 'dolcizia.selvaggio@gmail.com',
			subject: subject,
			message_html: message
		};

		emailjs.send(
			'gmail',
			'contact-form',
			templateParams,
			'user_JoIzyFnv49OtOrF6X9x5z'
		);

		this.resetForm();
		this.setState({ sent: true });
	}

	resetForm() {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	}

	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value });
	};

	render() {
		return (
			<div>
				<h1 className="display-4 text-white">Contact Me</h1>
				<div
					className="container p-3"
					style={{ backgroundColor: 'rgb(5, 10, 20)' }}
				>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<FormGroup controlid="formBasicEmail">
							<Label className="text-light">Email address</Label>
							<Input
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleChange.bind(this, 'email')}
							/>
						</FormGroup>
						<FormGroup controlid="formBasicName">
							<Label className="text-light">Name</Label>
							<Input
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange.bind(this, 'name')}
							/>
						</FormGroup>
						<FormGroup controlid="formBasicSubject">
							<Label className="text-light">Subject</Label>
							<Input
								type="text"
								name="subject"
								value={this.state.subject}
								onChange={this.handleChange.bind(this, 'subject')}
							/>
						</FormGroup>
						<FormGroup controlid="formBasicMessage">
							<Label className="text-light">Message</Label>
							<Input
								type="textarea"
								name="message"
								value={this.state.message}
								onChange={this.handleChange.bind(this, 'message')}
							/>
						</FormGroup>
						<Button
							color="light"
							type="submit"
							outline
							size="sm"
							style={{ width: 190 }}
						>
							Submit
						</Button>
						{this.state.sent && (
							<small className="d-block pt-3">
								Your message has been sent!
							</small>
						)}
					</Form>
				</div>
			</div>
		);
	}
}

export default ContactForm;

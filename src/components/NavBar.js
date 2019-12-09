import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink as Navlink } from 'react-router-dom';
import { faLinkedinIn, faGithubAlt, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { $ } from 'jquery';

export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};

		$('.navbar a').on('click', function(e) {
			console.log(this.hash);
		});
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar dark expand="md" className="fixed-top NavBar navbar-dark py-2">
				<Navlink to="/" className="navbar-brand">
					Dolcizia Selvaggio
				</Navlink>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className="link mr-2">
							<a href="" className="nav-link">
								<span>[ </span>
								Home
								<span> ]</span>
							</a>
						</NavItem>
						<NavItem className="link mr-2">
							<a href="#projects" className="nav-link">
								<span>[ </span>
								Projects
								<span> ]</span>
							</a>
						</NavItem>
						<NavItem className="link mr-2">
							<a href="#contact" className="nav-link">
								<span>[ </span>
								Contact
								<span> ]</span>
							</a>
						</NavItem>
						<NavItem className="icon mr-2">
							<NavLink
								href="https://www.linkedin.com/in/dolcizia/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
							</NavLink>
						</NavItem>
						<NavItem className="icon mr-2">
							<NavLink href="https://github.com/dolcizia" target="_blank">
								<FontAwesomeIcon icon={faGithubAlt} size="lg" />
							</NavLink>
						</NavItem>
						<NavItem className="icon mr-0">
							<NavLink href="https://github.com/dolcizia" target="_blank">
								<FontAwesomeIcon icon={faCodepen} size="lg" />
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

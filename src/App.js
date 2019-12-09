import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import './scroll';
class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<section id="home">
					<Home />
				</section>
				<section id="projects">
					<ProjectList />
				</section>
				<section id="contact">
					<Contact />
				</section>
				<nav
					id="main-nav"
					className="nav fixed-top navbar navbar-dark navbar-expand-md py-2"
				>
					<a className="navbar-brand scroll" href="#home">
						Dolcizia Selvaggio
					</a>
					<div className="ml-auto navbar-nav">
						<a className="nav-link nav-item scroll active mr-2" href="#home">
							<span>[ </span>
							Home
							<span> ]</span>
						</a>
						<a className="nav-link nav-item scroll mr-2" href="#projects">
							<span>[ </span>
							Projects
							<span> ]</span>
						</a>
						<a className="nav-link nav-item scroll mr-2" href="#contact">
							<span>[ </span>
							Contact
							<span> ]</span>
						</a>
						<a
							href="https://www.linkedin.com/in/dolcizia"
							target="_blank"
							rel="noopener noreferrer"
							className="nav-link nav-item icon mr-2"
						>
							<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
						</a>
						<a
							href="https://github.com/dolcizia"
							target="_blank"
							rel="noopener noreferrer"
							className="nav-link nav-item icon mr-2"
						>
							<FontAwesomeIcon icon={faGithubAlt} size="lg" />
						</a>
					</div>
				</nav>
				<div id="pixel-anchor" />
			</div>
		);
	}
}

export default App;

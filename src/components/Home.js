import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="jumbotron bg-transparent pt-0 m-0">
			<h1 className="display-4 mb-0 text-white">Hi, I'm Dolcizia</h1>
			<p className="lead text-white">
				I love to build cool things in Javascript and PHP.
			</p>
			<div className="buttons">
				<a
					className="btn btn-outline-light hero-scroll"
					href="#projects"
					role="button"
					style={{ width: 190 }}
				>
					View Projects
				</a>
				{'  '}
				<a
					className="btn btn-outline-light hero-scroll"
					href="#contact"
					role="button"
					style={{ width: 190 }}
				>
					Get In Touch
				</a>
			</div>
		</div>
	);
}

import React, { useState } from 'react';
import ProjectTools from './ProjectTools';
import { Modal } from 'reactstrap';

const Project = (props) => {
	const { title, image, code, demo, description, tools, type } = props.project;

	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div className="project">
			<div className="card card-body shadow content p-0 border-0" onClick={toggle}>
				<img src={image} alt={title} />
			</div>
			<Modal isOpen={modal} toggle={toggle} role="dialog" centered size="lg">
				<div className="modal-header border-0 pb-0">
					<h4 className="modal-title m-0 text-white">
						{title}{' '}
						<span className="text-muted" style={{ fontSize: 12 }}>
							{type}
						</span>
					</h4>
					<button
						type="button"
						className="close"
						onClick={toggle}
						aria-label="Close"
					>
						<span aria-hidden="true">
							<i className="far fa-times-circle text-warning" />
						</span>
					</button>
				</div>
				<div className="row modal-body no-gutters">
					<div className="col">
						<a href={demo}>
							<img src={image} alt={title} />
						</a>
					</div>
					<div className="col pl-3 d-flex flex-column justify-content-between">
						<div className="about">
							<h6 className="text-muted mb-1">About</h6>
							<div className="description text-white border">
								<p>{description}</p>
							</div>
						</div>
						<div className="bottom d-flex justify-content-between">
							<div className="tools">
								<h6 className="text-muted mb-1">Tools</h6>
								<ProjectTools tools={tools} />
							</div>
							<div className="buttons border-0">
								<a className="btn btn-outline-info btn-sm" href={code}>
									<i className="fas fa-code" /> code
								</a>
								<a
									className="btn btn-outline-success btn-sm ml-2"
									href={demo}
								>
									<i className="fas fa-desktop" /> demo
								</a>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Project;

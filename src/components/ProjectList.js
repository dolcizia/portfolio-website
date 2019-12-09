import React, { Component } from 'react';
import ProjectTools from './ProjectTools';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import master from '../images/master.jpg';
import nation from '../images/nation.jpg';
import wallboard from '../images/wallboard.jpg';
import mern from '../images/mern.jpg';

export default class ProjectList extends Component {
	projects = {
		'MERN Order Manager': {
			img: mern,
			desc: [
				'This application was designed to be used by local hardware stores and lumber yards that offer material delivery and primarily take orders over the phone or in person.',
				'Node.js and Express connect the React front end with the data stored in MongoDB.',
				'Users can create and manage customers, products, and orders. In addition to being able to choose a customer and specify delivery information, the order page updates line totals and the order total on the fly as products or quantities are changed.'
			],
			code: 'https://github.com/dolcizia/MERN-Order-Manager',
			demo: 'https://evening-lowlands-49237.herokuapp.com/',
			tools: [ 'react', 'nodejs', 'html5', 'css3', 'bootstrap' ],
			type: 'Application'
		},
		'Drywall Nation': {
			img: nation,
			desc: [
				'Drywall Nation is a drywall contracting company that is transitioning into a media publisher. They needed a new website to display their reach and authority in the industry to potential sponsors and advertisers.',
				'This Wordpress theme was custom built using the WP Rig boilerplate, vanilla Javascript and Sass for styling',
				'An integration between WooCommerce and Printful lets the client ship directly or use print-on-demand fulfillment.'
			],
			code: 'https://github.com/dolcizia/ABE-DN-Theme',
			demo: 'https://drywallnation.com',
			tools: [ 'html5', 'sass', 'js', 'php', 'wordpress' ],
			type: 'E-commerce'
		},
		'Wallboard Trim & Tool': {
			img: wallboard,
			desc: [
				'Wallboard Trim & Tool is a distributor of drywall tools in Canada. Their new website needed to feature the brands they sell while maintaining a cohesive overall design.',
				'This site uses WooCommerce to organize and display the large catalog of products. Homepages for each brand can be created and edited very easily through custom post types and Advanced Custom Fields.'
			],
			code: 'https://github.com/dolcizia/ABE-WB-Theme',
			demo: 'https://wallboardtrim.com',
			tools: [ 'html5', 'css3', 'js', 'bootstrap', 'php', 'wordpress' ],
			type: 'Website'
		},
		'Drywall Master': {
			img: master,
			desc: [
				'Drywall Master needed an updated website to match the great new look of their automatic taping tools.',
				'The theme was created using the _s (underscores) boilerplate and Bootstrap 4.'
			],
			code: 'https://github.com/dolcizia/ABE-DM-Theme',
			demo: 'https://drywallmastertools.com',
			tools: [ 'html5', 'css3', 'js', 'bootstrap', 'gulp', 'php', 'wordpress' ],
			type: 'Website'
		}
	};
	render() {
		const tabs = [];
		const tabPanels = [];

		Object.keys(this.projects).forEach((name) => {
			const { img, desc, code, demo, tools, type } = this.projects[name];
			const paragraphs = [];

			tabs.push(
				<Tab
					key={name}
					className="projects-tab react-tabs__tab w-25 p-0 border-0 d-inline-flex align-items-center justify-content-center"
				>
					<img src={img} alt={name} className="" />
					<h4 className="position-absolute text-white">{name}</h4>
				</Tab>
			);

			for (let i = 0; i < desc.length; i++) {
				paragraphs.push(<p key={i}>{desc[i]}</p>);
			}

			tabPanels.push(
				<TabPanel key={name} className="projects-tab-panel">
					<div className="row p-3 no-gutters">
						<div className="col-6">
							<a href={demo} target="_blank">
								<img src={img} alt={name} />
							</a>
						</div>
						<div className="col pl-3 d-flex flex-column justify-content-between">
							<div className="border-0 pb-0">
								<h3 className="m-0 text-white text-left">
									{name}{' '}
									<span className="text-muted" style={{ fontSize: 16 }}>
										{type}
									</span>
								</h3>
							</div>
							<div className="about">
								<h5 className="text-muted mb-1 text-left">About</h5>
								<div
									className="description text-white border p-2 text-left"
									style={{ height: 215, overflowY: 'scroll' }}
								>
									{paragraphs}
								</div>
							</div>
							<div className="bottom d-flex justify-content-between">
								<div className="tools">
									<h5 className="text-muted mb-1 text-left">Tools</h5>
									<ProjectTools tools={tools} />
								</div>
								<div className="buttons border-0">
									<a
										className="btn btn-outline-light btn-sm"
										href={code}
										target="_blank"
										style={{ width: 190 }}
									>
										<i className="fas fa-code" /> code
									</a>
									<a
										className="btn btn-outline-blue btn-sm ml-2"
										href={demo}
										target="_blank"
										style={{ width: 190 }}
									>
										<i className="fas fa-desktop" /> demo
									</a>
								</div>
							</div>
						</div>
					</div>
				</TabPanel>
			);
		});
		return (
			<div className="project-section vh-100 d-flex flex-column">
				<div>
					<h1 className="display-4 mb-0 mt-5 pt-4 text-white">Projects</h1>
					<p className="lead text-white mb-0">
						Check out what I've built recently.
					</p>
				</div>
				<Tabs
					selectedTabClassName="projects-tab--selected"
					selectedTabPanelClassName="projects-tab-panel--selected"
					style={{
						backgroundColor: 'rgb(5, 10, 20)',
						width: '90%',
						margin: 'auto'
					}}
				>
					<TabList
						className="projects-tab-list react-tabs__tab-list m-0 border-0"
						style={{ backgroundColor: '#0064c6' }}
					>
						{tabs}
					</TabList>
					{tabPanels}
				</Tabs>
			</div>
		);
	}
}

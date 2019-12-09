import React from 'react';

const ProjectTools = ({ tools }) => {
	const toolIcons = tools.map((tool, index) => (
		<i
			className={
				tool === 'js' || tool === 'bootstrap' ? `fab fa-${tool}` : `fi fi-${tool}`
			}
			key={index}
			style={{ fontSize: 26, color: 'white', paddingRight: 8 }}
			aria-hidden="true"
		/>
	));

	return (
		<div className="project-tool-icons d-flex align-items-center">{toolIcons}</div>
	);
};

export default ProjectTools;

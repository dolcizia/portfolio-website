import React from 'react';

const Footer = () => {
	return (
		<div className="fixed-bottom bg-dark navbar p-2">
			<p className="mb-0 mx-auto">
				&copy; {new Date().getFullYear()} Dolcizia Selvaggio
			</p>
		</div>
	);
};

export default Footer;

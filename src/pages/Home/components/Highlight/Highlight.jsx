import React from 'react';
import './styles/highlight.css';

const Highlight = ({ highlight }) => {
	console.log(highlight);
	return (
		<div className='highlight-container'>
			<h1>{highlight?.title}</h1>
			<p>{highlight?.description}</p>
		</div>
	);
};

export default Highlight;

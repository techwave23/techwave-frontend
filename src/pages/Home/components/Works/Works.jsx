import React from 'react';
import { texts } from '../../utilities/texts';
import './styles/works.css';
export const Works = () => {
	return (
		<div className='our-works-container'>
			<h1 className='titles'>{texts.ourWorks.title}</h1>
			<p className='descriptions'>{texts.ourWorks.description}</p>
		</div>
	);
};

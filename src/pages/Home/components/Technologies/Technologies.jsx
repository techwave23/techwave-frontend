import React from 'react';
import { texts } from '../../utilities/texts';
import './styles/technologies.css';

export const Technologies = () => {
	return (
		<div className='technologies-container'>
			<h1 className='titles'>{texts.technologies.title}</h1>
			<p className='descriptions'>{texts.technologies.description}</p>
		</div>
	);
};

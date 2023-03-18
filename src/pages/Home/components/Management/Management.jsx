import React from 'react';
import { texts } from '../../utilities/texts';
import cms from '../../../../../public/assets/photos/cms.jpg';
import './styles/management.css';
export const Management = () => {
	return (
		<div className='management-container'>
			<div className='management-container-description'>
				<h1 className='titles'>{texts.management.title}</h1>
				<p className='descriptions'>{texts.management.description}</p>
				<button className='button-primary'>Contact us</button>
			</div>
			<img className='cms-image' src={cms} alt='cms' />
		</div>
	);
};

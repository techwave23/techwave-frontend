import React from 'react';
import { texts } from './utilities/texts';
import './styles/home.css';

const Home = () => {
	return (
		<div className='container'>
			<div className='presentation-container'>
				<h1 className='presentation-title'>{texts.presentation.title}</h1>
				<p className='presentation-description'>
					{texts.presentation.description}
				</p>
				<button className='button-ternary'>Contact us</button>
			</div>
			<div className='our-works-container'>
				<h1 className='titles'>{texts.ourWorks.title}</h1>
				<p className='descriptions'>{texts.ourWorks.description}</p>
			</div>
			<div className='management-container'>
				<h1 className='titles'>{texts.management.title}</h1>
				<p className='descriptions'>{texts.management.description}</p>
				<button className='button-primary'>Contact us</button>
			</div>
			<div className='technologies-container'>
				<h1 className='titles'>{texts.technologies.title}</h1>
				<p className='descriptions'>{texts.technologies.description}</p>
			</div>
			<div className='clients-container'>
				<h1 className='titles'>{texts.clients.title}</h1>
				<p className='descriptions'>{texts.clients.description}</p>
			</div>
		</div>
	);
};

export default Home;

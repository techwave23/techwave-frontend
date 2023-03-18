import React from 'react';
import { texts } from '../../utilities/texts';
import grafica from '../../../../../public/assets/photos/grafica1.jpg';
import grafica2 from '../../../../../public/assets/photos/grafica3.jpg';
import grafica3 from '../../../../../public/assets/photos/grafica4.jpg';
import grafica4 from '../../../../../public/assets/photos/grafica6.jpg';
import grafica5 from '../../../../../public/assets/photos/grafica8.jpg';
import grafica6 from '../../../../../public/assets/photos/grafica9.jpg';
import grafica7 from '../../../../../public/assets/photos/hercules.jpg';
import './styles/works.css';

//Falta modificar esto para que quede mejor lo puse asi para probar las imagenes
//pero deberia poder tener un archivo que las importe y hacer dos maps
//uno con un slide 0 - 4 y otro con 4 - 8

export const Works = () => {
	return (
		<div className='our-works-container'>
			<h1 className='titles'>{texts.ourWorks.title}</h1>
			<p className='descriptions'>{texts.ourWorks.description}</p>
			<div className='top-photo-container'>
				<img className='work-photo' src={grafica} alt='' />
				<img className='work-photo' src={grafica2} alt='' />
				<img className='work-photo' src={grafica3} alt='' />
				<img className='work-photo' src={grafica4} alt='' />
			</div>
			<div className='botton-photo-container'>
				<img className='work-photo' src={grafica4} alt='' />
				<img className='work-photo' src={grafica5} alt='' />
				<img className='work-photo' src={grafica6} alt='' />
				<img className='work-photo' src={grafica7} alt='' />
			</div>
		</div>
	);
};

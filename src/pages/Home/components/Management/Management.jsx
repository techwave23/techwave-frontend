import { NavLink } from 'react-router-dom';
import { texts } from '../../utilities/texts';
import cms from '../../../../../public/assets/photos/cms.jpg';
import './styles/management.css';

//Tengo que mejorar el tema de estilos !!

export const Management = () => {
	return (
		<div className='management-container'>
			<div className='management-container-description'>
				<h1 className='titles'>{texts.management.title}</h1>
				<p className='descriptions'>{texts.management.description}</p>
				<NavLink to='/contact'>
					<button className='button-primary'>Contact us</button>
				</NavLink>
			</div>
			<img className='cms-image' src={cms} alt='cms' />
		</div>
	);
};

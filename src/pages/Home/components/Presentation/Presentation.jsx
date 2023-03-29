import { NavLink } from 'react-router-dom';
import { texts } from '../../utilities/texts';
import './styles/presentation.css';

export const Presentation = () => {
	return (
		<div className='presentation-container'>
			<h1 className='presentation-title'>{texts.presentation.title}</h1>
			<p className='presentation-description'>
				{texts.presentation.description}
			</p>
			<NavLink to='/contact'>
				<button className='button-ternary'>Contact us</button>
			</NavLink>
		</div>
	);
};

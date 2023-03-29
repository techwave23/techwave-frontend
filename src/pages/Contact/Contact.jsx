import FormContact from '../../components/FormContact/FormContact';
import { texts } from '../Home/utilities/texts';
import './styles/contact.css';

const Contact = () => {
	return (
		<div className='contact-container'>
			<h2 className='contact-title'>{texts.contact.title}</h2>
			<p className='contact-text'>{texts.contact.description}</p>
			<FormContact />
		</div>
	);
};

export default Contact;

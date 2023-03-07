import { useForm } from 'react-hook-form';
import './styles/formContact.css';
import { validateForm, messageSend } from '../../config/validateForm';
import { messages } from '../../config/configForm';

const FormContact = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = contactInfo => {
		console.log(contactInfo);
		messageSend(contactInfo);
		reset();
	};

	return (
		<div className='form-container'>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='firstName'>First Name</label>
				<input
					id='firstName'
					name='firstName'
					type='text'
					className={errors.firstName && 'error'}
					{...register('firstName', validateForm('firstName'))}
				/>
				{errors.firstName && <p className='error-msg'>{messages.firstName}</p>}

				<label htmlFor='lastName'>Last Name</label>
				<input
					id='lastName'
					name='lastName'
					type='text'
					className={errors.lastName && 'error'}
					{...register('lastName', validateForm('lastName'))}
				/>
				{errors.lastName && <p className='error-msg'>{messages.lastName}</p>}

				<label htmlFor='email'>Email</label>
				<input
					id='email'
					name='email'
					type='email'
					className={errors.email && 'error'}
					{...register('email', validateForm('email'))}
				/>
				{errors.email && <p className='error-msg'>{messages.email}</p>}

				<label htmlFor='phone'>Phone</label>
				<input
					id='phone'
					name='phone'
					type='tel'
					className={errors.phone && 'error'}
					{...register('phone', validateForm('phone'))}
				/>
				{errors.phone && <p className='error-msg'>{messages.phone}</p>}

				<label htmlFor='message'>Message</label>
				<textarea
					id='message'
					name='message'
					type='text'
					className={errors.message && 'error'}
					{...register('message', {
						required: messages.required,
						message: messages.message,
					})}
				/>
				{errors.message && <p className='error-msg'>{messages.message}</p>}

				<input
					type='submit'
					value='Send Message'
					className='button-hightlight'
				/>
			</form>
		</div>
	);
};

export default FormContact;

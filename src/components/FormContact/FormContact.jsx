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
				<input
					id='name'
					name='name'
					placeholder='Name'
					type='text'
					className={errors.name && 'error'}
					{...register('name', validateForm('name'))}
				/>
				{errors.name && <p className='error-msg'>{messages.name}</p>}

				<input
					id='email'
					name='email'
					placeholder='Email'
					type='email'
					className={errors.email && 'error'}
					{...register('email', validateForm('email'))}
				/>
				{errors.email && <p className='error-msg'>{messages.email}</p>}

				<textarea
					id='message'
					name='message'
					placeholder='Message'
					type='text'
					rows={8}
					className={errors.message && 'error'}
					{...register('message', {
						required: messages.required,
						message: messages.message,
					})}
				/>
				{errors.message && <p className='error-msg'>{messages.message}</p>}
				<button className='button-primary'>Send</button>
			</form>
		</div>
	);
};

export default FormContact;

import { useForm } from 'react-hook-form';
import './styles/formContact.css';

const messages = {
	required: 'This field is required',
	firstName: 'Wrong format for first name',
	lastName: 'Wrong format for last name',
	email: 'Enter a correct email',
	phone: 'Enter a correct phone number',
	message: 'Enter at least 4 characters',
};

const patterns = {
	firstName: /^[A-Za-z]+$/i,
	lastName: /^[A-Za-z]+$/i,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
	phone: /^[0-9]+$/i,
};

const FormContact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = contactInfo => {
		console.log(contactInfo);
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
					{...register('firstName', {
						required: messages.required,
						minLength: {
							value: 4,
						},
						pattern: {
							value: patterns.firstName,
							message: messages.firstName,
						},
					})}
				/>
				{errors.firstName && <p>{messages.firstName}</p>}

				<label htmlFor='lastName'>Last Name</label>
				<input
					id='lastName'
					name='lastName'
					type='text'
					className={errors.lastName && 'error'}
					{...register('lastName', {
						required: messages.required,
						minLength: {
							value: 4,
						},
						pattern: {
							value: patterns.lastName,
							message: messages.lastName,
						},
					})}
				/>
				{errors.lastName && <p>{messages.lastName}</p>}

				<label htmlFor='email'>Email</label>
				<input
					id='email'
					name='email'
					type='email'
					className={errors.email && 'error'}
					{...register('email', {
						required: messages.required,
						pattern: {
							value: patterns.email,
							message: messages.email,
						},
					})}
				/>
				{errors.email && <p>{messages.email}</p>}

				<label htmlFor='phone'>Phone</label>
				<input
					id='phone'
					name='phone'
					type='tel'
					className={errors.phone && 'error'}
					{...register('phone', {
						required: messages.required,
						minLength: {
							value: 9,
							message: messages.phone,
						},
						maxLength: {
							value: 10,
							message: messages.phone,
						},
						pattern: {
							value: patterns.phone,
							message: messages.phone,
						},
					})}
				/>
				{errors.phone && <p>{messages.phone}</p>}

				<label htmlFor='message'>Message</label>
				<textarea
					id='message'
					name='message'
					type='text'
					className={errors.message && 'error'}
					{...register('message', {
						required: messages.required,
						minLength: {
							value: 4,
							message: messages.message,
						},
						maxLength: {
							value: 100,
							message: messages.message,
						},
					})}
				/>
				{errors.message && <p>{messages.message}</p>}

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

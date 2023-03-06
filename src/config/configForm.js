const messages = {
	required: 'This field is required',
	firstName: 'Wrong format for first name',
	lastName: 'Wrong format for last name',
	email: 'Enter a correct email',
	phone: 'Enter a correct phone number',
	message: 'Field required',
};

const patterns = {
	firstName: /^[A-Za-z]+$/i,
	lastName: /^[A-Za-z]+$/i,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
	phone: /^[0-9]+$/i,
};

export { messages, patterns };

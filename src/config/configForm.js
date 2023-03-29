const messages = {
	required: 'This field is required',
	name: 'Wrong format for name',
	email: 'Enter a correct email',
	message: 'Field required',
};

const patterns = {
	name: /^[A-Za-z]+$/i,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
};

export { messages, patterns };

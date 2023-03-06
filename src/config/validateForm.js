import { messages, patterns } from './configForm';

const validateForm = field => {
	return {
		required: messages.required,
		pattern: {
			value: patterns.field,
			message: messages.field,
		},
	};
};

export { validateForm };

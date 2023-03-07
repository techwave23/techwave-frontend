import { messages, patterns } from './configForm';
import Swal from 'sweetalert2';

const validateForm = field => {
	return {
		required: messages.required,
		pattern: {
			value: patterns.field,
			message: messages.field,
		},
	};
};

const messageSend = message => {
	if (message) {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Message send, thanks!',
			showConfirmButton: false,
			timer: 1800,
			background: '#5a0da7',
			color: '#ffff',
		});
	}
};

export { validateForm, messageSend };

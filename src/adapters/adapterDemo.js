//recibe datos y los convierte en lo que queremos utilizar
//si nuestra api cambia la manera de devolvernos solamente cambiamos este archivo
export const responseAdapter = response => {
	const result = response.map(element => ({
		id: element.id,
		title: element.attributes.title,
		description: element.attributes.description,
		imageLogo: element.attributes.logo.data.attributes.formats.thumbnail.url,
		category: element.attributes.categories.data[0].attributes.category,
	}));
	return result;
};

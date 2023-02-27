export const getProducts = async () => {
	const URL =
		' https://strapi-production-4523.up.railway.app/api/projects?populate=*';

	const resp = await fetch(URL);
	const data = await resp.json();

	return data;
};

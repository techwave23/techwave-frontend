import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Headers from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import './styles/App.css';
import { getProducts } from './services/getProducts';
import { useFetch } from './hooks/useFetch';
import { responseAdapter } from './adapters/adapterDemo';
import Contact from './pages/Contact/Contact';

function App() {
	const [projects, setProjects] = useState([]);
	// const URL =
	// 	' https://strapi-production-4523.up.railway.app/api/projects?populate=*';
	// const { data, isLoading } = useFetch(URL);
	useEffect(() => {
		//esta opcion haciendo la llamada y seteando que hacemos con la data desde aca!!
		getProducts().then(response => setProjects(responseAdapter(response.data)));
		//aca la opcion con el custom Hook use Fetch
		// !isLoading && cardData(data);
	}, []);

	return (
		<div className='App'>
			<Headers />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects projects={projects} />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

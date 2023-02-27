import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Headers from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import './styles/App.css';
import { getProducts } from './services/getProducts';
import { useFetch } from './hooks/useFetch';

function App() {
	const URL =
		' https://strapi-production-4523.up.railway.app/api/projects?populate=*';
	const { data, isLoading } = useFetch(URL);
	const [count, setCount] = useState(0);
	useEffect(() => {
		//esta opcion haciendo la llamada y seteando que hacemos con la data desde aca!!
		getProducts().then(response => console.log(response));
		//aca la opcion con el custom Hook use Fetch
		!isLoading && console.log(data);
	}, [isLoading]);

	return (
		<div className='App'>
			<Headers />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

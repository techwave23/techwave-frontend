import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Headers from './components/Header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects/Projects';
import './styles/App.css';

function App() {
	const [count, setCount] = useState(0);

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

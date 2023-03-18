import React from 'react';
import { Presentation } from './components/Presentation/Presentation';
import { Works, Management, Technologies, Clients } from './components';
import './styles/home.css';

const Home = () => {
	return (
		<div className='container'>
			<Presentation />
			<Works />
			<Management />
			<Technologies />
			<Clients />
		</div>
	);
};

export default Home;

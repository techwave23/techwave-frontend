import React from 'react';
import background from '/assets/background.svg';
import './styles/home.css';

const Home = () => {
	return (
		<div className='container'>
			<img src={background} alt='background' />
			<img src={background} alt='background' />
			<img src={background} alt='background' />
			<img src={background} alt='background' />
			<img src={background} alt='background' />
		</div>
	);
};

export default Home;

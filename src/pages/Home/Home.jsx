import React from 'react';
import background from '/assets/background.svg';
import './styles/home.css';

const Home = () => {
	return (
		<div className='container'>
			<div className='introduction'>
				<div className='introduction-text'>
					<h1>Bring your code, we'll handle the rest.</h1>
					<p>
						Made for any language, for projects big and small. Railway is the
						cloud that takes the complexity out of shipping software.
					</p>
					<button className='button-hightlight'>Start a New Project</button>
				</div>
			</div>
		</div>
	);
};

export default Home;

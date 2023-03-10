import React from 'react';
import Highlight from './components/Highlight/Highlight';
import { highlights } from './utilities/highlights';
import './styles/home.css';

const Home = () => {
	return (
		<div className='container'>
			<div className='introduction'>
				<div className='introduction-text'>
					<h1>Diseño de websites increíbles para tu marca</h1>
					<button className='button-hightlight'>Start a New Project</button>
				</div>
			</div>
			<div className='highlights-container'>
				{highlights.map(highlight => (
					<Highlight highlight={highlight} key={highlight.id} />
				))}
			</div>
		</div>
	);
};

export default Home;

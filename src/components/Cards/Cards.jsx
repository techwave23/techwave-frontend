import React from 'react';
import './styles/cards.css';
import icon from '/assets/icon.svg';

const Cards = () => {
	return (
		<div className='card-container'>
			<img src={icon} alt='' />
			<div className='card-text'>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</p>
			</div>
			<button className='button-hightlight'>Ver mas</button>
		</div>
	);
};

export default Cards;

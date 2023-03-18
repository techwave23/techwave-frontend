import React from 'react';
import { reviews } from '../../utilities/reviews';
import { texts } from '../../utilities/texts';
import './styles/clients.css';
export const Clients = () => {
	return (
		<div className='clients-container'>
			<h1 className='titles'>{texts.clients.title}</h1>
			<p className='descriptions'>{texts.clients.description}</p>
			<div className='box-container'>
				{reviews
					.map(review => (
						<div className='box' key={review.id}>
							<div className='box-header'>
								<img
									className='box-logo'
									src={review.logo}
									alt={review.client}
								/>
								<h3>{review.client}</h3>
							</div>
							<p className='box-description'>{review.review}</p>
						</div>
					))
					.slice(0, 3)}
			</div>
		</div>
	);
};

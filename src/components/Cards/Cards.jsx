import './styles/cards.css';

const Cards = ({ project }) => {
	const { title, description, imageLogo, category } = project;
	return (
		<div className='card-container'>
			<img src={imageLogo} alt='' />
			<div className='card-text'>
				<h3>{title}</h3>
				<p>{description}</p>
				<p>Category: {category}</p>
			</div>
			<button className='button-hightlight'>Ver mas</button>
		</div>
	);
};

export default Cards;

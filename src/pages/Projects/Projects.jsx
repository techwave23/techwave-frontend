import Cards from '../../components/Cards/Cards';
import './styles/projects.css';

const Projects = ({ projects }) => {
	return (
		<div className='projects-container'>
			<div className='title-container'>
				<h2>Projects</h2>
				<p>Estos son todos los trabajos</p>
			</div>
			<div className='projects-cards-container'>
				{projects.map(project => (
					<Cards key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;

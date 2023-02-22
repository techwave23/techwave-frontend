import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import logo from '/assets/logo.png';

const Header = () => {
	return (
		<header>
			<img src={logo} draggable='false' alt='logo' className='header-logo' />

			<nav>
				<NavLink to='/' className='nav-link'>
					Home
				</NavLink>
				<NavLink to='/projects' className='nav-link'>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;

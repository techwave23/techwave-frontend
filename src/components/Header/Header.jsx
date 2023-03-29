import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import logo from '/assets/logo-header.svg';

const Header = () => {
	return (
		<header>
			<NavLink to='/'>
				<img src={logo} draggable='false' alt='logo' className='header-logo' />
			</NavLink>

			<nav className='nav-container'>
				<NavLink to='/' className='nav-link'>
					Home
				</NavLink>
				<NavLink to='/projects' className='nav-link'>
					Projects
				</NavLink>
				<NavLink to='/contact' className='nav-link'>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;

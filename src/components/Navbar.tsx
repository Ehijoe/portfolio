import React from 'react';

import { Link } from 'gatsby';

import { navLink, activeTab, navbar } from './Navbar.module.css';

function Navbar({ active }) {
	const links = ['home', 'projects', 'contact'].map((tab) => {
		return (
			<Link key={tab} className={`${navLink} w-32 flex justify-center items-center text-center` + ((tab === active) ? ` ${activeTab}` : '')}
							to={'/' + ((tab !== 'home') ? tab : "")}>
				<p className='h-min text-slate-900 font-extrabold font-mono text-lg'>{tab.toUpperCase()}</p>
			</Link>
		);
	});
	return (
		<nav className={`w-full h-16 flex flex-row backdrop-blur-sm justify-center ${navbar}`}>
			{links}
		</nav>
	);
}

export default Navbar;

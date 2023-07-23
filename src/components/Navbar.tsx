import React from 'react';

import { Link } from 'gatsby';

function Navbar({ active }) {
	const links = ['home', 'projects', 'resume'].map((tab) => {
		return (
			<Link key={tab} className={'nav-link w-32 backdrop-blur flex justify-center items-center text-center align-middle' + ((tab === active) ? ' bg-blue' : '')}
							to={'/' + ((tab !== 'home') ? tab : "")}>
				<p className='h-min text-slate-600 font-extrabold font-mono text-lg'>{tab.toUpperCase()}</p>
			</Link>
		);
	});
	return (
		<nav className="w-full h-16 flex flex-row backdrop-blur-sm justify-center">
			{links}
		</nav>
	);
}

export default Navbar;

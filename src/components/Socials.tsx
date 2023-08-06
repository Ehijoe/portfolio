import React from 'react';

import { Link } from 'gatsby';

import { linkImage } from './Socials.module.css';

function Socials() {
	const links = [
		{pic: 'linkedin.png', link: 'https://linkedin.com/in/ehijoe'},
		{pic: 'github.png', link: 'https://github.com/Ehijoe'},
		{pic: 'twitter.png', link: 'https://twitter.com/@alikahjoseph'},
	].map((link) => (
		<Link to={link.link} >
			<img src={`/icons/${link.pic}`} className={linkImage} />
		</Link>
	));
	return (
		<div className='flex flex-row gap-2 justify-end content-center'>{links}</div>
	);
}

export default Socials;

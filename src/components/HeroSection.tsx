import React from 'react';

import { heroSectionStyle, nameStyle } from './HeroSection.module.css';

function HeroSection() {
	return (
		<div className={`${heroSectionStyle} flex flex-row-reverse flex-wrap gap-5 justify-center items-center`}>
			<img src="/images/programmer.gif" className="w-80" />
			<div className='h-min m-5 max-w-sm'>
				<h1 className={nameStyle}>Ehi-Joe</h1>
				<h2 className='text-xl text-center font-bold'>Software Engineer</h2>
				<p>Thank you for taking the time to visit my small space on the internet. As you already know, I am a software engineer from Nigeria 🇳🇬. I am someone who is really concerned about people and hence I enjoy solving problems that directly affect people the most. I really enjoy teaching and my most important career goal is to become a recognised expert in my field and offer mentorship to younger developers. I also really look forward to learning and working with web3 as well as augmented and virtual reality technologies. If you think my skills are a fit for a cool project you're working on please reach out, rest assured I'd love to work with you. Cheers 🥂!</p>
			</div>
		</div>
	);
}

export default HeroSection;

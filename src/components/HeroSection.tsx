import React from 'react';

import { Link } from 'gatsby';

import { TypeAnimation } from 'react-type-animation';

import { heroSectionStyle, nameStyle, heroImage, title, description } from './HeroSection.module.css';

import Button from './Button';
import Socials from './Socials';

function HeroSection() {
	return (
		<div className={`${heroSectionStyle} flex flex-row-reverse flex-wrap gap-5 justify-around md:contianer mx-auto items-center`}>
			<img src="/images/programmer.gif" className={heroImage} />
			<div className={`h-min m-5 max-w-lg flex flex-col gap-5 ${description}`}>
				<h1 className={nameStyle}>Hi I'm <TypeAnimation sequence={[
					"Joseph Alikah",
					3000,
					"Ehijoe",
					3000,
				]} repeat={Infinity} preRenderFirstString={true} speed={30} />,</h1>
				<h2 className={title}>a Software Engineer</h2>
				<p>
				Thank you for taking the time to visit my small space on the internet. As you already know, I am a software engineer from Nigeria 🇳🇬. I really enjoy teaching and my most important career goal is to become a recognised expert in my field and offer mentorship to younger developers. If you think my skills are a fit for a cool project you're working on please reach out, rest assured I'd love to work with you. Cheers 🥂!
				</p>
				<div className='flex flex-row justify-between'>
					<Button>
						<Link className="whitespace-nowrap p-10" to='/contact'>Contact me -></Link>
					</Button>
					<Socials />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

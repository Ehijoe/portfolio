import React from 'react';

import { title } from './SectionTitle.module.css';

function SectionTitle({ children }) {
	return (
		<div className={title}>
			{children}
		</div>
	);
}

export default SectionTitle;

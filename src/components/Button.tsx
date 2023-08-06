import React from 'react';

import { buttonStyle } from './Button.module.css';

function Button({ children }) {
	return (
		<div className={buttonStyle}>
			{children}
		</div>
	);
}

export default Button;

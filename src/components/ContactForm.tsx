import React from 'react';

import { container, contactForm, heading, input } from './ContactForm.module.css';

import Button from './Button';

function ContactForm() {
	return (
		<div className={container}>
			<form className={contactForm}>
				<h1 className={heading}>Contact Me!</h1>
				<div className={input} >
					<label for="email" required><span>Email:</span></label>
					<input name="email" required type="email" placeholder="johndoe@example.com" />
				</div>
				<div className={input} >
					<label for="message">Message:</label>
					<textarea name="message" autocomplete="on" type="text" rows="5"></textarea>
				</div>
				<Button className="mx-auto">
					<button type="submit">Send Message</button>
				</Button>
			</form>
		</div>
	);
}

export default ContactForm;

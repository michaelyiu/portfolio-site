import React from 'react';

const Contact = () => {
	return (
		<section id="contact-me" className="contact-me">
			<div className="wrapper">
				<div className="flex-container flex-column">
					<h2 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2200">Contact Me</h2>
				</div>
				<form action="http://www.focuspocus.io/magic/87a5a2bca3413d2641a1966331992fce" method="POST" data-aos="fade-up"
					data-aos-anchor-placement="top-center" data-aos-duration="2200">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" placeholder="name" id="" required />
					<label htmlFor="email">E-mail</label>
					<input type="email" name="email" placeholder="email" id="" required />
					<label htmlFor="subject">Subject</label>
					<input type="text" name="subject" placeholder="subject" id="" required />
					<label htmlFor="message">Message</label>
					<textarea id="" cols="30" rows="10" name="comments"></textarea>
					<input className="generic-button" type="submit" value="Submit" />
				</form>
			</div>
		</section>
	)
}
export default Contact;

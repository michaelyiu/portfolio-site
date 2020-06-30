import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="wrapper">
				<div className="flex-container flex-column">
					<ul className="social-media-list smaller-gap">
						<li className="sm-icon">
							<a href="https://www.linkedin.com/in/michael-yiu-8b120353/">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</li>
						<li className="sm-icon">
							<a href="https://twitter.com/myiu_o">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li className="sm-icon">
							<a href="mailto:michael.o.yiu@gmail.com">
								<i className="far fa-envelope"></i>
							</a>
						</li>
					</ul>
					<div className="cp">
						<p>Built with hearts in Toronto</p>
						<p>Made by Michael Yiu</p>
						<p className="credits">Photo credits: Paul Bassi</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
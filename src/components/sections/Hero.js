import React from 'react';

const Hero = () => {
	return (
		<header>
			<div className="wrapper full-screen">
				<div className="flex-container flex-column full-screen">
					<div className="flex-container flex-end full-width">
						<nav className="main-nav flex-container">

							<div className="logo">
								<img src="images/bluelogo.png" alt="" />
							</div>
							<ul className="main-nav__list">
								<li className="main-nav__list__item">
									<a href="#about-me" rel="smoothscroll">About Me</a>
								</li>
								<li className="main-nav__list__item">
									<a href="#skills" rel="smoothscroll">Skills</a>
								</li>
								<li className="main-nav__list__item">
									<a href="#projects" rel="smoothscroll">Projects</a>
								</li>
								<li className="main-nav__list__item">
									<a href="#contact-me" rel="smoothscroll">Contact Me</a>
								</li>
							</ul>


						</nav>
						<div className="mobile-hamburger">
							<i className="fas fa-bars"></i>
						</div>


						<nav className="mobile-main-nav flex-container">
							<div className="mobile-logo">
								<img src="images/bluelogo.png" alt="" />
							</div>
							<ul className="mobile-main-nav__list">
								<li className="mobile-main-nav__list__item">
									<a href="#about-me" rel="smoothscroll">About Me</a>
								</li>
								<li className="mobile-main-nav__list__item">
									<a href="#skills" rel="smoothscroll">Skills</a>
								</li>
								<li className="mobile-main-nav__list__item">
									<a href="#projects" rel="smoothscroll">Projects</a>
								</li>
								<li className="mobile-main-nav__list__item">
									<a href="#contact-me" rel="smoothscroll">Contact Me</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="flex-container flex-column full-screen header-screen">

						<h1 className="fullName">Michael Yiu</h1>
						<h1 className="title">Developer</h1>

						<ul className="social-media-list">
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
					</div>
				</div>
			</div>
		</header>
	)
}


export default Hero;
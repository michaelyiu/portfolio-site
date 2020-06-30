import React from 'react';
import AOS from 'aos';

const Projects = () => {
	AOS.init();
	return (
		<section id="projects" className="projects">
			<div className="wrapper">
				<div className="flex-container flex-column">
					<h2 data-aos="fade-down" data-aos-duration="1200">Selected Work</h2>
					<div className="flex-container project-list">
						<div className="flex-container project-row">
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
								<img src="images/devshubs.png" alt="" />
							</div>
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
									<h3>DevsHub (GraphQL)</h3>
									<p>A social hub for all developers and technologically forward individiuals!</p>
									<ul className="tech">
										<li>Mongo</li>
										<li>React</li>
										<li>React Hooks</li>
										<li>GraphQL</li>
										<li>Node.js</li>
										<li>Apollo Client</li>
										<li>Lambda</li>
										<li>Netlify</li>
									</ul>
									<div className="flex-container button-container">
										<a href="https://http://devshub.netlify.com/">Check it out!</a>
										<a href="https://github.com/michaelyiu/devshub-server-gql">Backend Repo</a>
										<a href="https://github.com/michaelyiu/devshub-client-gql">Frontend Repo</a>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-container inverse-project-row">
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
									<h3>DevsHub</h3>
									<p>A social hub for all developers and technologically forward individiuals!</p>
									<ul className="tech">
										<li>Mongo</li>
										<li>React</li>
										<li>Express</li>
										<li>Node.js</li>
										<li>Redux</li>
										<li>JavaScript</li>
										<li>Heroku</li>
									</ul>

									<div className="flex-container button-container">
										<a href="https://devshub.herokuapp.com/">Check it out!</a>
										<a href="https://github.com/michaelyiu/devshub">GitHub Repo</a>
									</div>
								</div>
							</div>
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
								<img src="images/devshubs.png" alt="" />
							</div>
						</div>
						<div className="flex-container project-row">
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1200">
								<img src="images/spotify-recreation.png" alt="" />
							</div>
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1200">
									<h3>Spotify Recreation</h3>
									<p>An attempt to recreate the spotify interface and controls! Work In Progress!
									Remember
                                        to turn your sound lower!</p>
									<ul className="tech">
										<li>Node.js</li>
										<li>ReactJS</li>
										<li>JavaScript</li>
										<li>Heroku</li>
										<li>HTML</li>
										<li>CSS3</li>

									</ul>
									<div className="flex-container button-container">
										<a href="https://mpfree-client.herokuapp.com/">Check it out!</a>
										<a href="https://github.com/michaelyiu/mpfree-client">GitHub Repo</a>
									</div>

								</div>
							</div>
						</div>
						<div className="flex-container inverse-project-row">
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
									<h3>Social-R-Us</h3>
									<p>Type a search and get the most up to date searches of posts and pictures!</p>
									<ul className="tech">
										<li>JavaScript</li>
										<li>React</li>
										<li>HTML</li>
										<li>CSS3</li>
									</ul>

									<div className="flex-container button-container">
										<a href="https://socialrus-a69e9.firebaseapp.com/">Check it out!</a>
										<a href="https://github.com/michaelyiu/Social-R-Us">GitHub Repo</a>

									</div>
								</div>
							</div>
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
								<img src="images/social-r-us.png" alt="" />
							</div>
						</div>
						<div className="flex-container project-row">
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1200">
								<img src="images/soundrize-screen.png" alt="" />
							</div>
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1200">
									<h3>Soundrize</h3>
									<p>Match two clips of the same music together!</p>
									<ul className="tech">
										<li>JavaScript</li>
										<li>jQuery</li>
										<li>HTML</li>
										<li>CSS3</li>

									</ul>
									<div className="flex-container button-container">
										<a href="https://vigilant-lumiere-90676d.netlify.app/">Check it out!</a>
										<a href="https://github.com/michaelyiu/memory-game">GitHub Repo</a>
									</div>

								</div>
							</div>
						</div>
						<div className="flex-container inverse-project-row">
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
									<h3>Provincial Parks Finder</h3>
									<p>Find the nearest provincial park near you!(Ontario only)</p>
									<ul className="tech">
										<li>JavaScript</li>
										<li>jQuery</li>
										<li>Firebase</li>
										<li>HTML</li>
										<li>CSS3</li>
									</ul>

									<div className="flex-container button-container">
										<a href="https://michaelyiu.github.io/provincialParks/">Check it out!</a>
										<a href="https://github.com/michaelyiu/provincialParks">GitHub Repo</a>

									</div>
								</div>
							</div>
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1600">
								<img src="images/parkfinder-screen.png" alt="" />
							</div>
						</div>
						<div className="flex-container project-row">
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="1800">
								<img src="images/marvel-screen.png" alt="" />
							</div>

							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1800">
									<h3>Marvel Character Select</h3>
									<p>A simulation of a fighting game character select.</p>
									<ul className="tech">
										<li>ReactJS</li>
										<li>Firebase</li>
										<li>HTML</li>
										<li>CSS3</li>
									</ul>
									<div className="flex-container button-container">
										<a href="https://marvel-fcf75.firebaseapp.com/">Check it out!</a>
										<a href="https://github.com/michaelyiu/marvelCharacters">GitHub Repo</a>

									</div>
								</div>
							</div>
						</div>

						<div className="flex-container inverse-project-row">
							<div className="flex-proj-desc flex-container flex-column justify-center">
								<div className="description aos-animate" data-aos="zoom-out-up" data-aos-duration="1800">
									<h3>Wine ON Dine ON</h3>
									<p>Find the perfect food pairing to go along with your wines.</p>
									<ul className="tech">
										<li>ReactJS</li>
										<li>HTML</li>
										<li>CSS3</li>
									</ul>
									<div className="flex-container button-container">
										<a href="https://wine-on-dine-on.firebaseapp.com/">Check it out!</a>
										<a href="https://github.com/michaelyiu/HackerYou-Project6">GitHub Repo</a>
									</div>
								</div>
							</div>
							<div className="project aos-animate" data-aos="zoom-out-up" data-aos-duration="2700">
								<img src="images/winedine-screen.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;
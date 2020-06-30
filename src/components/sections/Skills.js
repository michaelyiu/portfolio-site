import React from 'react';

const Skills = () => {
	return (
		<section id="skills" className="skills-section">
			<div className="wrapper">
				<div className="relevant-skillset flex-container flex-column">
					<h2 data-aos="fade-up" data-aos-duration="1900">Skills</h2>
					<div className="skills flex-container" data-aos="fade-up" data-aos-duration="3000">
						<div className="skill">
							<i className="icon devicon-react-original colored"></i>
							<p>React</p>
						</div>
						<div className="skill">
							<i className="icon devicon-java-plain colored"></i>
							<p>Java</p>
						</div>
						<div className="skill">
							<i className="icon devicon-javascript-plain colored"></i>
							<p>JavaScript</p>
						</div>
						<div className="skill">
							<i className="icon devicon-cplusplus-plain colored"></i>
							<p>C++</p>
						</div>
						<div className="skill">
							<i className="icon devicon-html5-plain colored"></i>
							<p>HTML5</p>
						</div>

						<div className="skill">
							<i className="icon devicon-css3-plain colored"></i>
							<p>CSS3</p>
						</div>
						<div className="skill">
							<i className="icon devicon-jquery-plain colored"></i>
							<p>JQuery</p>
						</div>
						<div className="skill">
							<i className="icon devicon-git-plain colored"></i>
							<p>Git</p>
						</div>
						<div className="skill">
							<i className="icon devicon-github-plain colored"></i>
							<p>Github</p>
						</div>
						<div className="skill">
							<i className="icon devicon-gulp-plain colored"></i>
							<p>Gulp</p>
						</div>
						<div className="skill">
							<i className="icon devicon-sass-original colored" />
							<p>Sass</p>
						</div>
						<div className="skill">
							<i className="icon devicon-visualstudio-plain colored"></i>
							<p>Visual Studio</p>
						</div>
					</div>
				</div>
				<a className="generic-button" href="https://www.linkedin.com/in/michael-yiu-8b120353/">Hire Me</a>
			</div>

		</section>
	)
}

export default Skills;
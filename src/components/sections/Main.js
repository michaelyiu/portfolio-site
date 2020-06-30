import React from 'react';

const Main = () => {
	return (
		<main id="about-me" className="about-me">
			<div className="wrapper">
				<div className="flex-container flex-column">
					<h2 data-aos="zoom-out-up" data-aos-duration="1500">About Me</h2>
					<div className="flex-container content-container">
						<div className="about-img-container" data-aos="zoom-out-up" data-aos-duration="1500">
							<img src="images/headshot1.jpg" alt="" />
						</div>
						<div className="flex-container flex-column about-bio" data-aos="zoom-out-up" data-aos-duration="1500">
							<div className="text-container">
								<p>Hi, my name is Michael Yiu and I am an unproud owner of zero dogs. But what I am
								extremely
								proud to be is a Developer. One thing I've learned about myself quite recently is
								that
								while coding alone is fine and nice, I love highly collaborative environments as
								talking
								to just a computer could be seen as being insane. I've picked up back-end
								development
                                    in the past from York University and from my previous employer, Crystal Fountains.</p>

								<p>When I'm not coding, I'm usually cruising on reddit looking at pictures of dogs and
								puppies
								as my eyes burn with jealousy. I'm also into basketball, video games and I've
								recently
                                    picked up learning Hip Hop dancing. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main;

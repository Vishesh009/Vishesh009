import React from 'react';
import pic1 from '../img/cognizant-logo.webp';
import pic3 from '../img/cognizant-logo.webp';
import pic4 from '../img/IC-KIET.jpg';

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="title">Work Experience</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Coginizant Technology Services <br />
							<span>(Programmer Analyst)</span>
							<br />
							<h4>Bangalore | August 2021 - present</h4>
						</div>
						<ul>
							{/* <li>Working as a Full Stack Developer (ReactJS + Java)</li> */}
							<li>Collaborated with 30+ colleagues On-Shore as well as Off-Shore locations</li>
							<li>Collaborated with an Agile Team of 8 Members</li>
							<li>
								Worked with product managers to re-architect a multi-page web app into a single page
								web-app
							</li>
							<li>Developed and Deployed changes as per requirement of Product Owner with accuracy</li>
							<li>Tested software for bugs, ﬁxed them along with documentation to increase clarity</li>
						</ul>
						<a href="https://www.cognizant.com/" target="_blank">
							Visit Company
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column left">
						<img src={pic3} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Cognizant Technology Solutions <br />
							<span>(Intern)</span>
							<br />
							<h4>Remote | March 2021 - July 2021</h4>
						</div>
						<ul>
							{/* <li>Worked as a Full Stack Developer (HTML, CSS, NodeJS, MongoDB)</li> */}
							<li>
								Dedicated 100 Hours Learning based upon Java and databases
							</li>
							<li>Implemented my skills on a project while collaborating in a team.</li>
						</ul>
						<a href="http://cognizant.com/" target="_blank">
							Visit Company
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column right">
						<div className="text">
							TEDxKIET, KIET Group of Institutions <br />
							<span>(Technical Head)</span>
							<br />
							<h4>Ghaziabad | January 2020 - March 2021</h4>
						</div>
						<ul>
							<li>Trained students in Front-End Web Development under "Additional Skills" Subject added by College to curriculum</li>
							<li>Hosted live project for events</li>
						</ul>
						<a href="https://www.kiet.edu/" target="_blank">
							Visit Company
						</a>
					</div>
					<div className="column left">
						<img src={pic4} alt="Profile Pic" className="image-right" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

import React from 'react';
import pic1 from '../img/Cllogo.png';
import pic2 from '../img/WAM.png';
import pic3 from '../img/ccc.png';
// import pic4 from '../img/Portfolio.JPG';
// import pic5 from '../img/breakingbad.png';
// import pic6 from '../img/covid.jpg';

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<div className="max-width">
				<h2 className="title">My Projects</h2>
				<div className="project-content">
					<div className="card">
						<div className="box">
							<img src={pic1} alt="SaaS" />
							<div className="text">ORMB - Banking and Financials</div>
							<p>
                            It combined all of the banking flows - Billing and Taxing under one project. 
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a>NDA Signed</a>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic2} alt="" />
							<div className="text">Whack A Mole</div>
							<p>
								A Javascript based gaming application where we can play as much whack a mole as we can.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="https://vishesh009.github.io/Whack-A-Mole/" target="_blank">
										Visit Project
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic3} alt="" />
							<div className="text">Countdown Clock</div>
							<p>
								A Simple Countdown clock where we have presets for different timings which we can be used a timer.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="https://vishesh009.github.io/Countdown-Clock/" target="_blank">
										Visit Project
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="card">
						<div className="box">
							<img src={pic4} alt="" />
							<div className="text">Panwar Clinic</div>
							<p>
								A Website for my Father (Dr.Indra Pal Singh) & the services offered at his clinic. I put
								my web development skills to practical use.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="http://indrapal.herokuapp.com/" target="_blank">
										Visit Project
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic5} alt="" />
							<div className="text">Breaking Bad Wiki</div>
							<p>
								A Website to get a list of characters and their details from the popular show Breaking
								Bad by using their public API.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="http://breakingbadcharacter.herokuapp.com/" target="_blank">
										Visit Project
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic6} alt="" />
							<div className="text">Covid-19 Tracker</div>
							<p>
								A simple covid-19 tracker website using public API to fetch the details of covid-19 by
								country.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="https://sanidhyapanwar.github.io/Covid_Tracker/" target="_blank">
										Visit Project
									</a>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Projects;

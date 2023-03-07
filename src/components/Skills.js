import React from 'react'
import html from '../img/Skill/html.png'
import css from '../img/Skill/css.png'
import js from '../img/Skill/js.png'
import react from '../img/Skill/react.png'
import bootstrap from '../img/Skill/bootstrap.png'
import sql from '../img/Skill/sql.png'
import git from '../img/Skill/git.png'
import github from '../img/Skill/github.png'
import node from '../img/Skill/node.png'
import python from '../img/Skill/python.png'
import cpp from '../img/Skill/cpp.png'
import java from '../img/Skill/java.png'
import express from '../img/Skill/express.png'
import mongodb from '../img/Skill/mongodb.png'

const Skills = () => {
    return (
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My Skills in Front End Development</div>
                            <p>I have acquired knowledge of Front End Development through constantly 
                                updating myself with new and improved ways of doing things.
                                <br />
                                I always try to learn something new and try it out with practical implementation through Projects.
                            </p>
                            <a href="https://www.linkedin.com/in/vishesh-bajpai-3b6348173/">Go to my LinkedIn</a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>85%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>75%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>React.JS</span>
                                    <span>85%</span>
                                </div>
                                <div className="line react"></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr/>
                    <br />
                    {/* <div className="skills-content">
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>Node.JS</span>
                                    <span>75%</span>
                                </div>
                                <div className="line node"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MongoDB</span>
                                    <span>70%</span>
                                </div>
                                <div className="line mongo"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Mongoose</span>
                                    <span>80%</span>
                                </div>
                                <div className="line mongoose"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>75%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                        </div>
                        <div className="column left">
                        <div className="text">My Skills in Back End Development</div>
                            <p>I am very much fascinated by the inner workings of things which made me interested in Back End Development.
                                <br />
                                To implement my Knowledge of Back End Development , I have developed some major projects like OSI Farming Equipment on Rent , Instagram Clone.
                            </p>
                            </div>
                    </div> */}
                    <br/><br/>
                    <h2 className="title">Technologies Known</h2>
                    <div className="skill-content">
                        <div className="skilltech">
                            <span className="technology">
                                <img src={mongodb} alt="MongoDB"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={express} alt="ExpressJS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={react} alt="ReactJS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={node} alt="NodeJS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={git} alt="Git"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={github} alt="GitHub"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={html} alt="HTML"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={css} alt="CSS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={js} alt="JS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={bootstrap} alt="Bootstrap"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={java} alt="Java"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={cpp} alt="C++"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={python} alt="Python"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={sql} alt="SQL"/>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Skills
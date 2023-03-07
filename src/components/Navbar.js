import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
        <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="/"><span>Portfo</span>lio.</a></div>
            <span id='clickableAwesomeFont' className="btn-toggle"><i id="darkMode" class="fas fa-moon"></i></span>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#experience" className="menu-btn">Experience</a></li>
                <li><a href="#education" className="menu-btn">Education</a></li>
                <li><a href="#interests" className="menu-btn">Interests</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#projects" className="menu-btn">Projects</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    <br/>
    </>
  )
}

export default Navbar
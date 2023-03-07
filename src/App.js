import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Interests/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

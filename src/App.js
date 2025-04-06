import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 __variable_d65c78">
      {/* <h1 className="flex flex-col min-h-[100dvh] space-y-10">
        Hi, I'm Vishesh 👋 Software Engineer with a passion for building
        innovative solutions. Active on social media, sharing insights and
        projects.
      </h1> */}
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

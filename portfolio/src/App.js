import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import './Navbar.css';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/WorkExperience/WorkExperience';


function App() {
  return (
    
    <>
      <Navbar/>  
      <div className="container">
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <Projects/>
        <ContactMe/>
      </div>
      <Footer/>

    </>
  );
}

export default App;

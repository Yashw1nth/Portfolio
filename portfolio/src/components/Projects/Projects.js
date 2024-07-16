import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <section className="projects-container">
      <h4>Projects</h4>
 
      <div class='content'>
      <div className="projects-content">
          <img class='image' src="./assets/images/PickUpLimes.jpeg" alt=" " /> 
          <div class='overlay'>
            <h1>Pick Up Limes</h1>
            <h2>Pick Up Limes is a website that helps you create 
                a nourishing plant-based lifestyle</h2>
          </div>  
      </div>

      <div className="projects-content">
          <img class='image' src="./assets/images/Rashki.jpeg" alt=" " /> 
          <div class='overlay1'>
            <h1>Rashki Shopping</h1>
            <h2>RASHKI is a brand that designs bags with the goal of 
                helping you accomplish more in your daily life.</h2>     
          </div>  
      </div>

      <div className="projects-content">
          <img class='image' src="./assets/images/portfolio.jpeg" alt=" " /> 
          <div class='overlay'>
            <h1>Portfolio</h1>
            <h2>Personal Portfolio Website 
                </h2>
          </div>  
      </div>

      </div>

      <br/><br/><br/><br/>
    </section>
  )
}

export default Projects

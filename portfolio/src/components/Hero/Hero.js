import React from 'react';
import './Hero.css';
import { useTypewriter } from 'react-simple-typewriter';



function Hero() { 

  const [typeEffect] = useTypewriter({
    words: ['Frontend Developer', 'Frontend Developer', 'Frontend Developer'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  return (
    <section className="hero-container">
    <div className="hero-content">
        <h3><h3 class="text">Hello, </h3>It's Me</h3>
        <h1>Yashwanth</h1>
        <h3>And I'm a <span className="color">{typeEffect}</span></h3>
        <p>
            Passionate Frontend Developer | Transforming Ideas into
            Seamless <br/> and Visually Stunning Web Solutions
        </p> 

      <div class='tech'>
       <div class='tech-icon'>
         <img src = "./assets/images/html.png" alt=" " />
       </div>

       <div class='tech-icon'>
         <img src = "./assets/images/css.png" alt=" " />
       </div>

        <div class='tech-icon'>
          <img src = "./assets/images/js.png" alt=" " />
        </div>

        <div class='tech-icon'>
          <img src = "./assets/images/react.png" alt=" " />
        </div>
      </div>
      
        <a href= "assets/images/Resume.pdf" download='Resume'><button>Download CV</button></a>
    </div>
    
    <div className="hero-img">
        <div>
            <img src = "./assets/images/123.jpg" alt=" " />
        </div>

       
    </div>
    </section>
  )
}

export default Hero

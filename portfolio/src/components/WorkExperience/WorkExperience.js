import React from 'react'
import './WorkExperience.css'
import { Work_Experience } from '../Utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'

function WorkExperience() {
  return (
    
    <section className='border'>
        <h2>Work Experience</h2>

        <div className='experience-content'>
            {Work_Experience.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}
        </div>
    </section>
    
  )
}

export default WorkExperience

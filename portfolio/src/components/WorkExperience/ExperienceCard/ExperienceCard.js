import React from 'react'
import './ExperienceCard.css'

function ExperienceCard({ details }) {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>

        <div className='work-duration'>{details.date}</div>    

    </div>
  )
}

export default ExperienceCard

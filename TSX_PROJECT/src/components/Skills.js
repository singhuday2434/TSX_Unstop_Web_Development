import React, { useEffect, useState } from 'react'

import "./Slills.css"
const Skills = (props) => {
    
  return (
    <div className='skill-details'>
      <div className='skill-name'>{props.name}<span className='skill-proff'>{`${props.proficiency}%`}</span></div>
      
      <div className='skill-bg'>
         <div className='skill-bar' style={{width:`${props.proficiency}%`}} ></div>
      </div>
      
    </div>
  )
}

export default Skills

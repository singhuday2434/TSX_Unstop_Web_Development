import React from 'react'
import ResumeCo from '../components/ResumeCo'
import "./Resume.css"
import data from '../data'
import Skills from '../components/Skills'
const Resume = () => {
  const {educationData,experienceData,skillsData }=data
  return (
    <div className='resume-main'>
      <h1 className='resume-head'>Resume</h1>
        <div className='ul'></div>
              <ResumeCo head="Education" array={educationData}/>
              <ResumeCo head="Experience" array={experienceData}/>
               <h2 className='res-skills-head'>My Skills</h2>
              <div className='resume-skills'>
               
                <div className='res-skills-details'>
                    {
                  skillsData.map((item)=>{
                    return(<Skills proficiency={item.proficiency}   name={item.name}/>)
                  })
                }
                </div>
                
              </div>

    </div>
  )
}

export default Resume

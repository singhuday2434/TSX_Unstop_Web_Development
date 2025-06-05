import React from 'react'
import "./ResumeCo2.css"
const ResumeCo2 = (props) => {
  return (
    <div className='resume-card-deatails' >
             <div className='res-card-name'>{props.name}</div>
             <div className='persuing'>{props.persue}</div>
             <div className='res-card-duration'>{props.duration}</div>
             <div className='res-card-info'>{props.info}</div>
    </div>
  )
}

export default ResumeCo2

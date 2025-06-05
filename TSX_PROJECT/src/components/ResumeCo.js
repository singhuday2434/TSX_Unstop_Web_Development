import React from 'react'
import "./ResumeCo.css"
import ResumeCo2 from './ResumeCo2'
const ResumeCo = (props) => {
     const input=props.array
  return (
    <div className='resume-card'>
        <h2 className='res-card-head'>{props.head}</h2>
        <div className='res-details'>
            {
        input.map((item)=>{
             return (<ResumeCo2 name={item.a} persue={item.b} info={item.d} duration={item.c} />)
                })
            }
        </div>
    </div>
  )
}

export default ResumeCo

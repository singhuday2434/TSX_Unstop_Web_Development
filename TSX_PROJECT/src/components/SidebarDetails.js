import React from 'react'
import "./sd.css"
const SidebarDetails = (props) => {
  return (
    <div className='detail-container'>
      <div className='left'>
           <img id='img2' src={props.img} ></img>
      </div>
      <div className='right'>
        <div className='detail-title'>{props.title}</div>
        <div className='detail-value'>{props.value}</div>
      </div>
    </div>
  )
}

export default SidebarDetails

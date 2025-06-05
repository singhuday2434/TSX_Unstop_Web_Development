
import React from 'react'
import "./Iconlink.css"

const Iconlink = (props) => {
  return (
    <div className='icon'>
       <a href={props.link} target='blank'>
        <img id='img1' src={props.img}></img>
       </a>
    </div>
  )
}

export default Iconlink

import React from 'react'
import "./PortC.css"

const PortC = (props) => {
  return (
    <div className='port-card-main'>
      <div className='card-img'>
        <img id='img6'src={props.img}></img>
        <div className='card-hover'>
          
      </div>
       <div className='card-hover-link'>
            <a href={props.link} target='none'>
                <img src={props.linkimg} id='img7'></img>
            </a>
           </div>
      </div>
       <div className='card-title'><a href={props.video} target='none'>{props.title} </a></div>
      <div className='card-category'>{props.category}</div>
      
    </div>
  )
}

export default PortC

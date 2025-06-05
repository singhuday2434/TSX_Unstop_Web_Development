import React from 'react'
import "./CardT.css"

const CardT = (props) => {
  return (
    <div className='cardt-main'>
        
            <img id='img4' src={props.img} loading='lazy'></img>
        
      
    </div>
  )
}

export default CardT

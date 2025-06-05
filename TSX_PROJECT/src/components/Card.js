import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card-main'>
      <div className='card-left'>
        <img id='img3' src={props.img} loading='lazy'></img>
      </div>
      <div className='card-right'>
            <div className='card-head'>
                {props.head}
            </div>
            <div className='card-info'>
                {props.info}
            </div>
      </div>
    </div>
  )
}

export default Card

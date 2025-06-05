import React from 'react'
import PortC from '../components/PortC'
import "./Portfolio.css"
import data from '../data'
const Portfolio = () => {
  const {portfolioData}=data
  return (
    <div className='portfolio-main'>
        <div className='port-container'>
            {
            portfolioData.map((item)=>{
              return(
                <PortC  img={item.img} title={item.title} category={item.category} linkimg={item.linkimg} link={item.link} video={item.video}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Portfolio

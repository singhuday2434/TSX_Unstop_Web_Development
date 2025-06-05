import React from 'react'
import data from '../data'
import "./About.css"
import Card from '../components/Card'
import CardT from '../components/CardT'
const About = () => {
    const {whatIDo,techStack}=data
    
  return (
    <div className='about-main'>
        <h1 className='about-hed'>About Me</h1>
        <div className='ul'></div>
        <div className='about-desc'>
            <p>
             Aspiring Software Developer and Machine Learning Enthusiast based in Modinagar, India, with hands-on experience in full-stack web development and AI-powered applications. I specialize in creating dynamic, scalable web solutions using the MERN stack and deploying machine learning models for real-world use cases.
            </p>
            <br></br>
            {/* <p>
             I’ve developed projects like WasteWise, a smart waste classification system that combines deep learning with modern web technologies. My passion lies in building intelligent systems, solving meaningful problems, and continuously learning emerging tools and frameworks.
            </p> */}
            <p>
                With a strong foundation in Data Structures, Algorithms, and backend systems, I’m driven to develop tech that’s not only functional but impactful. I'm currently seeking opportunities to work on challenging software development roles that push boundaries and deliver value.
            </p>
           
        </div>
        <div className='about-whatIdo'>
             <h2 className='about-what'>What I'm doing</h2>
             <div className='about-cards'>
               

                 {
                    whatIDo.map((item)=>{
                       return ( <Card img={item.icon} head={item.title}  info={item.description}/>)
                    })
                 }
                
             </div>
        </div>
        <div className='techstack'>
              <h2 className='ts-head'>Tech Stack & Tools</h2>
              <div className='ts-cards'>
                                 {
                                    techStack.map((item)=>{
                                        return(
                                            <CardT img={item.icon}/>
                                        )
                                    })
                                 } 
              </div>
        </div>
      
    </div>
  )
}

export default About

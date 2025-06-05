import React from 'react'
import { Routes, Route,Navigate, useNavigate } from 'react-router-dom'
import "./Wrapper.css"
import Sidebar from './Sidebar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portfolio'
import { useEffect ,useState} from 'react'
const Wrapper = () => {
        
  const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    
    setPosition({ x: e.pageX-30 ,y: e.pageY-30});
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

    const navigate = useNavigate()
   const handleClick = (path, id) => {
  // Reset all nav colors (optional)
  ['about', 'resume', 'portfolio', 'contact'].forEach(navId => {
    const el = document.getElementById(navId);
    if (el) el.style.color = "white";
  });


  const active = document.getElementById(id);
  if (active) {active.style.color = "#fff700"
   
  };
    

  navigate(path);
};


    
  return (
    
    <div className='wrapper'>  
       <div className='wrapper-left'><Sidebar/></div>
       <div className='wrapper-right'>
             <div className='navbar'>
                <div className='nav  ' id='about' onClick={()=>handleClick('/about','about')}>About</div>
                <div className='nav ' id='resume' onClick={()=>handleClick('/resume','resume')}>Resume</div>
                <div className='nav ' id='portfolio' onClick={()=>handleClick('/portfolio','portfolio')}>Portfolio</div>
                <div className='nav ' id='contact' onClick={()=>handleClick('/contact','contact')}>Contact</div>
             </div>
             <div className='page'>
         <Routes>
             <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

             </div>
        </div>  
        <div className='move' style={{
    left: `${position.x}px`,
    top: `${position.y}px`,
  }}></div>   
    </div>
  )
}

export default Wrapper

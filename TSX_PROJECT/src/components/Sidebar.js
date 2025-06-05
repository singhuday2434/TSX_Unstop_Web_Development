import React from 'react'
import "./Sidebar.css"
import avtar from '../images/avtar.png';


import book from '../images/book.png';
import calendar from '../images/calendar.png';
import code from '../images/code.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';
import map from '../images/map.png';
import send from '../images/send.png';
import smartphone from '../images/smartphone.png';

import Iconlink from './Iconlink';
import SidebarDetails from './SidebarDetails';
{/* <img src={avtar} alt='uday' /> */}

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <div className='sidebar-info'>
          <div className='sidebar-avtr'>
             <img src={avtar} alt='uday'/>
          </div>
          <div className='sidebar-name'>UDAY SINGH</div>
          <div className='sidebar-profile'>Software Developer</div>
        </div>
        <div className='sidebar-separator'></div>
        <div className='sidebar-details'>
            <SidebarDetails img={mail} title={`EMAIL`} value={`singh.uday2434@gmail.com`}/>
             <SidebarDetails img={smartphone} title={`PHONE`} value={`+919917430685`}/>
              <SidebarDetails img={calendar} title={`BIRTHDAY`} value={`March 24,2005`}/>
               <SidebarDetails img={map} title={`LOCATION`} value={`Modinagar,Ghaziabad,U.P,India`}/>
        </div>
        <div className='sidebar-separator'></div>
      <div className='sidebar-links'>
           <Iconlink img={linkedin} link={'https://www.linkedin.com/in/uday-singh-667608292/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BwtM3RklUQ3iI7NpALPGoBw%3D%3D'}/>
           <Iconlink img={github} link={`https://github.com/singhuday2434`}/>
           <Iconlink img={code} link={`https://leetcode.com/u/Uday2434`}/>
           
      </div>

    </div>
  )
}

export default Sidebar

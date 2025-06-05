import React from 'react'
import "./Contact.css"
import  { useRef } from 'react';
import emailjs from 'emailjs-com'; // 👈 yeh new import

import send from "../images/send.png"
const Contact = () => {
  const form = useRef(); // 👈 upar function me

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_zi35ld8',     // 👈 replace with actual ID from EmailJS
    'template_ckt5d9g',    // 👈 replace with your template ID
    form.current,
    'QCcP4ewxzR4Im7PWl'      // 👈 from EmailJS account
  ).then((result) => {
    alert("Message sent successfully!");
    form.current.reset();
  }, (error) => {
    alert("Failed to send message.");
    console.error(error);
  });
};

  return (
    <div className='contact-main'>
        <h1 className='contact-head'>Contact</h1>
        <div className='ul'></div>
        <form ref={form} onSubmit={sendEmail} className='contact-form' autoComplete='off'>
                    <div className='contact-info'>
           <div className='contact-inputs'>
          <div className='contact-name'>
            <input type='text' name='name' required placeholder='Full Name' autoComplete='off'></input> 
          </div>
          <div className='contact-email'>
            <input type='email' name='email' required placeholder='Email Address'></input>
          </div>
        </div>
        <div className='contact-message'>
          <textarea className='contact-textarea' name='message' placeholder='Your Message'></textarea>
        </div>
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        </div>
        <div className='contact-send' onClick={() => form.current.requestSubmit()}>
          <div className='send-img'>
            <img id='img5' src={send} ></img>
          </div>
          <div className='send-text'>
            Send Message
          </div>
        </div>
        </form>
        {/* <div className='contact-info'>
           <div className='contact-inputs'>
          <div className='contact-name'>
            <input type='text' required placeholder='Full Name'></input> 
          </div>
          <div className='contact-email'>
            <input type='email' required placeholder='Email Address'></input>
          </div>
        </div>
        <div className='contact-message'>
          <textarea className='contact-textarea'  placeholder='Your Message'></textarea>
        </div>
        </div>
        <div className='contact-send' onClick={() => form.current.requestSubmit()}>
          <div className='send-img'>
            <img id='img5' src={send} ></img>
          </div>
          <div className='send-text'>
            Send Message
          </div>
        </div> */}

    </div>
  )
}

export default Contact

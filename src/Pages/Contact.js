import React from 'react'
import signIn from "../assets/signIn.jpg";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <img src={signIn} width="400px"/>
      <div className="contactInfo" >
      <form id="contactForm">
       <input id="email" className="input" placeholder="Enter Your Email" type="email" />
       <input id="password" className="input" placeholder="Password" type="text" />
      </form>
      <button className="logIn">Log In</button>
      <button>Sign In</button>
      <p>Forgot your password?</p>
      </div>
    </div>
  )
}

export default Contact;
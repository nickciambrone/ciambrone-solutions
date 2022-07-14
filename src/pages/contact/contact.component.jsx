import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.styles.scss';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [messageForUser, setmessageForUser] = useState('');

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
    
      if (isValidEmail(email)){
        const serviceId = "service_lhsobpo";
        const templateId = "template_gooh4zu";
        const userId = "BvX3RwNBsra42lP-e";
        const templateParams = {
          name,
          email,
          message,
        };
  
        emailjs
          .send(serviceId, templateId, templateParams, userId)
          .then((response) => console.log(response))
          .then((error) => console.log(error));
        setName("");
        setEmail("");
        setMessage("");
        setEmailSent(true);
        setmessageForUser('Message Sent')

      }
      else{setmessageForUser('Please enter a valid email')
    }

    } else {
        setmessageForUser('Please fill in all fields')
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div className ='contact' style={{height:'100vh', color:'white'}}>
      <div className="contact-main" style = {{display:'flex', flexDirection:'column', textAlign:'left'}}>
      <h1 className = 'contact-me'>Contact Me</h1>
      <h5 style={{textAlign:'left'}}>I will provide a free consultation and then you can decide if you want to use my services

      </h5>
      <hr style={{ width:'100%', border:'1px solid white'}}/>

      <span style={{fontWeight:'bold'}}>Name<span style={{color:'red'}}>*</span></span>
        <input
          className="contactField"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span style={{fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span></span>

        <input
          className="contactField"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{fontWeight:'bold'}}>Comment or message<span style={{color:'red'}}>*</span></span>

        <textarea
          className="contactField"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        
        <button className="contactField" onClick={submit} style={{backgroundColor:'#eeeeee',  width:'140px', padding:'10px'}}>
          Send Message
        </button>
        <span className={emailSent ? "visible" : null}>
          {messageForUser}
        </span>
      </div>
    
    </div>
  );
};

export default Contact;

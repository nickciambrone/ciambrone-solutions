import React from 'react';
import './about.styles.scss'
import { useNavigate } from 'react-router-dom';

const About = () =>{
    let navigate = useNavigate();

    return(
        <div className = 'about'  style={{ color:'white', textAlign:'left'}}>
            <span className='mynameis' >Hi, my name is </span>
            <h2 className = 'nickciambeast' style={{marginTop:'10px'}}>Nick Ciambrone.</h2>
            <h3 className='ibuild'>I build web and mobile apps.</h3>
            <p className = 'bio'>I am a developer specializing in building clean user interfaces for businesses. Whatever your idea is, I will turn it into a reality. 
            My background is in financial technology so you can depend on me to write the code necessary to charge your customers and get paid.  </p>
            <div className="fadeup-enter-done" style={{transitionDelay: "500ms"}}>
                <div className="email-link"  onClick={() => navigate("/contact")}>Contact me</div>
            </div>
        </div>
    )
}

export default About;
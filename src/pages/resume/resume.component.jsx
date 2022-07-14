import React from "react";
import './resume.styles.scss'
const Resume = () => {
  return (
    <div className="resume" style={{ color: "white" }}>
      <h1> Experience:</h1>
      <div className="resume-content">
        <div className="resume-item">
          <h3>Ciambrone Solutions</h3>
          <h6>Freelance Developer</h6>
          <p>As a freelance developer, I've built web and mobile applications for clients with various needs. </p>
        </div>
        <div className="resume-item">
        <h3>Prudential Finanial</h3>
        <h6>Technology Consultant </h6>
        <p> At Prudential, I am a technology specialist. I analyze technical systems and provide recommendations for how they could be improved. I also host seminars where I teach programming and financial technology to Financial Analysts and Managers.  </p>
      </div>
      <div className="resume-item">
      <h3>Meyer and Associates</h3>
      <h6>Data Analyst / Software Developer </h6>
      <p> At this boutique insurance company, I had two core responsibilites. I built web applications for the Customer Service department and I analyzed Sales and Marketing data.  </p>
    </div>
      </div>
    </div>
  );
};

export default Resume;

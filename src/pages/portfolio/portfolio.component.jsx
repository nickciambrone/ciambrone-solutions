import React from "react";
import { PORTFOLIO_DATA } from "./portfolio.data";
import "./portfolio.styles.scss";

const Portfolio = () => {
  return (
    <div
      className="portfolio"
      style={{
        color: "white",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
            }}
    >
      {PORTFOLIO_DATA.map((ele) => (
        <div className="carousel-container" style={{ height: "100%", display:'flex', flexDirection:'column', backgroundColor:'#0e2034', padding:'10px' }}>
        <img src={'/images'+ele.images[0]} style={{width:'100%'}} />
  
        <span>{ele.title}</span>
          <span className = 'description'>{ele.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

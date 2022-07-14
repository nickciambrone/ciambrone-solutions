import React from "react";
import { PORTFOLIO_DATA } from "./portfolio.data";
import ControlledCarousel from "../../components/carousel/carousel.component.jsx";
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
        justifyContent: "space-evenly",
        paddingBottom:'35px'
      }}
    >
      {PORTFOLIO_DATA.map((ele) => (
        <div className="carousel-container" style={{ height: "100%", display:'flex', flexDirection:'column', backgroundColor:'#0e2034', padding:'10px' }}>
          <ControlledCarousel images={ele.images} />
          <span>{ele.title}</span>
          <span className = 'description'>{ele.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./navbar.styles.scss";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  return (
    // <div className = 'nav-bar' style = {{display:'flex', justifyContent: 'space-evenly', backgroundColor:'#563d7c'}}>
    //     {navItems.map(ele=><NavItem item = {ele}/>)}

    // </div>
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0a1a30", padding:'20px 0' }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto"
            style={{ width: "100%", justifyContent: "space-evenly" }}
          >
            <li className="nav-item active">
              <div className="nav-link" href="#">
                <div
                  onClick={() => navigate("/")}
                >
                  <span className="nav-text">About</span>
                </div>
                
              </div>
            </li>

            <li className="nav-item active">
            <div className="nav-link" href="#">
              <div
              onClick={() => navigate("/portfolio")}
              
              >
                <span className="nav-text">Portfolio</span>
              </div>
              
            </div>
          </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                href="#"
                onClick={() => navigate("/resume")}
                >
                <span className="nav-text">Resume</span>
              </div>
            </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                href="#"
                onClick={() => navigate("/contact")}
                >
                <span className="nav-text">Contact</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

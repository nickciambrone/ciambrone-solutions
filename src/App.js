import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Sidenav from "./components/sidenav/sidenav.component";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Resume from "./pages/resume/resume.component";
import Contact from "./pages/contact/contact.component";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#0a192f",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        className="app-content-container"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#0a192f",
          height:'100vh'
        }}
      >
        <div>
          {" "}
          <Sidenav />
        </div>
        <div className="app-content-main">
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

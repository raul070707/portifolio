import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Technologies from "../pages/Technologies";
import About from "../pages/About";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/techs" element={<Technologies />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RoutesComponent;

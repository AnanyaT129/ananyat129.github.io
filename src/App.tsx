import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Projects } from "./pages/Projects";
import { Leadership } from "./pages/Leadership";
import { Music } from "./pages/Music";
import { Sustainability } from "./pages/Sustainability";
import { WorkExperience } from "./pages/WorkExperience";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workExperience" element={<WorkExperience />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/music" element={<Music />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
    </>
  );
}

export default App;

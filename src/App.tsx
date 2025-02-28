import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Tools from "./components/tools/tools";
import SoftSkills from "./components/softSkills/softSkills";
import Layout from "./components/layout/layout";
import AboutMeText from "./components/aboutMeText/aboutMeText";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="tools" element={<Tools />} />
            <Route path="skills" element={<SoftSkills />} />
            <Route path="about-me" element={<AboutMeText />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

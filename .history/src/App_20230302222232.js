import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./components/home";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fallback from "./components/fallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Layout />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;

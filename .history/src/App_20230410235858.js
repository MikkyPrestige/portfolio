import { React } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./components/home";
import Background from "./components/background";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fallback from "./components/fallback";
import ErrorPage from "./components/errorPage";
// import { Box, Switch, useColorMode } from "theme-ui";


function App() {
  // const [state, setState] = useState("light");
  // const [colorMode, setColorMode] = useColorMode();

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      {/* <Box
          marginTop = "5rem"
          color = "text"
          bg ="transparent"
          transition = "background-color 0.2s ease-out, color 0.2s ease-out"
      >
        <div>
          <div>{state === "light" ? <div>Dark</div> : <div>Light</div>}</div>
          <Switch
            onClick={() => {
              setColorMode(colorMode === "light" ? "dark" : "light");
              setState(colorMode === "light" ? "dark" : "light");
            }}
          />
        </div> */}
        <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/background" element={<Background />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        {/* </Layout> */}
      {/* </Box> */}
    </ErrorBoundary>
  );
}

export default App;


import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./components/home";
import Background from "./components/background";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fallback from "./components/fallback";
import ErrorPage from "./components/errorPage";
import { Box, Switch, useColorMode } from "theme-ui";
/** @jsxImportSource theme-ui */

function App() {
  const [state, setState] = useState("light");
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    setState((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Box
        sx={{
          marginTop: "5rem",
          backgroundColor: "background",
          color: "text",
          minHeight: "100%",
          transition: "background-color 0.3s ease-out, color 0.3s ease-out",
          width: "20%",
        }}
      >
        <div>
          <div>{state === "light" ? <div>Dark</div> : <div>Light</div>}</div>
          <Switch onClick={toggleColorMode} />
        </div>
        <Layout colorMode={colorMode} />
          <Routes>
            <Route path="/" element={<Home colorMode={colorMode} />} />
            <Route
              path="/background"
              element={<Background colorMode={colorMode} />}
            />
            <Route
              path="/projects"
              element={<Projects colorMode={colorMode} />}
            />
            <Route path="/contact" element={<Contact colorMode={colorMode} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Box>
    </ErrorBoundary>
  );
}

export default App;
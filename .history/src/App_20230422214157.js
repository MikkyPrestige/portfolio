import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Layout  from "./components/layout";
import Home from "./components/home";
import Background from "./components/background";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fallback from "./components/fallback";
import ErrorPage from "./components/errorPage";
import { Box, useColorMode } from "theme-ui";
/** @jsxImportSource theme-ui */
import Dark from "./assets/images/night.svg";
import Light from "./assets/images/light.png";
import Avatar from "./components/avatar";

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
            width: "100%",
            position: "relative",
          }}
        >
          <div
            sx={{
              position: "fixed",
              // top: "-4.5rem",
              // left: "20rem",
              zIndex: "1000",
            }}
          >
            <button
              sx={{
                backgroundColor: "background",
                border: "none",
                cursor: "pointer",
                outline: "none",
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                transition: "background-color 0.3s ease-out",
                // position: "fixed",
                // zIndex: "1000",
                ":hover": {
                  backgroundColor: "primary",
                },
              }}
              onClick={toggleColorMode}
              onTouchEnd={toggleColorMode}
            >
              {state === "light" ? (
                <Avatar
                  image={Dark}
                  alt="Dark mode icon"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <Avatar
                  image={Light}
                  alt="Light mode icon"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </button>
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
            <Route
              path="/contact"
              element={<Contact colorMode={colorMode} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Box>
    </ErrorBoundary>
  );
}

export default App;

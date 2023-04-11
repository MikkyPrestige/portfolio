import { React, useState } from "react";
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

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          color: "text",
          bg: "background",
          transition: "background-color 0.2s ease-out, color 0.2s ease-out",
          fontSize: 4,
          fontFamily: "body",
          lineHeight: "body",
          fontWeight: "body",
        }}
      >
        <div>
        <div>
          {state === "light" ? <div>Dark</div> : <div>Light</div>}
        </div>
        <Switch
          checked={colorMode === "dark"
            ? true
            : false}
          onChange={(e) => {
            const newChecked = e.target.checked;
            setColorMode(newChecked ? "dark" : "light");
          }
        }
        </div>
  );
}

export default App;

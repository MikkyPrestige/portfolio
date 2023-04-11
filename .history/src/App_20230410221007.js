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

  );
}

export default App;

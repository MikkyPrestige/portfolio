import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Projects = lazy(() => import("../pages/projects"));
const Contact = lazy(() => import("../pages/contact"));
const Background = lazy(() => import("../pages/background"));
const ErrorPage = lazy(() => import("../pages/errorPage"));

const AppRoutes = ({ colorMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Home colorMode={colorMode} />} />
      <Route path="/projects" element={<Projects colorMode={colorMode} />} />
      <Route path="/contact" element={<Contact colorMode={colorMode} />} />
      <Route
        path="/background"
        element={<Background colorMode={colorMode} />}
      />
      <Route path="*" element={<ErrorPage colorMode={colorMode} />} />
    </Routes>
  );
};

export default AppRoutes;

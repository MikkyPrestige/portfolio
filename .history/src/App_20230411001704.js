// import { React, useState } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import { Routes, Route } from "react-router-dom";
// import { Layout } from "./components/layout";
// import Home from "./components/home";
// import Background from "./components/background";
// import Projects from "./components/projects";
// import Contact from "./components/contact";
// import Fallback from "./components/fallback";
// import ErrorPage from "./components/errorPage";
// import { Box, Switch, useColorMode } from "theme-ui";
// /** @jsxImportSource theme-ui */

// function App() {
//   const [state, setState] = useState("light");
//   const [colorMode, setColorMode] = useColorMode();

//   return (
//     <ErrorBoundary FallbackComponent={Fallback}>
//       <Box
//           sx = {{
//             marginTop: "5rem",
//             backgroundColor: "background",
//             color: "text",
//             minHeight: "100%",
//             transition: "background-color 0.2s ease-out, color 0.2s ease-out",
//             width: "100%",
//           }}
//       >
//         <div>
//           <div>{state === "light" ? <div>Dark</div> : <div>Light</div>}</div>
//           <Switch
//             onClick={() => {
//               setColorMode(colorMode === "light" ? "dark" : "light");
//               setState(colorMode === "light" ? "dark" : "light");
//             }}
//           />
//         </div>
//         <Layout />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/background" element={<Background />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<ErrorPage />} />
//           </Routes>
//       </Box>
//     </ErrorBoundary>
//   );
// }

// export default App;

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
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState(colorMode);

  const toggleColorMode = () => {
    const mode = colorMode === "light" ? "dark" : "light";
    setColorMode(mode);
    setState(mode);
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Box
        sx={{
          marginTop: "5rem",
          backgroundColor: colorMode === "light" ? "white" : "black",
          color: colorMode === "light" ? "black" : "white",
          minHeight: "100%",
          transition: "background-color 0.2s ease-out, color 0.2s ease-out",
          width: "100%",
        }}
      >
        <div>
          <div>{state === "light" ? <div>Dark</div> : <div>Light</div>}</div>
          <Switch onClick={toggleColorMode} />
        </div>
        <Layout colorMode={colorMode} />
        <Routes>
          <Route path="/" element={<Home colorMode={colorMode} />} />
          <Route path="/background" element={<Background  colorMode={colorMode}/>} />
          <Route path="/projects" element={<Projects colorMode={colorMode} />} />
          <Route path="/contact" element={<Contact colorMode={colorMode} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </ErrorBoundary>
  );
}

export default App;

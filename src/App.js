import React, { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Nav from "./layouts/nav";
import Footer from "./layouts/footer";
import AppRoutes from "./routes";
import Fallback from "./components/fallback";
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
      <Suspense fallback={<div className="custom-loader"></div>}>
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
              position: "absolute",
              top: "-4rem",
              left: "25rem",
              zIndex: "10000",
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
                position: "fixed",
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
          <Nav colorMode={colorMode} />
          <AppRoutes colorMode={colorMode} />
          <Footer colorMode={colorMode} />
        </Box>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

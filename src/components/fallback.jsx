import React from "react";
import { useColorMode } from "theme-ui";
/** @jsxImportSource theme-ui */

const Fallback = ({ error, resetErrorBoundary }) => {
  const [colorMode] = useColorMode();
  const themeClass = colorMode === "dark" ? "theme-dark" : "";

  return (
    <div
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
      className={`fallback ${themeClass}`}
      role="alert"
      aria-live="assertive"
    >
      <h1 className="fallback--title">Something went wrong</h1>
      <p className="fallback--msg">{error?.message || "Unknown error"}</p>

      <button
        type="button"
        onClick={resetErrorBoundary}
        className="fallback--btn"
      >
        Try again
      </button>
    </div>
  );
};

export default Fallback;
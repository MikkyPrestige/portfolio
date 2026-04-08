import React from "react";
/** @jsxImportSource theme-ui */

const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
      className="fallback"
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
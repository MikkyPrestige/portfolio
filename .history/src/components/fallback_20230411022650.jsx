import React from "react";

const Fallback = ({ error }) => {
  return (
    <div sx={{
      backgroundColor: "background",
      color: "text",
    }} 
    className="fallback"
    >
      <h1 className="fallback--title">Something went wrong</h1>
      <p className="fallback--msg">{error.message}</p>
    </div>
  );
};

export default Fallback;

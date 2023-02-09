import React from "react";

const Fallback = ({ error }) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default Fallback;

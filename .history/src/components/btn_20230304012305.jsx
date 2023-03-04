// BUTTON COMPONENT

import React from 'react';

const Btn = ({ text, type }) => {
  return (
    <button type={type} className="btn">
      {text}
    </button>
  );
}

export default Btn;
// BUTTON COMPONENT

import React from 'react';

const Btn = ({ text, type }) => {
  return (
    <button type={type} className="form--content__btn">
      {text}
    </button>
  );
}

export default Btn;
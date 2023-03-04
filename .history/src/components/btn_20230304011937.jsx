// BUTTON COMPONENT

import React from 'react';

const Btn = ({ text, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="form--content__btn">
      {text}
    </button>
  );
}

export default Btn;
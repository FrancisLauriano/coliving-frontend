// components/Botoes/Button.jsx
import React from 'react';
import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({ text, type = 'default', onClick }) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

import React from 'react';

const Input = (props) => (
  <div className="input-container">
    <label>Input</label>
    <textarea type="text" {...props}></textarea>
  </div>
);

export default Input;
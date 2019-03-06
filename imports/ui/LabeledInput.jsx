import React from 'react';

const LabeledInput = ({ label }) => (
  <div>
    <label>{label}</label><input type="text" ></input>
  </div>
);
// TODO inject label as a 'name prop on input'
export default LabeledInput

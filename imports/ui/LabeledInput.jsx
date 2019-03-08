import React from 'react';

const LabeledInput = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label><input type="text" value={value} onChange={onChange} />
  </div>
);
// TODO inject label as a 'name prop on input'
export default LabeledInput

import React from 'react';

const LabeledInput = ({ label, useLabel = true, value, onChange }) => {

  const divStyle = {
    display: 'inline',

  }

  const labelStyle = {
    // marginRight: '1em',

  }

  const inputStyle = {
    marginLeft: '1em',

  }

  const renderLabel = useLabel && (<label style={labelStyle}>{label}</label>)

  return (
    <div style={divStyle}>
      {renderLabel}<input
        className="text-field"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
};
// TODO inject label as a 'name prop on input'
export default LabeledInput

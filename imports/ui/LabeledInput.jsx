import React from 'react';

const LabeledInput = ({ label, useLabel = true, value, onChange }) => {
  console.log('label', label)

  console.log('useLabel', useLabel)


  const renderLabel = useLabel && (<label>{label}</label>)

  return (
    <div>
      {renderLabel}<input className="text-field" type="text" value={value} onChange={onChange} />
    </div>
  )
};
// TODO inject label as a 'name prop on input'
export default LabeledInput

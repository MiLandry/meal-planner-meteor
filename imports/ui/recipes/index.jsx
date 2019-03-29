import React from 'react';

const Recipe = ({ recipe }) => {
  const { title } = recipe

  return (
    <div>
      {title}
    </div>
  )
};
export default Recipe

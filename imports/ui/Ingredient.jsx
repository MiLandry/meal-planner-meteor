import React from 'react';

const Ingredient = ({ ingredientName, onDeleteClick }) => {

  return (
    <div>
      <span><button onClick={onDeleteClick}>delete</button> {ingredientName} </span>
    </div>
  )
};
export default Ingredient

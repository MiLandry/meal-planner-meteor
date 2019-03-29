import React from 'react';

const IngredientListItem = ({ ingredientName, onDeleteClick }) => {

  return (
    <div>
      <span><button onClick={onDeleteClick}>delete</button> {ingredientName} </span>
    </div>
  )
};
export default IngredientListItem

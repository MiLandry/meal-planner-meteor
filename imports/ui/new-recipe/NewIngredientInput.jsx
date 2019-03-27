import React from 'react';
import LabeledInput from '../core/LabeledInput';


const NewIngredientInput = ({ newIngredient, setNewIngredient, addIngredient }) => {
  return (
    <div>
      <button onClick={(e) => {
        e.preventDefault()
        if (newIngredient.length < 1) return
        addIngredient({
          id: Math.random(),
          name: newIngredient
        })
        setNewIngredient('')
      }} >
        Add ingredient
    </button>
      {/* TODO: make the div wrapping the input here inline!!! */}
      <input
        className='new-ingredient-button'
        value={newIngredient}
        onChange={(event) => {
          const ingredientName = event.target.value
          setNewIngredient(ingredientName)
        }}
      />
      {/* <LabeledInput

      /> */}
    </div>
  )
}

export default NewIngredientInput

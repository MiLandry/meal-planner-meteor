import React, { useState } from 'react';
import LabeledInput from './LabeledInput';

const onNewIngredientClick = e => {
  e.preventDefault();
  console.log(e + 'new ingredient');

}

const onSubmit = e => {
  e.preventDefault();
  console.log(' you submitted');

}


const renderNewIngredientInput = (newIngredient, setNewIngredient, addIngredient) => {
  return (
    <div>
      <LabeledInput
        label='ingredient'
        value={newIngredient}
        onChange={(event) => {
          console.log(event.target.value);
          setNewIngredient(event.target.value)


        }}
      />
      <button onClick={(e) => {
        e.preventDefault()
        addIngredient(newIngredient)
        setNewIngredient('')
      }} >
        Add ingredient
    </button>
    </div>
  )


}

const renderIngredients = ingredients => {
  console.log('ingredients' + ingredients)

  return ingredients.map(ingredient =>
    <tr>
      {ingredient}
    </tr>
  )
}


const NewRecipe = ({ ingredients, addIngredient }) => {
  const [newIngredient, setNewIngredient] = useState('banana');
  return (
    <div className="container">
      <form >
        <label>Dish/recipe Name</label><input type="text" name="username"></input>
        <br />
        <label>Instructions (optional)</label><textarea name="instructions" rows="4" cols="50"></textarea>
        <br />
        {renderIngredients(ingredients)}
        {renderNewIngredientInput(newIngredient, setNewIngredient, addIngredient)}
        <button onClick={onSubmit}>Add new recipe</button>
      </form>
    </div>
  )
};

export default NewRecipe;

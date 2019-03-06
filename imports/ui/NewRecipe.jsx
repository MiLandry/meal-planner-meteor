import React from 'react';
import LabeledInput from './LabeledInput';

const onNewIngredientClick = e => {
  e.preventDefault();
  console.log(e + 'new ingredient');

}

const onSubmit = e => {
  e.preventDefault();
  console.log(' you submitted');

}

const renderIngredients = ingredients => {
  console.log('ingredients' + ingredients)

  return ingredients.map(ingredient =>
    <LabeledInput
      label='ingredient'
    />
  )
}


const NewRecipe = ({ ingredients, setIngredients }) => (
  <div className="container">
    <form >
      <label>Dish/recipe Name</label><input type="text" name="username"></input>
      <br />
      <label>Instructions (optional)</label><textarea name="instructions" rows="4" cols="50"></textarea>
      <br />
      <button onClick={(e) => {
        e.preventDefault()
        setIngredients(['a', 'b'])
      }}>New ingredient</button>

      <br />
      {renderIngredients(ingredients)}
      <button onClick={onSubmit}>Add new recipe</button>
    </form>
  </div>
);

export default NewRecipe;

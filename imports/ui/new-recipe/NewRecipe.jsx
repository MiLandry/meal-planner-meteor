import React, { useState } from 'react';
import LabeledInput from '../core/LabeledInput';
import IngredientListItem from './IngredientListItem';
import NewIngredientInput from './NewIngredientInput';

const onNewIngredientClick = e => {
  e.preventDefault();
  console.log(e + 'new ingredient');

}

const onSubmit = e => {
  e.preventDefault();
  console.log(' you submitted');

}


const renderIngredients = (ingredients, deleteIngredient) => {
  console.log('ingredients' + ingredients)
  const list = (ingredients.map(ingredient =>
    <li>
      <IngredientListItem
        ingredientName={ingredient.name}
        key={ingredient.id}
        onDeleteClick={(e) => {
          e.preventDefault()
          console.log('ingredient', ingredient)
          deleteIngredient(ingredient)

        }}
      />
    </li>
  ))

  return (
    <div>

      <h2>list of ingredients</h2>
      <ul>
        {list}
      </ul>
    </div>


  )
}

//TODO add type where ingredients is an array of Ingredient objects
//TODO add an Ingredient Type

const NewRecipe = ({ recipeName, setRecipeName, ingredients, addIngredient, deleteIngredient }) => {
  const [newIngredient, setNewIngredient] = useState('');
  const [instructions, setInstructions] = useState('');
  return (
    <div className="new-recipe-form-container">
      <form >
        <LabeledInput
          label='Recipe Name'
          value={recipeName}
          onChange={(e) => {
            setRecipeName(e.target.value)
          }}
        />
        <br />
        <label>Instructions (optional)</label><textarea
          name="instructions"
          rows="4"
          cols="50"
          value={instructions}
          onChange={e => {
            e.preventDefault()
            setInstructions(e.target.value)
          }}
        />
        <br />
        <br />
        <br />
        <hr />
        <NewIngredientInput
          newIngredient={newIngredient}
          setNewIngredient={setNewIngredient}
          addIngredient={addIngredient}
        />
        {renderIngredients(ingredients, deleteIngredient)}
        <button onClick={(e) => {
          e.preventDefault();
          console.log(' you submitted');
          console.log('ingredients' + ingredients);
          console.log('instructions' + instructions)
        }}>Add new recipe</button>
      </form>
    </div >
  )
};

export default NewRecipe;

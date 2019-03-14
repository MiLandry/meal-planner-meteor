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
      <button onClick={(e) => {
        e.preventDefault()
        addIngredient(newIngredient)
        setNewIngredient('')
      }} >
        Add ingredient
    </button>
      {/* TODO: make the div wrapping the input here inline!!! */}
      <LabeledInput
        className='new-ingredient-button'
        useLabel={false}
        label='ingredient'
        value={newIngredient}
        onChange={(event) => {
          console.log(event.target.value);
          setNewIngredient(event.target.value)


        }}
      />
    </div>
  )


}

const renderIngredients = ingredients => {
  console.log('ingredients' + ingredients)
  const list = (ingredients.map(ingredient =>
    <tr>
      {ingredient}
    </tr>
  ))

  return (
    <div>

      <h2>list of ingredients</h2>
      {list}
    </div>


  )
}


const NewRecipe = ({ recipeName, setRecipeName, ingredients, addIngredient }) => {
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
        {renderNewIngredientInput(newIngredient, setNewIngredient, addIngredient)}
        {renderIngredients(ingredients)}
        <button onClick={(e) => {
          e.preventDefault();
          console.log(' you submitted');
          console.log('ingredients' + ingredients);
          console.log('instructions' + instructions)
        }}>Add new recipe</button>
      </form>
    </div>
  )
};

export default NewRecipe;

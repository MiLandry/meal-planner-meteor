import React, { useState } from 'react';
import NewRecipe from './NewRecipe.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


const App = () => {
  const [ingredients, setIngredients] = useState(['banana']);
  const addIngredient = (ingredient) => {
    const newIngredients = Object.create(ingredients)
    newIngredients.push(ingredient)
    setIngredients(newIngredients)
  }
  return (
    <div>
      <h1>Nav bar stand in</h1>
      <AccountsUIWrapper />
      <NewRecipe
        ingredients={ingredients}
        addIngredient={addIngredient}
      />
    </div>
  );
}

export default App;

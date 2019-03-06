import React, { useState } from 'react';
import Hello from './Hello.jsx';
import NewRecipe from './NewRecipe.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';



function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const App = () => {
  const [ingredients, setIngredients] = useState(['banana']);
  return (
    <div>
      <h1>Nav bar stand in</h1>
      <AccountsUIWrapper />
      <NewRecipe
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    </div>
  );
}

export default App;

import React from 'react';
import Hello from './Hello.jsx';
import NewRecipe from './NewRecipe.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


const App = () => (
  <div>
    <h1>Nav bar stand in</h1>
    <AccountsUIWrapper />
    <NewRecipe
      ingredients={['apple']}
    />
  </div>
);

export default App;

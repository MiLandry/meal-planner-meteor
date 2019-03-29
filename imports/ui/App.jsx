import React, { useState } from 'react';
import NewRecipe from './new-recipe/NewRecipe.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { deleteElementFromArrayById } from '../../lib/utils';
import gql from 'graphql-tag';
import { graphql, ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const hiQuery = gql`
{
  hi
}
`;


const client = new ApolloClient({
  uri: "http://localhost:3000/"
});

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState(['Bisque']);

  const addIngredient = (ingredient) => {
    const newIngredients = Object.create(ingredients)
    newIngredients.push(ingredient)
    setIngredients(newIngredients)
  }

  const deleteIngredient = (ingredient) => {
    const newIngredients = Object.create(ingredients)
    console.log('deleteElementFromArrayById', deleteElementFromArrayById)
    deleteElementFromArrayById(newIngredients, ingredient.id)
    setIngredients(newIngredients)
  }


  return (
    <ApolloProvider client={client}>
      <h1>Nav bar stand in</h1>
      <AccountsUIWrapper />
      <NewRecipe
        recipeName={recipeName}
        setRecipeName={setRecipeName}
        ingredients={ingredients}
        addIngredient={addIngredient}
        deleteIngredient={deleteIngredient}
      />
    </ApolloProvider>
  );
}

export default graphql(
  hiQuery
)(App);

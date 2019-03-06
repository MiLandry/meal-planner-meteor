import React from 'react';


const NewRecipe = () => (
  <div class="container">
    <form method="post">
      <label>Recipe or meal Name</label><input type="text" name="username"></input>
      <br />
      {/* <label>Password</label><input type="text" name="password"></input>
      <br /> */}
      <input type="submit" name="b1"></input>
    </form>
  </div>
);

export default NewRecipe;

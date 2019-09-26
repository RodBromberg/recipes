import React from "react";

import { Link } from "react-router-dom";

// destructuring props
// allows us to reference them by name only
// instead of recipe._id, recipe.name, and recipe.category!

// <Link> routes to recipe page

const RecipeItem = ({ _id, name, category }) => (
  <li key={_id}>
    <Link to={`/recipes/${_id}`}>
      <h4>{name}</h4>
    </Link>
    <p>
      <strong>{category}</strong>
    </p>
  </li>
);

export default RecipeItem;

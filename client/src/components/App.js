import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_RECIPES } from "../queries";
import RecipeItem from "./Recipe/RecipeItem";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Home</h1>
        <Query query={GET_ALL_RECIPES}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            console.log(data);
            return (
              <ul>
                {data.getAllRecipes.map(recipe => (
                  // ...recipe spread operator to pass down recipe our props to the component
                  <RecipeItem key={recipe._id} {...recipe} />
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;

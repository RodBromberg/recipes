import React from "react";

import { Mutation } from "react-apollo";
import { ADD_RECIPE } from "../..//queries";
import Error from "../../components/Auth/Error";

class AddRecipe extends React.Component {
  state = {
    name: "",
    instructions: "",
    category: "Breakfast",
    description: "",
    username: ""
  };

  //   componentDidMount() {
  //     this.setState({
  //       username: this.props.session.getCurrentUser.username
  //     });
  //   }

  handleChange = event => {
    //
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    const { name, category, description, instructions, username } = this.state;
    const isInvalid = !name || !category || !description || !instructions;
    return isInvalid;
  };

  handleSubmit = (event, addRecipe) => {
    event.preventDefault();
    addRecipe().then(({ data }) => {
      console.log(data);
    });
  };

  render() {
    const { name, category, description, instructions, username } = this.state;
    return (
      <Mutation
        mutation={ADD_RECIPE}
        variables={{
          name,
          category,
          description,
          instructions,
          username
        }}
      >
        {(addRecipe, { data, loading, error }) => {
          return (
            <div className="App">
              <h2 className="App">
                <form
                  className="form"
                  onSubmit={event => this.handleSubmit(event, addRecipe)}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="recipe"
                    onChange={this.handleChange}
                    value={name}
                  />
                  <select
                    name="category"
                    onChange={this.handleChange}
                    value={category}
                  >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                  </select>
                  <input
                    type="text"
                    name="description"
                    placeholder="Add Description"
                    value={description}
                    onChange={this.handleChange}
                  />
                  <textarea
                    name="instructions"
                    placeholder="Add Instructions"
                    onChange={this.handleChange}
                    value={instructions}
                  />
                  <button type="submit" className="button-primary">
                    Submit
                  </button>
                  {error && <Error error={error} />}
                </form>
              </h2>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default AddRecipe;

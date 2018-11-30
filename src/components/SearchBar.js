import React, { Component } from "react";

class SearchBar extends Component {
  // onInputChange(e) {
  //   e.target.value
  // }

  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    // let output = this.state.term;
    // document.getElementById("search").innerHTML = output;

    // console.log(this.state.term)

    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <div id="search" />
      </div>
    );
  }
}

export default SearchBar;

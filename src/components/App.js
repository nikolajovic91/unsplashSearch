import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends Component {
  state = { images: [] };

   onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    console.log(response.data.results);
    // .then(res => {
    //   console.log(res.data.results);
    // });

    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <h1 style={{textAlign:"center"}}>Unsplash Search</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

   onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID b0d459780e58bb167ec0915b7fbae76dfc61d79583ded48e87427243ff993fc1"
      }
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
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length}
      </div>
    );
  }
}

export default App;

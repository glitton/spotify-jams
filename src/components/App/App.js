import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  state = {
    searchResults: [
      { name: "Everybody", artist: "Bennie", album: "The pit", id: "1" }
    ]
  };

  render() {
    // console.log("app state", this.state.searchResults);
    return (
      <div>
        <h1>
          Spotify<span className="highlight"> Tunes</span>
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

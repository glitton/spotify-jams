import React from "react";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    // console.log("from searchresults", this.props.searchResults);
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;

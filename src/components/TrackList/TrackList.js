import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    console.log("from tracklist", this.props.tracks);
    // console.log("from tracklist", this.props.tracks[0].artist);
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track key={track.id} track={track} />;
        })}
      </div>
    );
  }
}

export default TrackList;

import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRemoval: true
    };
  }

  renderAction = props => {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>;
    }
    return <a className="Track-action">+</a>;
  };

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

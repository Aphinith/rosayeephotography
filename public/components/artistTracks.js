import React, { Component } from 'react'
import axios from 'axios'

class ArtistTracks extends Component {

  constructor (props) {
    super(props);

    this.state = { tracks: null };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({tracks: nextProps.trackList})
  }

  render() {
    console.log('this is now this.state.tracks:', this.state.tracks);
    if (this.state.tracks === null || this.state.tracks.length === 0) {
      return (
        <div>
          There are no artists searched
        </div>
        )
    }

    return (
      <div>
        An artist exists!
        {this.state.tracks[0].uri}
      </div>
      )
  }

}

export default ArtistTracks;
import React, { Component } from 'react'

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
        {this.state.tracks.map(function(track){
          return <div key={track.id}>
                  <image src={track.album.images[1].url} />
                  <div>
                    <audio controls>
                      <source src={track.preview_url} type="audio/mpeg" />
                    </audio>
                  </div>
                  <div>
                    Track Name: {track.name}
                  </div>
                 </div>
        })}
      </div>
      )
  }

}

export default ArtistTracks;
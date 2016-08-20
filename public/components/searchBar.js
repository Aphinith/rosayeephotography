import React, { Component } from 'react'
import axios from 'axios'

class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = { term: 'Enter Artist Name Here'};
    this.onSubmit = this.onSubmit.bind(this);
    this.onSendInfo = this.onSendInfo.bind(this);
    this.onSendTracks = this.onSendTracks.bind(this);
  }

  onInputChange (term) {
    this.setState({term});
  }

  onSendInfo (name, ID, image) {
    this.props.artistInfo(name, ID, image);
  }

  onSendTracks (tracks) {
    this.props.trackList(tracks);
  }

  onSubmit (e) {
    e.preventDefault();
    var artist = this.state.term;
    var finalArtist = artist.replace(' ', '+')
    console.log('this is searched:', finalArtist);
    var that = this;
    var id, name, image;
    axios.get('https://api.spotify.com/v1/search?q=' + finalArtist + '&type=artist')
      .then(function(response) {
        id = response.data.artists.items[0].id;
        name = response.data.artists.items[0].name;
        image = 'http://vignette3.wikia.nocookie.net/shokugekinosoma/images/6/60/No_Image_Available.png/revision/latest?cb=20150708082716'
        if (response.data.artists.items[0].images.length > 1) {
          image = response.data.artists.items[0].images[1].url
        }
        that.onSendInfo(name, id, image);
      })
      .then(function() {
        axios.get('https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=US')
        .then(function(response) {
          var tracks = response.data.tracks;
          that.onSendTracks(tracks);
        })
      })

  }

  render() {
    return (
        <div className="search-bar">
          <form id="search-form_3" onSubmit={this.onSubmit}>
            <input className="search_3" type="text" placeholder="Enter Artist Name Here"
                   onChange={event => this.onInputChange(event.target.value)}/>
            <input className="search_4"type="submit" value="search"/>
          </form>
        </div>
      )
  }

}

export default SearchBar;

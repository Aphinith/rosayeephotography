import React, { Component } from 'react'
import axios from 'axios'

class ArtistProfile extends Component {

  constructor (props) {
    super(props);

    this.state = { name: null,
                   id: null,
                   image: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.profileInfo.name,
                   id: nextProps.profileInfo.id,
                   image: nextProps.profileInfo.image
    })
  }

  render() {
    return (

      <div>
        <img className="artist-image" src={this.state.image} />
        <div className="artist-name">
          {this.state.name}
        </div>
      </div>

      )
  }

}

export default ArtistProfile;
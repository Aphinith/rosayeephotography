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
    console.log('this is nextprops:', nextProps.profileInfo.name);
    console.log('this is the new state:', this.state);
  }

  render() {
    return (

      <div>
        This is where the main artist profile will show!
        <img src={this.state.image} />
        <div className="ArtistName">
          {this.state.name}
        </div>
      </div>

      )
  }

}

export default ArtistProfile;
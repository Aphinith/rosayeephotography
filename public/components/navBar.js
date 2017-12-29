import React, { Component } from 'react'
import './navBar.css'

class NavigationBar extends Component {

  render() {
    return (
      <div className="nav-bar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>
      )
  }
}

export default NavigationBar;
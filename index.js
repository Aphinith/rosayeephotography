import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { render } from 'react-dom'
import App from './public/components/app.js'

render(
  <HashRouter>
    <App />
  </HashRouter>, 
  document.getElementById('app'));

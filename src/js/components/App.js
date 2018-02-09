import React, { Component } from 'react'
import Search from '../containers/Search'
import Weather from '../containers/Weather'
class App extends Component {
  render() {    
    return (
      <div>
        <h1>Weather App</h1>
        <Search />
        <Weather />
      </div>
    );
  }
}

export default App

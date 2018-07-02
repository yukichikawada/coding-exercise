import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-row"></div>
        <div className="content">     
          <h1>GiphyTooltip demo</h1>
          <p className="App-intro">
            Just select text and get GIFS!
          </p>
          <p className="App-intro">
            Cats <span role="img" aria-label="cat">😺</span>, dogs <span role="img" aria-label="dog">🐶</span> and unicorns <span role="img" aria-label="unicorn">🦄</span> !
          </p>
        </div>
        <div className="grid-row"></div>
      </div>
    );
  }
}

export default App;

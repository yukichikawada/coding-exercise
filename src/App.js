import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      highlighted: '',
      gifURL: '',
    };
  }

  handleClick = (event) => {
    let text;
    if (window.getSelection) {
      text = window.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    } else if (document.selection) {
      text = document.selection.createRange().text;
    }

    if (text.toString() !== '') {
      this.setState(
        { highlighted: text.toString() }, () => {
          this.fetchGIF();
        }
      );
    } 
  }

  fetchGIF() {
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.highlighted}&api_key=${api_key}&limit=1`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ gifURL: data.data[0].images.fixed_height.url },
                                  () => this.renderGIF()))
      .catch(e => console.log('error', e));
  }

  renderGIF() {
    console.log(this.state.highlighted);
    console.log(this.state.gifURL);
  }

  purgeGIF = (event) => {
    this.setState({ 
      highlighted: '',
      gifURL: ''
    });
  }

  render() {
    const isHighlighted = this.state.highlighted;
    return (
      <div className="App">
        <div className="grid-row" onClick={this.purgeGIF}>
          { isHighlighted ? (
              <img src={this.state.gifURL} alt={`broken link for: ${this.state.highlighted}`} />
            ) : ''
          }
        </div>
        <div className="content">     
          <h1>GiphyTooltip demo</h1>
          <p className="App-intro" onMouseUp={this.handleClick} >
            Just select text and get GIFS!
          </p>
          <p className="App-intro" onMouseUp={this.handleClick}>
            Cats <span role="img" aria-label="cat">😺</span>, dogs <span role="img" aria-label="dog">🐶</span> and unicorns <span role="img" aria-label="unicorn">🦄</span> !
          </p>
        </div>
        <div className="grid-row" onClick={this.purgeGIF}></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifURL: '',
      highlighted: '',
      placement: 'top',
      visible: false
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
    this.setState({ visible: true });
    console.log(this.state.highlighted);
    console.log(this.state.gifURL);
  }

  purgeGIF = (event) => {
    this.setState({ 
      gifURL: '',
      highlighted: '',
      visible: false
    });
  }

  render() {
    const isHighlighted = this.state.highlighted;
    return (
      <div className="App">
        <div className="grid-row" onClick={this.purgeGIF}>
        </div>
        <div className="content">
          <Tooltip
            placement={this.state.placement}
            visible={this.state.visible}
            overlay={<img src={this.state.gifURL} alt={`broken link for: ${this.state.highlighted}`} />}>
            <div>
              <h1>GiphyTooltip demo</h1>
              <p className="App-intro" onMouseUp={this.handleClick} >
                Just select text and get GIFS!
              </p>
              <p className="App-intro" onMouseUp={this.handleClick}>
                Cats <span role="img" aria-label="cat">😺</span>, dogs <span role="img" aria-label="dog">🐶</span> and unicorns <span role="img" aria-label="unicorn">🦄</span> !
              </p>
            </div>
          </Tooltip>
        </div>
        <div className="grid-row" onClick={this.purgeGIF}></div>
      </div>
    );
  }
}

export default App;

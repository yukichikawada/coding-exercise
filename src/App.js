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
      offsetX: -134,
      offsetY: -70,
      placement: 'top',
      visible: false
    };
  }
  // offset values miss the mark even more when purgeGIF() isn't triggered

  handleClick = (event) => {
    let text;
    if (window.getSelection) {
      text = window.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    } else if (document.selection) {
      text = document.selection.createRange().text;
    }
    // save an api call in the event '' is highlighted
    // and prevent alt img txt from reading broken link
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
    const limit = '1';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.highlighted}&api_key=${api_key}&limit=${limit}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ 
        gifURL: data.data[0].images.fixed_height.url 
        }, () => this.renderGIF()))
      .catch(e => console.log('error', e));
  }

  renderGIF() {
    this.setState({ visible: true });
  }

  // this is triggered when anywhere above or below the 
  // middle third is clicked, hiding the tooltip
  purgeGIF = (event) => {
    this.setState({ 
      gifURL: '',
      highlighted: '',
      visible: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="grid-row" onClick={this.purgeGIF}>
        </div>
        <main className="content">
          <Tooltip
            align={{
              offset: [this.state.offsetX, this.state.offsetY],
            }}
            overlay={<img src={this.state.gifURL} 
              alt={`broken link for: ${this.state.highlighted}`} />}
            placement={this.state.placement}
            visible={this.state.visible}
          >
            <section>
              <h1>GiphyTooltip demo</h1>
              <p className="app-text" onMouseUp={this.handleClick} >
                Just select text and get GIFS! <br />
                Cats <span role="img" aria-label="cat">😺</span>, dogs <span role="img" aria-label="dog">🐶</span> and unicorns <span role="img" aria-label="unicorn">🦄</span> !
              </p>
            </section>
          </Tooltip>
        </main>
        <div className="grid-row" onClick={this.purgeGIF}></div>
      </div>
    );
  }
}

export default App;

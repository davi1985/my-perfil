import React, { Component } from 'react';
import github from './github.png';
import twitter from './twitter.png';
import medium from './medium.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="#" className="App-perfil"></a>
          <h3>
            Hi, I'm Davi Silva
          </h3>
          <p>Welcome here in my personal Website.</p>

          <div className="links">
            <a href="https://github.com/davi1985"
            target="_blank"
            rel="noopener noreferrer" className="App-links" alt="github">
                <img src={github} className="App-links"/>
            </a>
            <a href="https://twitter.com/dssilvap"
            target="_blank"
            rel="noopener noreferrer" className="App-links" alt="twitter">
                <img src={twitter}className="App-links" />
            </a>
            <a href="https://medium.com/@dssilvap"
            target="_blank"
            rel="noopener noreferrer" className="App-links" alt="medium">
                <img src={medium} className="App-links" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

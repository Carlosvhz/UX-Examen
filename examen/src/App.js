import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*Header*/
import Header from "./Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <body>
          <p>
            asdasdsadasdasdasdsa
          </p>
        </body>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            David se la come toda
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

export default App;

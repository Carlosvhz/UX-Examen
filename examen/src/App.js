import React, { Component } from 'react';
import logo from './components/images/5845e687fb0b0755fa99d7ee.png';
import './components/css/App.css';

//  ==== Componentes ==== 
/*Header*/
import Header from "./components/js/Header"
/*Footer*/
import Footer from "./components/js/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>

        
        <body>
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

        <Footer/>

      </div>
    );
  }
}

export default App;

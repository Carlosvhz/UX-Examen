import React, { Component } from 'react';
import './components/css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//  ==== Componentes ==== 
/*Header*/
import Header from "./components/js/Header"

/* ===== Paginas ===== */ 
import HomePage from "./components/Pages/HomePage.js";
import ProductPage from "./components/Pages/Products.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/Products" component={ProductPage} exact/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
/* 
<div className = "footer">
          <Footer/>
        </div>
*/
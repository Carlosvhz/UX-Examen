import React, { Component } from 'react';
import './components/css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//  ==== Componentes ==== 
/*Header*/
import Header from "./components/js/Header"

/* ===== Paginas ===== */ 
import HomePage from "./components/Pages/HomePage.js";
import ProductPage from "./components/Pages/Products.js";
import ProductCarPage from "./components/Pages/ProductCar.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/products" component={ProductPage} exact/>
            <Route path="/productscar" component={ProductCarPage} exact/>
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
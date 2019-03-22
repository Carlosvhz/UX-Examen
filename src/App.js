import React, { Component } from 'react';
import './components/css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//  ==== Componentes ==== 
/*Header*/
import Header from "./components/js/Header"


/* ===== Paginas ===== */ 
import HomePage from "./components/Pages/HomePage.js";
import ProductPage from "./components/Pages/Products.js";
import ProductCartPage from "./components/Pages/ProductCart.js";
import SignIn from "./components/js/SignIn"
import Error404 from "./components/js/Error404"
import LogIn from "./components/js/LogIn.js"

class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter>
          <div>
          <Header/>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/products" component={ProductPage} exact/>
              <Route path="/productscar" component={ProductCartPage} exact/>
              <Route path="/signin" component={SignIn} exact/>
              <Route path="/login" component={LogIn} exact />
              <Route component={Error404}/>

            </Switch>

          </div>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
/* 
<div className = "footer">
          <Footer/>
        </div>
*/
import React, { Component } from 'react';

//  ==== Componentes ==== 
/*Header*/
import Header from "../js/Header.js"
/*Footer*/
import Footer from "../js/Footer.js"
/*Card*/ 
import BodyJumbotron from "../js/BodyJumbotron"

/* ===================================== */
import carrito from "../images/carrito.png" 
import "../css/HomePage.css"

import {
    MDBRow,
    MDBCol
   } from 'mdbreact';

class HomePage extends Component {


    render() {
        return (
            <div className="App">
        
                <div className="fixed">
                    <Header/>
                </div>

                <BodyJumbotron/>
                
                <Footer/>        
            </div>
        );
    }
}

export default HomePage;
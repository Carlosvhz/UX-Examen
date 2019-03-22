import React, { Component } from 'react';

//  ==== Componentes ==== 
/*Header*/
import Header from "../js/Header.js"
/*Footer*/
import Footer from "../js/Footer.js"
/*Card*/ 
import BodyCard from "../js/BodyCard"
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

                <BodyCard src="https://image.winudf.com/v2/image/Y29tLmFtc29mdC5saXZld2FsbHBhcGVyLmFwcDY0X3NjcmVlbnNob3RzXzdfY2FhMzJiNA/screen-7.jpg?h=800&fakeurl=1&type=.jpg"/>
                <BodyCard src ="https://wallpaperaccess.com/full/172758.jpg"/>
                <Footer/>        
            </div>
        );
    }
}

export default HomePage;
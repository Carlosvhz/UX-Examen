import React, { Component } from 'react';

//  ==== Componentes ==== 
/*Header*/
import Header from "../js/Header.js"
/*Footer*/
import Footer from "../js/Footer.js"
/*Card*/ 
import CardBody from "../js/BodyCard.js"
/*Carousel*/ 
import Carousel from "../js/Carousel.js"

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

                <div container>
                    <Carousel/>
                </div>

                <MDBRow className="row">
                    <MDBCol>
                        <CardBody/>
                    </MDBCol>
                    
                </MDBRow>
                
                <div container>
                <Footer/>
                </div>
        
            </div>
        );
    }
}

export default HomePage;
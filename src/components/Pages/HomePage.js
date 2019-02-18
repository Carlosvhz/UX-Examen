import React, { Component } from 'react';

//  ==== Componentes ==== 
/*Header*/
import Header from "../js/Header.js"
/*Footer*/
import Footer from "../js/Footer.js"
/*Card*/ 
import BodyCard from "../js/BodyCard.js"
/*Carousel*/ 
import Carousel from "../js/Carousel.js"


import{
    MDBCol,
    MDBRow
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

                <div container>
                <Footer/>
                </div>
        
            </div>
        );
    }
}

export default HomePage;
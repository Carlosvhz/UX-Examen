import React, { Component } from 'react';

//  ==== Componentes ==== 
/*Header*/
import Header from "../js/Header.js"
/*Footer*/
import Footer from "../js/Footer.js"
/*Card*/ 
/*Carousel*/ 
import Carousel from "../js/Carousel.js"


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
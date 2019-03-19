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

                <MDBRow>
                    <MDBCol sm="12">
                        <Carousel/>
                    </MDBCol>
                </MDBRow>

                <div container>
                    <MDBRow className="row">
                        <MDBCol sm="4">
                            <CardBody title="Products" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in egestas neque, a mollis dui. Proin ultrices erat tellus, vitae aliquet dui ultrices vitae." 
                                src = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/XCM_1095776_Manual_750x375_1095776_us_pc_hardware_pcit_maincomputersstorefront_storage_cg_750x375_jpg_PCIT_PCIT_mainComputersStorefront_Additional_Stock_photos.jpg"
                            />
                        </MDBCol>
                        
                        <MDBCol sm="4">
                            <CardBody title="My cart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in egestas neque, a mollis dui. Proin ultrices erat tellus, vitae aliquet dui ultrices vitae." 
                                src = {carrito}
                            />
                        </MDBCol>

                        <MDBCol sm="4">
                            <CardBody title="About us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in egestas neque, a mollis dui. Proin ultrices erat tellus, vitae aliquet dui ultrices vitae." 
                                src = "https://www.redquanta.com/rq-theme/rqassets/images/aboutus-main.jpg"
                            />
                        </MDBCol>
                    </MDBRow>
                </div>
                
                <div container>
                <Footer/>
                </div>
        
            </div>
        );
    }
}

export default HomePage;
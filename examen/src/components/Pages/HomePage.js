import React, { Component } from 'react';

//  ==== Componentes ==== 
/*Header*/
import Header from "../js/Header.js"
/*Footer*/
import Footer from "../js/Footer.js"
/*Card*/ 
import BodyCard from "../js/BodyCard.js"


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

                <div className="container body">
                <MDBRow>
                    <MDBCol className="column">
                    <BodyCard/>
                    </MDBCol>

                    <MDBCol className="column">
                    <BodyCard/>
                    </MDBCol >
                </MDBRow>


                <MDBRow>
                    <MDBCol className = "column">
                    <BodyCard/>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol className="column">
                    <BodyCard/>
                    </MDBCol>

                    <MDBCol className="column">
                    <BodyCard/>
                    </MDBCol >

                    <MDBCol className="column">
                    <BodyCard/>
                    </MDBCol >
                </MDBRow>

                <MDBRow>
                    <MDBCol className = "column">
                    <BodyCard/>
                    </MDBCol>
                </MDBRow>
                </div>
        

                <div>
                <Footer/>
                </div>
        
            </div>
        );
    }
}

export default HomePage;
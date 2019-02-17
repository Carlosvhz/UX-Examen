import React, { Component } from 'react';
import './components/css/App.css';

//  ==== Componentes ==== 
/*Header*/
import Header from "./components/js/Header"
/*Footer*/
import Footer from "./components/js/Footer"
/*Card*/ 
import BodyCard from "./components/js/BodyCard"

import{
  MDBCol,
  MDBRow
} from 'mdbreact';

class App extends Component {
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
        </div>
        

        <div>
          <Footer/>
        </div>
        
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
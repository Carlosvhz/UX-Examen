import React, { Component } from 'react';
import "../css/Footer.css"

import{
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdbreact';

export default class Footer extends React.Component{
    render(){
        return (
            <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
              </MDBContainer>
              <div className="text-center">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-fb mx-1">
                      <i className="fab fa-facebook-f">
                        <img className="brand-logo" src={require("../images/facebook.png")} alt="Logo" />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-tw mx-1">
                      <i className="fab fa-twitter"> 
                        <img className="brand-logo" src={require("../images/twitter.png")} alt="Logo" />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-tw mx-1">
                      <i className="fab fa-google-plus btn-sm btn-tw mx-1">
                        <img className="brand-logo" src={require("../images/google.png")} alt="Logo" />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: <a href="./"> Hardware-3D.com</a>
                </MDBContainer>
              </div>
            </MDBFooter>
          );
    }
}



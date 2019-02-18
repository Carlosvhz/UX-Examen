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
                <MDBRow>
                  <MDBCol md="6">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                      About
                    </h5>
                    <p>
                      La página ha sido creada con propositos educactivos.
                    </p>
                  </MDBCol>
                  <hr className="clearfix w-100 d-md-none" />
                  <MDBCol md="6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!">Home</a>
                      </li>
                      <li>
                        <a href="#!">About</a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
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
                    <a className="ins-ic">
                      <i className="fab fa-instagram btn-sm btn-tw mx-1">
                        <img className="brand-logo" src={require("../images/instagram.png")} alt="Logo" />
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



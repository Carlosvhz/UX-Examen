import React, { Component } from 'react';
import '../css/Footer.css';

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
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                      Links
                    </h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!">Link 1</a>
                      </li>
                      <li>
                        <a href="#!">Link 2</a>
                      </li>
                      <li>
                        <a href="#!">Link 3</a>
                      </li>
                      <li>
                        <a href="#!">Link 4</a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <hr />
              <hr />
              <div className="text-center">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-fb mx-1">
                      <i className="fab fa-facebook-f"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-tw mx-1">
                      <i className="fab fa-twitter"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1">
                      <i className="fab fa-google-plus"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-li mx-1">
                      <i className="fab fa-linkedin-in"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-dribbble mx-1">
                      <i className="fab fa-dribbble"> </i>
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



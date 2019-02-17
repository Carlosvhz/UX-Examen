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
        return(
            <div className = "Footer">
                <MDBFooter className="font-small pt-4 ">

                <MDBContainer fluid className="mdbfooter-c1 text-center text-md-left">
                    <MDBRow>
                        <MDBCol>
                            <h5>Community</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol>
                            <h5>Columna 2, Fila 1</h5>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer fluid className="mdbfooter-c2 text-center py-3" >
                <h5>Copyright 7w7</h5>
                </MDBContainer >

                </MDBFooter>   
            </div>
        );
    }
}



import React from 'react';
import Carousel from "./Carousel.js"
/* ================================= */
import firebase from "../../firebase.js"

import "../css/SignIn.css"

import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    handleChange = (event) =>{
        this.setState({ [event.target.name] : event.target.value});
    };

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((cred)=>{console.log(cred)}).catch((error)=>{console.log(error)})
    };

    Re_render = () =>{
        this.forceUpdate()
    }
    
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <form onSubmit={this.handleSubmit}>
                        <p className="h5 text-center mb-4">Subscribe</p>
                        <div className="grey-text">
                        {/*<MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        /> */}
                        <MDBInput
                            label="Your E-mail"
                            icon="user"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            name ="email"
                            email = {this.state.email}
                            onChange={this.handleChange}
                        />
                        <MDBInput
                            label="Your Password"
                            icon="envelope"
                            group
                            type="password"
                            validate
                            error="wrong"
                            success="right"
                            name="password"
                            password = {this.state.password}
                            onChange = {this.handleChange}
                        />
                        </div>

                        <div className="text-center">
                            <button href="/" class="myButton">SignIn</button>
                        </div>
                        
                    </form>
                    </MDBCol>
                    <MDBCol md="6">
                        <Carousel/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default SignIn;

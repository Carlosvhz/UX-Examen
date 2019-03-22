import React, { Component } from 'react';
import firebase from "../../firebase.js"

import "../css/SignIn.css"

import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            email:'',
            password:'',
            
        }
        
    }

    login = (event)=>{
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.passowrd).then( (u)=>{}).catch((error)=>{console.log(error)});
    }

    handleChange = (event)=>{
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
               <MDBContainer isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
                    <MDBRow>
            
                        <MDBCol sm ="6">
                            <img className="user-image" src={require("../images/login-user.png")} alt="Logo" />
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Log In</p>
                                <div className="grey-text">
                                <MDBInput
                                    label="Your E-mail"
                                    icon="user"
                                    group
                                    validate
                                    error="wrong"
                                    success="right"

                                    onChange = {e => this.setState({email: e.target.value})}
                                    value = {this.state.email}

                                    type="email"
                                    name="email"
                                />
                                <MDBInput
                                    label="Password"
                                    icon="envelope"
                                    group
                                    validate
                                    error="wrong"
                                    success="right"
                                    
                                    onChange = {e => this.setState({passord: e.target.value})}
                                    value = {this.state.password}
                                    type="email"
                                    name = "password"
                                />
                                </div>
                                
                                <div className="text-center"  >
                                    <button 
                                        class="myButton" 
                                        onClick = {()=>{
                                            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(async () => {
                                                if (firebase.auth().currentUser.emailVerified){
                                                    this.props.toggle();
                                                    this.props.update("Exito");
                                                }else{
                                                    await firebase.auth().currentUser.sendEmailVerification();
                                                    await this.props.update("Verifique de nuevo las credenciales");
                                                    await firebase.auth().signOut();
                                                }
                                            }).catch(e => {
                                                this.props.update("Error");
                                                console.error(e)
                                            });
                                        }}>
                                    SignIn</button>
                                </div>

                            </form>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default LogIn;
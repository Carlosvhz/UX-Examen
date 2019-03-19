import React from 'react';
/* ================================= */
import firebase from "../../firebase.js"


import { Form, Label, Input, Button, Row} from 'reactstrap';

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
            <div className="container ">

                <Form onSubmit={this.handleSubmit}>
                    <h5>
                        Sign In
                    </h5>
                    <Row>
                        <Label htmlFor="email"> Email </Label>
                        <Input  type="email" name="email"  value ={this.state.email} onChange={this.handleChange}/> 
                    </Row>

                    <Row>
                        <Label htmlFor="password"> password </Label>
                        <Input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/>
                    </Row>

                    <Row>
                        <Button className="myButton" color="secondary" size="sm"  onClick={this.Re_render}>Sign In</Button>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default SignIn;

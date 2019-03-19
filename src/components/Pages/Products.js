import React , { Component } from 'react';
//  ==== Components ==== 
/*Footer*/
import Footer from "../js/Footer.js"
import ProductCard from "../js/ProductCard.js"

import '../css/ProductCard.css';

import{
    MDBRow,
    MDBCol
} from 'mdbreact';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {products:[]};
    }

    componentDidMount(){
        fetch("https://us-central1-hardware-3d-ffc80.cloudfunctions.net/productImage/")
        .then(Response=>Response.json())
        .then(responseJson => this.setState({
            products:responseJson
        }));
    }

    render(){
        return (
            <MDBRow>
                <div  class="container-fluid div-card">
                    { Object.keys(this.state.products).map(item => {
                    return (
                        <MDBCol container-fluid sm = "3">
                            <ProductCard product={this.state.products[item]}/>
                        </MDBCol>
                    );
                    })}
                    <Footer/>
                </div>
            </MDBRow>
        );
    }
}


export default Products;
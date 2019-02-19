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
        this.state = require("../../AllProducts.json");
    }
    render(){
        return (
                <div  class=" div-card">
                    {this.state.products.map(item => {
                    return (
                        <MDBCol container-fluid sm = "3">
                            <ProductCard product={item}/>
                        </MDBCol>
                    );
                    })}
                    <Footer/>
                </div>
        );
    }
}


export default Products;
import React from 'react';

//  ==== Components ==== 
/*Footer*/
import Footer from "../js/Footer.js"


import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';


const ProductCart = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.price}</CardSubtitle>
                    </CardBody>
                    <CardImg width="100%" src={props.src} alt="Card image cap" />
                    <CardBody>
                    <CardText>This product has been add to your card</CardText>
                    <CardLink href="/products/">Remove</CardLink>
                    <CardLink href="/products/">Back to store</CardLink>
                </CardBody>
            </Card>

            <Footer/>
        </div>
    );
};

export default ProductCart;
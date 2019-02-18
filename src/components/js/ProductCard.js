import React, {Component} from 'react';
import { Card, CardImg, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';

import '../css/ProductCard.css';

class ProductCard extends Component {
   constructor(props){
        super(props);
   }

    render(){

        return (
            <div>
                <Card> 
                    {console.log(this.props.product)}
                    <CardImg 
                    className='card-img-p' 
                    top width="100%" 
                    src={this.props.product.image} 
                    alt="Card image "
                    />
                    <CardBody>
                        <CardTitle>{this.props.product.name}</CardTitle>
                        <CardSubtitle>{this.props.product.price}</CardSubtitle>
                        <Button
                            className='button'
                        >Buy</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default ProductCard;

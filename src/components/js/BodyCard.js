import React, { Component } from 'react';
import '../css/BodyCard.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

import '../css/ProductCard.css';

export default class BodyCard extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
        <div class="container-fluid div-card">
            <Card inverse >
            
              <CardImg 
                className='card-img' 
                top width="100%" 
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image "
              />
              
                <CardImgOverlay>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Here is the Card Text</CardText>
                </CardImgOverlay>

            </Card>
        </div>
    );
  }
}

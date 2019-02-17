import React, { Component } from 'react';
import '../css/BodyCard.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


import logo from '../images/cms.png';


export default class BodyCard extends Component {
  render() {
    return (
        <div class="container-fluid div-card">
            <Card inverse >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                    </CardImgOverlay>
            </Card>
        </div>
    );
  }
}

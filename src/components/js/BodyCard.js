import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

import '../css/ProductCard.css';

const Example = (props) => {
  return (
    <div className="div-card">
      <Card>
        <CardImg top width="100%" height="90%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;

import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const DataCard = (props) => {
  return (
    <Row className='col-8'>
      <Col>
        <Card body>
          <CardTitle>{props.firstname}</CardTitle>
          <CardText>{props.lastname}</CardText>
          <Button>{props.email}</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default DataCard;
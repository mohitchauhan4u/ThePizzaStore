import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pizza.image} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>variant</h6>
                <select>
                  {pizza.varients.map((varient) => (
                    <option value={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>quantity</h6>
                <select>
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pizza;

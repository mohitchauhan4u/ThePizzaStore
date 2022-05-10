import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const AdminScreen = () => {
  return (
    <>
      <>
        <Container>
          <Row>
            <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
            <Col md={4}>
              <ButtonGroup vertical style={{ minHeight: "200px" }}>
                <Button>All Users</Button>
                <Button>All Pizzas</Button>
                <Button>Add new Pizza</Button>
                <Button>All orders</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};

export default AdminScreen;

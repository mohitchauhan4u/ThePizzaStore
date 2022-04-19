import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>The Pizza Store</h1>
            <p>
              Est tempor tempor dolor aliqua eu cupidatat deserunt. Consequat
              nostrud adipisicing labore eiusmod ad in veniam. Dolore est
              commodo laboris excepteur magna dolore cupidatat qui velit esse
              quis cillum nulla. Eiusmod mollit non laboris occaecat occaecat
              Lorem laboris esse. Dolor id ex eu minim nostrud proident et
              ullamco adipisicing nisi excepteur tempor qui exercitation. Et in
              velit non aliquip dolore quis irure duis consequat.
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

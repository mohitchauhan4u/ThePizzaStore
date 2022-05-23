import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";

// Rember to add CountQueuingStrategy, State, distrcit wise serach filter for contact information
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
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <BiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <BiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <BiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <BiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <BiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "70%", marginTop: "20px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

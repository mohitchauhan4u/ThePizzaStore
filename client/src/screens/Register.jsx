import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerhandler = () => {
    if (password !== confirmPassword) {
      alert("Password do not match");
    } else {
      const user = (name, email, password, confirmPassword);
    }
  };

  return (
    <>
      <Container>
        <Form>
          <h1>Registration</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
              type="password"
              placeholder="ConfirmPassword"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={registerhandler}>
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      {" "}
                      Price: {item.quantity} X {item.prices[0][item.varient]}={" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity :&nbsp;
                      {/* <FaMinusCircle className="text-danger" /> */}
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                      &nbsp; {item.quantity}&nbsp;
                      {/* <FaPlusCircle className="text-success" /> */}
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "60px" }}
                    />
                    <FaTrash />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;

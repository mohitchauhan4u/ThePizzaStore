import React, { useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import PizzaList from "../components/Admin/PizzaList";
import UserList from "../components/Admin/UserList";

const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <>
        <Container>
          <Row>
            <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
            <Col md={4}>
              <ButtonGroup vertical style={{ minHeight: "400px" }}>
                <Button
                  style={{ margin: "5px" }}
                  onClick={() => history.push("/admin/userlist")}
                >
                  All Users
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  onClick={() => history.push("/admin/pizzalist")}
                >
                  All Pizzas
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  onClick={() => history.push("/admin/addnewpizza")}
                >
                  Add new Pizza
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  onClick={() => history.push("/admin/orderlist")}
                >
                  All orders
                </Button>
              </ButtonGroup>
            </Col>
            <Col md={8}>
              <Switch>
                <Route path="/admin" component={UserList} exact></Route>
                <Route
                  path="/admin/userlist"
                  component={UserList}
                  exact
                ></Route>
                <Route
                  path="/admin/pizzalist"
                  component={PizzaList}
                  exact
                ></Route>
                <Route
                  path="/admin/orderlist"
                  component={OrderList}
                  exact
                ></Route>
                <Route
                  path="/admin/addnewpizza"
                  component={AddNewPizza}
                  exact
                ></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};

export default AdminScreen;

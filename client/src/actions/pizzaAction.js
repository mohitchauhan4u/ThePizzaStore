import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getAllPizzas");
    console.log(response.data);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    await axios.post("/api/pizzas/addpizza", { pizza });
    dispatch({ type: "ADD_PIZZAS_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
  }
};

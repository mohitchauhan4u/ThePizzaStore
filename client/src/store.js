import { combineReducers, applyMiddleware, configureStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/pizzaReducers";

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
});
const initialState = {};
const middleware = [thunk];
const store = configureStore(
  rootReducer,
  initialState,
  composeWithDevTools(...middleware)
);
export default store;

import { createStore } from "redux";
import ShoppingReducer from "./reducer";

const store = createStore(ShoppingReducer);

export default store;

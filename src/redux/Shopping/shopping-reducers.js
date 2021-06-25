import * as actionTypes from "./shopping-types";
import { products } from "../../data/items";

const INITIAL_STATE = {
  allProducts: products,
  cart: [],
  currentItem: null,
};

// console.log(INITIAL_STATE.allProducts);
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Get item data from allProducts array
      const item = state.allProducts.find(
        (prod) => prod.id === action.payload.id
      );
      //Checks if item is already in cart
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

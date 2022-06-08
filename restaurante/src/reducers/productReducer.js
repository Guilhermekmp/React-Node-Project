import { GET_PRODUCTS, ADD_ORDER, ADD_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    default:
      return state;
  }
}

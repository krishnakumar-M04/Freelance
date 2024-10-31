import { createStore } from "redux";
const initialData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ],
  cart: [],
  total: 0,
  users: ["Admin", 'Customer', 'Manager', 'End-user'],
  loginDlt:"None"
};

const reducer = (state = initialData, action) => {
    console.log(action)
  if (action.type ==="PURCHASE") {
    return {
        ...state,
        cart: [...state.cart, action.payload],
      // spread operator is used the data that get from the dispatch method
        total: state.total + parseInt( action.payload.price),
    };
  }
  if (action.type === 'DELETE') {
    return { 
      ...state,
      cart: state.cart.filter((i, index) => index!==action.payLoad.index),
      total:state.total- parseInt(action.payLoad.price)
    }
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      loginDlt: action.payLoad
    }
  }
    return state;
};
const Store = createStore(reducer);
export default Store;

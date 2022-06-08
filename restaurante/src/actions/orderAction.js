import axios from "axios";
import { GET_ORDERS, ADD_ORDER, UPDATE_ORDER_STATUS, DELETE_ORDER } from "./types";

export const getOrders = () => (dispatch) => {
  axios
    .get("/api/v1/orders")
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ORDERS,
        payload: null,
      });
    });
};

export const updateOrders = () => (dispatch) => {
  axios
    .put("/api/v1/kitchen")
    .then((res) => {
      dispatch({
        type: UPDATE_ORDER_STATUS,
        payload: res.data,
      });
    })
    .catch((res) => {
      dispatch({
        type: UPDATE_ORDER_STATUS,
        payload: null,
      });
    });
};

export const removeOrder = (id) => (dispatch) => {
  axios
    .delete(`/api/v1/orders/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_ORDER,
        payload: err.response.data,
      });
    });
};


export const addOrder = id => (dispatch) => {
  axios
    .post(`api/v1/orders/${id}`)
    .then((res) => {
      dispatch({
        type: ADD_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_ORDER,
        payload: err.response.data
      });
    });
};

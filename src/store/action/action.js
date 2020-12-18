import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  };
};

export const fetchSuccess = (res) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    dataRecived: res.data,
  };
};

export const fetchFail = (error) => {
  return {
    type: actionTypes.FETCH_FAIL,
    errormsg: error,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchSuccess(res));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
      });
  };
};

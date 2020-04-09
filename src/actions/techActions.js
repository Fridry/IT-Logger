import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

import api from "../api";

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await api.get("/techs");

    dispatch({
      type: GET_TECHS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await api.post("/techs", tech);

    dispatch({
      type: ADD_TECH,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await api.delete(`/techs/${id}`);

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

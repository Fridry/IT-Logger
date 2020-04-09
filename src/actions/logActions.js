import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

import api from "../api";

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await api.get("/logs");

    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await api.post("/logs", log);

    dispatch({
      type: ADD_LOG,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await api.delete(`/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await api.get(`/logs?q=${text}`);

    dispatch({
      type: SEARCH_LOGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await api.put(`/logs/${log.id}`, log);

    dispatch({
      type: UPDATE_LOG,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

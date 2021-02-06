import React from "react";
import { arrayUpdateHelper } from "../helpers/utils";

export const initialState = {
  error: null,
  datasets: [
    {
      id: 1,
      name: "First",
      label: "First",
      checked: false,
      data: [],
      fill: false,
      borderColor: "rgba(75,255,192,1)",
    },
    {
      id: 2,
      name: "Second",
      label: "Second",
      checked: false,
      data: [],
      fill: false,
      borderColor: "rgb(20,58,105)",
    },
    {
      id: 3,
      name: "Third",
      label: "Third",
      checked: false,
      data: [],
      fill: false,
      borderColor: "rgb(237,75,255)",
    },
    {
      id: 4,
      name: "Fourth",
      label: "Fourth",
      checked: false,
      data: [],
      fill: false,
      borderColor: "rgb(246,211,22)",
    },
    {
      id: 5,
      name: "Fifth",
      label: "Fifth",
      checked: false,
      data: [],
      fill: false,
      borderColor: "rgb(250,29,29)",
    },
    {
      id: 6,
      label: "Sixth",
      name: "Sixth",
      checked: false,
      data: [],
      fill: false,
      borderColor: "rgb(80,179,7)",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ENABLE_CHECKBOX_ACTION:
      return {
        ...state,
        datasets: state.datasets.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                checked: true,
                interval: action.payload.intervalId,
                label: item.name,
              }
            : item
        ),
      };
    case DISABLE_CHECKBOX_ACTION:
      return {
        ...state,
        datasets: state.datasets.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                checked: false,
                interval: clearInterval(item.interval),
              }
            : item
        ),
      };
    case SET_INITIAL_DATA:
      return {
        ...state,
        datasets: state.datasets.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              data: action.payload.data,
            };
          } else {
            return item;
          }
        }),
      };
    case UPDATE_DATA:
      return {
        ...state,
        datasets: state.datasets.map((item) => {
          if (item.id === action.payload.id) {
            const result = {
              ...item,
              data: arrayUpdateHelper(item.data, action.payload.data),
            };
            return result;
          } else {
            return item;
          }
        }),
      };
    case SET_ERROR:
      return {
        ...state,
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

export const SET_ERROR = "SET_ERROR";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_INITIAL_DATA = "SET_INITIAL_DATA";
export const ENABLE_CHECKBOX_ACTION = "ENABLE_CHECKBOX_ACTION";
export const DISABLE_CHECKBOX_ACTION = "DISABLE_CHECKBOX_ACTION";

export const AppContext = React.createContext();

import React, { useReducer } from "react";
import { initialState, reducer, AppContext } from "../storage/reducer";
import IndexComponent from "./IndexComponent/IndexComponent";

const AppContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      <IndexComponent />
    </AppContext.Provider>
  );
};

export default AppContainer;

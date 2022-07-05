import React from "react";
import { AppState, Action, applyAction } from "./state";

type AppCtxType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

const StateContext = React.createContext<AppCtxType>({
  state: {},
  dispatch: (v) => {},
});

export const StateProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(applyAction, {});

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => React.useContext(StateContext);

import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

export const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const initialAlertVal = null;
  const [state, dispatch] = useReducer(alertReducer, initialAlertVal);

  const setAlert = (msg, ty) => {
    dispatch({
      type: "SET_ALERT",
      payload: {
        msg,
        ty,
      },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
      });
    }, 3000);
  };
  return (
    <AlertContext.Provider
      value={{
        state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

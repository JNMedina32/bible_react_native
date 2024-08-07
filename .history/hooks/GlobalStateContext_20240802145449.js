import { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  darkMode: false,
  fontSize: 16,
  translation: "ASV",
  notifications: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    case "SET_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "SET_TRANSLATION":
      return { ...state, translation: action.payload };
    case "TOGGLE_NOTIFICATIONS":
      return { ...state, notifications: !state.notifications };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
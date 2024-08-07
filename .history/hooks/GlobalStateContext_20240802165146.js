import { createContext, useReducer, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

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
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === "dark");

  useEffect

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
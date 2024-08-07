import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
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

  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, [isDarkTheme]);

  const theme = {
    colors: {
      background: isDarkTheme ? "#2e2e2e" : "#fdf6e3",
      text: isDarkTheme ? "#e0e0e0" : "#333333",
      primary: isDarkTheme ? "#a6a1ff" : "#6c63ff",
      secondary: isDarkTheme ? "#ffc700" : "#Ffd700",
      tertiary: "#556b2f",
      danger: "red",
    },
    fontSizing: {
      h1: 8,
    },
    test: {
      borderColor: "black",
      borderWidth: 1,
    },
  };

  return (
    <GlobalStateContext.Provider value={{...state}}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);

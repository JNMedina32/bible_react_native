import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { useColorScheme } from "react-native";
import { }

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  colorMode: "light",
  font_size: 16,
  translation: "American Standard Version",
  notifications: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, colorMode: action.payload };
    case "SET_FONT_SIZE":
      return { ...state, font_size: action.payload };
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

  // console.log(colorScheme);
  // console.log(state.colorMode);

  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", payload: colorScheme });
  }, [colorScheme]);


  const theme = {
    colors: {
      background: state.colorMode === "dark" ? "#2e2e2e" : "#fdf6e3",
      text: state.colorMode  === "dark" ? "#e0e0e0" : "#333333",
      primary: state.colorMode  === "dark" ? "#a6a1ff" : "#6c63ff",
      secondary: state.colorMode === "dark" ? "#ffc700" : "#Ffd700",
      tertiary: "#556b2f",
      danger: "red",
    },
    header: {
      h1: 8,
      h2: 6,
      h3: 4,
      h4: 2,
    }
  };

  return (
    <GlobalStateContext.Provider value={{ ...state, theme }}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);

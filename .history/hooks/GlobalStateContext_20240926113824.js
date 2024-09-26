import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { useColorScheme } from "react-native";
import { getUserSettings } from "../services/readQueries";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  darkMode: false,
  font_size: 16,
  translation: "American Standard Version",
  notifications: false,
  notificationsTime: "12:00",
  notificationsDays: [1, 2, 3, 4, 5, 6, 7],
  user_id: 1,
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
    case "SET_NOTIFICATIONS_TIME":
      return { ...state, notificationsTime: action.payload };
    case "SET_NOTIFICATIONS_DAYS":
      return { ...state, notificationsDays: action.payload };
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

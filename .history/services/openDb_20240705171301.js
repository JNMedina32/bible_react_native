import { openDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

export const connectToDb = () => {
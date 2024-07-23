import { openDatabase } from "react-native-sqlite-storage";

export const getDbConnection = async () => {
  return openDatabase({ name: "bible.db", location });
};
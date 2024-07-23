import { openDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

export const connectToDb = async () => {
  return openDatabase({ name: "bible.db", location: "./a" },
    () => console.log("Database opened successfully"),
    (error) => console.error(error)
  );
};

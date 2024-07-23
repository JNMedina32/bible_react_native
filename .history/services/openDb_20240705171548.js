import { openDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

export const connectToDb = async () => {
  return openDatabase({ name: "bible.db", location: "../assets/bible.db" },
    () => console.log("Database opened successfully"),
    (error) => console.error(error)
  );
};

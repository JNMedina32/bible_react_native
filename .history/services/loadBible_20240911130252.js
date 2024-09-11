import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite/legacy";
import { Asset } from "expo-asset";


const loadBible = async () => {
  const db = "bible.db";
  const dbAsset = require("../assets/bible.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbPath = `${FileSystem.documentDirectory}SQLite/${db}`;

  const fileInfo = await FileSystem.getInfoAsync(dbPath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite/`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbPath);
  }
};

export default loadBible;
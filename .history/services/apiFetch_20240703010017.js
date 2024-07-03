import * as SQLite from "expo-sqlite";



const fetchBooks = async (param) => {
  try {
    const response = await fetch(`${API_URL}/books?book=${param}`);
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error fetching books:', error);
  }
};
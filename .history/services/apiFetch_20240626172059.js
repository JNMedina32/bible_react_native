
const API_URL = 'https://localhost:3000';


const fetchBooks = async (param) => {
  try {
    const response = await fetch(`${API_URL}/books?`);
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error fetching books:', error);
  }
};
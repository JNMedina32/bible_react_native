
const API_URL = 'https://localhost:3000';


const fetchBooks = async () => {
  try {
    const response = await fetch('/books');
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error fetching books:', error);
  }
};
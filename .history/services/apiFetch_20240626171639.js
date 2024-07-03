
const fetchBooks = async () => {
  try {
    const response = await fetch('https://api.example.com/books');
    const data = await response.json();
    return data;
  }
  
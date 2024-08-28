const API_KEY = import.meta.env.VITE_TIME_API_KEY; 
const API_URL = `https://newsapi.org/v2/everything`;

export const fetchArticles = async (query = 'latest') => {
  try {
    const response = await fetch(`${API_URL}?q=${query}&apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw error;
  }
};

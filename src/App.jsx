import React, { useState, useEffect } from 'react';
import { fetchArticles } from './api';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import SearchBar from './components/SearchBar';
import { PulseLoader } from 'react-spinners';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articles = await fetchArticles();
        setArticles(articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-white bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-lg shadow-lg text-center">Articles</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && (
        <div className="flex justify-center items-center h-64">
          <PulseLoader color="#3498db" />
        </div>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="flex flex-col md:flex-row">
          <ArticleList
            articles={filteredArticles}
            setSelectedArticle={setSelectedArticle}
          />
          {selectedArticle && (
            <ArticleDetails article={selectedArticle} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;

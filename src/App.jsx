import React, { useState, useEffect } from 'react';
import { fetchArticles } from './api';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import SearchBar from './components/SearchBar';

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
      <h1 className="text-2xl font-bold mb-4">Time.com Articles</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <p>Loading articles...</p>}
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

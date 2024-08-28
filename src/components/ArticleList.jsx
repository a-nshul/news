import React from 'react';

function ArticleList({ articles, setSelectedArticle }) {
  return (
    <div className="md:w-1/2">
      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article.id}
            className="cursor-pointer p-4 border border-gray-200 rounded-md shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
            onClick={() => setSelectedArticle(article)}
          >
            <h2 className="text-lg font-semibold text-blue-600 hover:text-blue-800">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;

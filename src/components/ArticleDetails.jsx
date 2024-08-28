import React from 'react';

function ArticleDetails({ article }) {
  return (
    <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 p-8 border border-gray-300 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl bg-white">
      <h2 className="text-2xl font-extrabold text-gray-800">{article.title}</h2>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-semibold">By:</span> {article.author || 'Unknown Author'}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-semibold">Source:</span> {article.source.name || 'Unknown Source'}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-semibold">Published on:</span> {new Date(article.publishedAt).toLocaleString()}
      </p>
      <div className="mt-4">
        <p className="text-base text-gray-700 leading-relaxed">
          {article.abstract || 'No abstract available.'}
        </p>
        <p className="text-base text-gray-700 leading-relaxed mt-4">
          {article.content || 'No content available.'}
        </p>
      </div>
      <div className="mt-6">
        <img src={article.urlToImage} alt={article.title} className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
}

export default ArticleDetails;

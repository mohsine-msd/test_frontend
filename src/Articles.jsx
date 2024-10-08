import React, { useEffect, useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticleContext } from './App';

const Articles = () => {
  const { articles } = useContext(ArticleContext); 
  
  return (
    <div>
    <h1 className='text-center m-6 font-bold text-3xl'>Articles</h1>
    <div className='flex flex-wrap justify-between w-5/6 mx-auto text-2xl'>
      {articles.map((article) => (
        <div
          key={article.id}
          className='flex flex-col bg-white border border-gray-200 rounded-lg shadow-md p-4 w-1/5 m-2'
        >
          <p>{article.ref}</p>
          <p>{article.prix_vent}</p>
          <p>{article.sous_categorie}</p>
          <div className='flex gap-5 justify-around'>
            <Link to={`/details/${article.id}`}>
                <button className="mt-2 bg-blue-500 text-white rounded p-2">
                  View Details
                </button>
            </Link>
            <Link to={`/articles/${article.id}/buy`} className="mt-2 bg-blue-500 text-white rounded p-2 text-center">
                Buy
            </Link>
          </div>
          
        </div>
      ))}
    </div>
    <div className='flex gap-6 text-2xl underline m-5'>
      <Link to="/add">Add Article</Link>
      <Link to="/PV">View chart pv</Link>
      <Link to="/PR">View chart pr</Link>
    </div>
    
  </div>
  );
};

export default Articles;
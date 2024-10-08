import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './Articles';
import BarChart_PV from './BarChart_PV';
import BarChart_PR from './BarChart_PR';
import AddArticleForm from './AddArticleForm';
import BuyArticleForm from './BuyArticleForm '
import Details from './Details';

// Create the ArticleContext
export const ArticleContext = createContext();

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles')
      .then((response) => response.json()) 
      .then((data) => setArticles(data)); 
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      <Router>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/PV" element={<BarChart_PV />} />
          <Route path="/PR" element={<BarChart_PR />} />
          <Route path="/add" element={<AddArticleForm />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/articles/:id/buy" element={<BuyArticleForm />} />

        </Routes>
      </Router>
    </ArticleContext.Provider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BuyArticleForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [article, setArticle] = useState({});
  const [nomClient, setNomClient] = useState('');
  const [quantite, setQuantite] = useState(1);
  
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(`http://127.0.0.1:8000/api/articles/${id}/buy`, {
        nom_client: nomClient,
        quantite: quantite,
      });
      alert('Purchase successful!');
      navigate('/'); 
    } catch (error) {
      console.error('There was an error making the purchase:', error);
      
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Purchase Article: {article.ref}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nom_client" className="block text-sm font-medium text-gray-700">Client Name</label>
          <input
            type="text"
            id="nom_client"
            value={nomClient}
            onChange={(e) => setNomClient(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantite" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantite"
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
            min="1"
            max={article.quantite} 
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white rounded p-2 w-full">Purchase</button>
      </form>
    </div>
  );
};

export default BuyArticleForm;

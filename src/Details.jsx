import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleContext } from './App';

const Details = () => {
  const { articles } = useContext(ArticleContext);
  const { id } = useParams(); 
  const article = articles.find((art) => art.id === parseInt(id)); 

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{article.ref}</h1>
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-semibold">Details</h2>
      </div>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Description:</span> {article.description}
        </p>
        <p>
          <span className="font-semibold">Prix de vente:</span> {article.prix_vent} MAD
        </p>
        <p>
          <span className="font-semibold">Prix de mout:</span> {article.prix_route} MAD
        </p>
        <p>
          <span className="font-semibold">Quantité:</span> {article.quantite}
        </p>
        <p>
          <span className="font-semibold">Catégorie:</span> {article.categorie}
        </p>
        <p>
          <span className="font-semibold">Sous-catégorie:</span> {article.sous_categorie}
        </p>
        <p>
          <span className="font-semibold">Indicator 01:</span> {article.indicator_01}
        </p>
        <p>
          <span className="font-semibold">Indicator 02:</span> {article.indicator_02}
        </p>
        <p>
          <span className="font-semibold">Indicator 03:</span> {article.indicator_03}
        </p>
      </div>
    </div>
  );
};

export default Details;

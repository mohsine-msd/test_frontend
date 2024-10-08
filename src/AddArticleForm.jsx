import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const AddArticleForm = () => {
  const [formData, setFormData] = useState({
    ref: '',
    description: '',
    prix_vent: '',
    prix_route: '',
    quantite: '',
    categorie: '',
    sous_categorie: '',
    indicator_01: '',
    indicator_02: '',
    indicator_03: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      await axios.post('http://127.0.0.1:8000/api/articles', formData);
      alert('Article added successfully!');
      setFormData({
        ref: '',
        description: '',
        prix_vent: '',
        prix_de_mout: '',
        quantite: '',
        categorie: '',
        sous_categorie: '',
        indicator_01: '',
        indicator_02: '',
        indicator_03: ''
      });
      navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Reference</label>
          <input
            type="text"
            name="ref"
            value={formData.ref}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prix de Vente</label>
          <input
            type="number"
            name="prix_vent"
            value={formData.prix_vent}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prix de Montant</label>
          <input
            type="number"
            name="prix_route"
            value={formData.prix_route}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Quantité</label>
          <input
            type="number"
            name="quantite"
            value={formData.quantite}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Catégorie</label>
          <input
            type="text"
            name="categorie"
            value={formData.categorie}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Sous Catégorie</label>
          <input
            type="text"
            name="sous_categorie"
            value={formData.sous_categorie}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Indicator 01</label>
          <input
            type="text"
            name="indicator_01"
            value={formData.indicator_01}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Indicator 02</label>
          <input
            type="text"
            name="indicator_02"
            value={formData.indicator_02}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Indicator 03</label>
          <input
            type="text"
            name="indicator_03"
            value={formData.indicator_03}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AddArticleForm;

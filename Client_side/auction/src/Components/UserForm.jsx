import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product_name, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [product_type, setProductType] = useState('');
  const [Old_days, setOldDays] = useState('');


  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
   
      const response = await axios.post('http://localhost:8001/data/add', {
        product_name,
        description,
        price,
        image_url,
        product_type,
        Old_days,
      });

 
      setSuccessMessage('Product added successfully!');
      setProductName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setProductType('');
      setOldDays('');
    } catch (err) {
      setError('Failed to add product');
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>

   
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)} 
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
            required
          />
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)} 
          />
        </div>

        <div>
          <label>Product Type:</label>
          <input
            type="text"
            value={product_type}
            onChange={(e) => setProductType(e.target.value)}
          />
        </div>

        <div>
          <label>Old Days:</label>
          <input
            type="text"
            value={Old_days}
            onChange={(e) => setOldDays(e.target.value)}
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

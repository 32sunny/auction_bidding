import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
 
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8001/data/all');
        setProducts(response.data.products);
      } catch (err) {
        setError('Failed to fetch products'); 
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>Product List</h1>

    
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: '15px' }}>
            <div>
              <strong>{product.product_name}</strong>
            </div>
            <div>Description: {product.description}</div>
            <div>Type: {product.product_type}</div>
            <div>Old Days: {product.Old_days}</div>
            <div>Price: ${product.price}</div>
        
            {
              <div>
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

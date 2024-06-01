// frontend/src/components/Products.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-center my-4">Products</h2>
      <div className="list-group">
        {products.map((product) => (
          <div key={product.id} className="list-group-item">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p className="text-muted">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

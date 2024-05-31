// src/components/Products.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;

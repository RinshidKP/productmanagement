import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const localProducts = localStorage.getItem('products');
        if (localProducts) {
          setProducts(JSON.parse(localProducts));
          setLoading(false);
        } else {
          const response = await fetch('https://dummyjson.com/products?limit=10&select=id,title,price,thumbnail');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          localStorage.setItem('products', JSON.stringify(data.products));
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  return (
    <ProductContext.Provider value={{ products, loading, error, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

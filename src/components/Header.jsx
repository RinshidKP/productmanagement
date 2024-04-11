import { useContext } from 'react';
import { ProductContext } from '../store/ProductProvider';

const Header = ({ openModal }) => {
  const { products } = useContext(ProductContext);
  console.log(products);

  const handleAddProduct = () => {
    openModal();
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl mb-2 sm:mb-0">Total Products: {products.length}</h1>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddProduct} 
        >
          Add Product
        </button>
      </div>
    </header>
  );
};

export default Header;

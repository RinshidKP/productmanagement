import React, { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductProvider from './store/ProductProvider';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ProductProvider>
      <div>
        <Header openModal={openModal} />
        <ProductGrid />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <ToastContainer />

      </div>
    </ProductProvider>
  );
}

export default App;
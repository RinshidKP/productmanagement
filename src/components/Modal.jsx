import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ProductContext } from '../store/ProductProvider';

const Modal = ({ isOpen, onClose }) => {
    const { products, updateProducts } = useContext(ProductContext);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleProductImageUrlChange = (event) => {
        setProductImageUrl(event.target.value);
    };

    const validateForm = () => {
        if (!productName.trim()) {
            toast.error('Product name is required');
            return false;
        }

        if (!productPrice.trim()) {
            toast.error('Product price is required');
            return false;
        }

        if (isNaN(productPrice)) {
            toast.error('Product price must be a number');
            return false;
        }

        if (!productImageUrl.trim()) {
            toast.error('Product image URL is required');
            return false;
        }

        return true;
    };

    const handleAddProduct = (event) => {
        event.stopPropagation()
        if (!validateForm()) {
            return;
        }

        
        toast.success('Product added successfully', {
            onClose: () => {
                onClose();
            }
        });

        updateProducts([
            ...products,
            {
                id: products.length + 1,
                title: productName,
                price: productPrice,
                thumbnail: productImageUrl,
            },
        ]);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
                <div className="bg-white p-4 rounded shadow">
                    <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">&times;</button>
                    <h2 className="text-lg font-semibold mb-2">Add New Product</h2>
                    <form onSubmit={handleAddProduct}>
                        <div className="mb-2">
                            <label htmlFor="productName" className="block font-medium">Name:</label>
                            <input type="text" id="productName" value={productName} onChange={handleProductNameChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="productPrice" className="block font-medium">Price:</label>
                            <input type="number" id="productPrice" value={productPrice} onChange={handleProductPriceChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="productImageUrl" className="block font-medium">Image URL:</label>
                            <input type="text" id="productImageUrl" value={productImageUrl} onChange={handleProductImageUrlChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={handleClose} className="mr-2 px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
                            <button type="submit" className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-700">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;

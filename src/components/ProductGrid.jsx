import React, { useContext, useState } from 'react';
import { ProductContext } from '../store/ProductProvider';
import ReactPaginate from 'react-paginate';

const ProductGrid = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;

  const offset = currentPage * productsPerPage;
  const currentProducts = products.slice(offset, offset + productsPerPage);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2" loading="lazy" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        renderOnZeroPageCount={null}
        containerClassName={'flex justify-center mt-4'}
        activeClassName={'bg-blue-500 text-white px-4 py-2 rounded-full'}
        previousClassName={'mr-2 px-4 py-2 rounded border border-blue-500'}
        nextClassName={'ml-2 px-4 py-2 rounded border border-blue-500'}
        pageClassName={'mr-2 px-4 py-2 rounded border border-gray-300'}
        breakClassName={'mr-2 px-4 py-2 rounded border border-gray-300'}
      />
    </div>
  );
};

export default ProductGrid;

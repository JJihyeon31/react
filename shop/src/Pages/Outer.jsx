import React from 'react'
import './Banner.css'
import ProductList
 from '../component/ProductList';
const Outer = ({ products, category }) => {
  // 특정 카테고리에 해당하는 상품들만 필터링
  const filteredProducts = products.filter(product => product.category.includes('outer'));

  return (
    <div className='banner'>
      <h2>{category}</h2>
      <ProductList products={filteredProducts} />
    </div>
  );
};
export default Outer
import React from 'react'
import './Banner.css'
import ProductList from '../component/ProductList'

// function Home() {
//   return (
//     <div className='banner'>Shopping Mall</div>
//   )
// }

const Home = ({ products }) => {
  return (
    <div className='banner'>
      <h2 >전체 상품 목록</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home
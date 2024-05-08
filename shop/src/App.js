import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inner from './Pages/Inner';
import Home from './Pages/Home';
import Knit from './Pages/Knit';
import Outer from './Pages/Outer';
import Pants from './Pages/Pants';
import Shirt from './Pages/Shirt';
import Header from './component/Header';
import ProductList from './component/ProductList';

function App() {

  // 상품 데이터

  const products = [
    {id:1, name:'티셔츠', category:['inner'], price:'10,000', imageUrl:'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:2, name:'니트', category:['knit'], price:'23,000', imageUrl:'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:3, name:'청재킷', category:['outer'], price:'41,000', imageUrl:'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:4, name:'바지', category:['pants'], price:'27,000', imageUrl:'https://plus.unsplash.com/premium_photo-1663011451946-6b8d681b4737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:5, name:'셔츠', category:['shirt'], price:'10,000', imageUrl:'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:6, name:'니트 가디건', category:['knit', 'outer'], price:'26,500', imageUrl:'https://images.unsplash.com/photo-1610288311735-39b7facbd095?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  ];

  return (
    <div className="App">
      <div className='root-wrap'>
        <BrowserRouter>
          <Header />
            <Routes>
              {/* 경로 설정 */}
              <Route path="/" element={<Home products={products}/>} /> 
              {/* <Route path="/inner" element={<Inner />} /> */}
              <Route path='/inner' element={<Inner products={products} category="inner" />} />
              <Route path="/knit" element={<Knit products={products} category="knit"/>} />
              <Route path="/outer" element={<Outer products={products} category="outer"/>} />
              <Route path="/pants" element={<Pants products={products} category="pants"/>} />
              <Route path="/shirt" element={<Shirt products={products} category="shirt"/>} />
            </Routes>
        </BrowserRouter>
        <br />
      </div>
      <div className='item-wrap'>
          <div className='item-board'>
              {/* <ProductList products={products} /> */}
          </div>
      </div>
    </div>
  );
}

export default App;

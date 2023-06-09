import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Components
import Nav from './components/Nav';

// Pages
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

  return (
    <HashRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='store' element={<Store products={products} cart={cart} setCart={setCart} />} />
          <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
    </HashRouter>
  );
}

export default App;

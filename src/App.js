import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Components
import Nav from './components/Nav';

// Pages
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='store' element={<Store cart={cart} setCart={setCart} />} />
          <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

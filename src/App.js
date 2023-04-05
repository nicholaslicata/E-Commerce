import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='store' element={<Store />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

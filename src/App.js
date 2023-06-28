import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/cart'
import Checkout from './components/Checkout/checkout';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path = "/" element = { <ItemListContainer/>}/>
            <Route path = "/category/:categoryId" element = {<ItemListContainer />}/>
            <Route path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
            <Route path = '/cart' element = {<Cart />}/>
            <Route path = '/checkout-compra/:orderidCompra' element = {<Checkout />} />
            <Route path = "*" element = {<h1>ERROR 404 Page not found</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App
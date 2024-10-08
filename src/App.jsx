import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import { CartProvider } from './components/context/CartContext';

function App() {
    return (
        <Router basename="/React-ecommerce">
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;

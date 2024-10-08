import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import Footer from './components/Footer'; // Asegúrate de tener el componente Footer
import { CartProvider } from './components/context/CartContext';
import CheckoutPage from './components/CheckoutPage'; // Asegúrate de que la ruta es correcta

function App() {
    return (
        <Router basename="/React-ecommerce">
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" component={CheckoutPage} />
                </Routes>
                <Footer /> {/* El footer estará visible en todas las páginas */}
            </CartProvider>
        </Router>
    );
}

export default App;
